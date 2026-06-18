import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import {
  contactNotificationHtml,
  contactNotificationText,
} from '@/lib/emails/contact-notification'
import {
  autoResponseHtml,
  autoResponseText,
} from '@/lib/emails/auto-response'

export const dynamic = 'force-dynamic'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(5).max(200),
  message: z.string().min(20).max(2000),
})

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'akorsolomon.dev@gmail.com'
// Switch to 'Solomon Akor <noreply@solomonakor.dev>' once domain is verified in Resend dashboard
const FROM_SENDER = process.env.EMAIL_FROM ?? 'Solomon Akor <onboarding@resend.dev>'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = schema.parse(body)
    const receivedAt = new Date()

    // Send both emails in parallel
    const [notificationResult, autoReplyResult] = await Promise.allSettled([
      resend.emails.send({
        from: FROM_SENDER,
        to: CONTACT_EMAIL,
        replyTo: data.email,
        subject: `New message: ${data.subject} — from ${data.name}`,
        html: contactNotificationHtml({ ...data, receivedAt }),
        text: contactNotificationText({ ...data, receivedAt }),
      }),
      resend.emails.send({
        from: FROM_SENDER,
        to: data.email,
        replyTo: CONTACT_EMAIL,
        subject: `Thank You for Contacting Solomon Akor`,
        html: autoResponseHtml(data),
        text: autoResponseText(data),
      }),
    ])

    // Resend SDK resolves even on failure — check the error property too
    const notifFailed =
      notificationResult.status === 'rejected' ||
      (notificationResult.status === 'fulfilled' && notificationResult.value.error)

    const replyFailed =
      autoReplyResult.status === 'rejected' ||
      (autoReplyResult.status === 'fulfilled' && autoReplyResult.value.error)

    if (notifFailed) {
      const reason =
        notificationResult.status === 'rejected'
          ? notificationResult.reason
          : notificationResult.value.error
      console.error('[contact] notification failed:', JSON.stringify(reason))
    }

    if (replyFailed) {
      const reason =
        autoReplyResult.status === 'rejected'
          ? autoReplyResult.reason
          : autoReplyResult.value.error
      console.error('[contact] auto-reply failed:', JSON.stringify(reason))
    }

    if (notifFailed) {
      return NextResponse.json(
        { success: false, message: 'Failed to send message. Please email directly at hello@solomonakor.dev' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Message sent. I'll be in touch within 24–48 hours." },
      { status: 200 }
    )
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: err.errors },
        { status: 400 }
      )
    }
    console.error('[contact] unexpected error:', err)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please email directly at hello@solomonakor.dev' },
      { status: 500 }
    )
  }
}
