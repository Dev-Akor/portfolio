const SITE_URL = 'https://solomonakor.dev'
const LOGO_URL = `${SITE_URL}/images/logo.png`
const PORTRAIT_URL = `${SITE_URL}/images/solomon-akor.jpg`

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\n/g, '<br />')
}

interface ContactNotificationData {
  name: string
  email: string
  subject: string
  message: string
  receivedAt: Date
}

export function contactNotificationHtml(data: ContactNotificationData): string {
  const formattedDate = data.receivedAt.toLocaleString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message — solomonakor.dev</title>
  <style>
    @media only screen and (max-width: 600px) {
      .wrapper { padding: 12px !important; }
      .card { padding: 20px !important; }
      .btn-row td { display: block !important; padding-bottom: 10px !important; }
      .btn { width: 100% !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f4f6;padding:32px 16px;" class="wrapper">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

          <!-- ── HEADER ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);border-radius:12px 12px 0 0;padding:28px 32px;" class="card">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;vertical-align:middle;">
                          <img src="${LOGO_URL}" alt="Solomon Akor" width="44" height="44"
                               style="border-radius:8px;display:block;border:2px solid rgba(255,255,255,0.3);" />
                        </td>
                        <td style="vertical-align:middle;">
                          <div style="color:#ffffff;font-size:18px;font-weight:700;line-height:1.2;">Solomon Akor</div>
                          <div style="color:#93c5fd;font-size:12px;margin-top:2px;">solomonakor.dev</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <div style="background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:20px;padding:6px 14px;display:inline-block;">
                      <span style="color:#ffffff;font-size:12px;font-weight:600;letter-spacing:0.05em;">NEW MESSAGE</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── ALERT BANNER ── -->
          <tr>
            <td style="background:#1e40af;padding:14px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size:20px;vertical-align:middle;margin-right:10px;">&#128236;</span>
                    <span style="color:#bfdbfe;font-size:14px;font-weight:600;letter-spacing:0.02em;vertical-align:middle;">
                      New contact form submission received
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="background:#ffffff;padding:32px;" class="card">

              <!-- Sender Details Table -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:24px;">
                <tr style="background:#f9fafb;">
                  <td colspan="2" style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">
                    <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;color:#6b7280;text-transform:uppercase;">
                      Sender Details
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;width:100px;color:#9ca3af;font-size:13px;font-weight:600;border-bottom:1px solid #f3f4f6;white-space:nowrap;">
                    From
                  </td>
                  <td style="padding:12px 16px;color:#111827;font-size:14px;font-weight:700;border-bottom:1px solid #f3f4f6;">
                    ${esc(data.name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;color:#9ca3af;font-size:13px;font-weight:600;border-bottom:1px solid #f3f4f6;white-space:nowrap;">
                    Email
                  </td>
                  <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid #f3f4f6;">
                    <a href="mailto:${esc(data.email)}"
                       style="color:#2563eb;text-decoration:none;font-weight:600;">${esc(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;color:#9ca3af;font-size:13px;font-weight:600;border-bottom:1px solid #f3f4f6;white-space:nowrap;">
                    Subject
                  </td>
                  <td style="padding:12px 16px;color:#111827;font-size:14px;font-weight:600;border-bottom:1px solid #f3f4f6;">
                    ${esc(data.subject)}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;color:#9ca3af;font-size:13px;font-weight:600;white-space:nowrap;">
                    Received
                  </td>
                  <td style="padding:12px 16px;color:#6b7280;font-size:13px;">
                    ${formattedDate}
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom:8px;">
                <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;color:#6b7280;text-transform:uppercase;">
                  Message
                </span>
              </div>
              <div style="background:#f8faff;border:1px solid #dbeafe;border-left:4px solid #2563eb;border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
                <p style="margin:0;font-size:15px;line-height:1.75;color:#1f2937;">${esc(data.message)}</p>
              </div>

              <!-- CTA Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" class="btn-row">
                <tr>
                  <td style="padding-right:8px;" width="50%" class="btn">
                    <a href="mailto:${esc(data.email)}?subject=Re:%20${encodeURIComponent(data.subject)}"
                       style="display:block;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;
                              text-align:center;text-decoration:none;padding:14px 20px;border-radius:8px;
                              letter-spacing:0.02em;">
                      &#9993;&nbsp; Reply via Email
                    </a>
                  </td>
                  <td style="padding-left:8px;" width="50%" class="btn">
                    <a href="${SITE_URL}"
                       style="display:block;background:#111827;color:#ffffff;font-size:14px;font-weight:700;
                              text-align:center;text-decoration:none;padding:14px 20px;border-radius:8px;
                              letter-spacing:0.02em;">
                      &#127758;&nbsp; Visit Website
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── SIGNATURE FOOTER ── -->
          <tr>
            <td style="background:#1f2937;border-radius:0 0 12px 12px;padding:28px 32px;" class="card">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:top;padding-right:16px;" width="52">
                    <img src="${PORTRAIT_URL}" alt="Solomon Akor" width="48" height="48"
                         style="border-radius:50%;border:2px solid #374151;display:block;" />
                  </td>
                  <td style="vertical-align:top;">
                    <div style="color:#f9fafb;font-size:15px;font-weight:700;margin-bottom:2px;">Solomon Akor</div>
                    <div style="color:#9ca3af;font-size:12px;line-height:1.6;margin-bottom:12px;">
                      Software Developer&nbsp;&#124;&nbsp;Head of Operations&nbsp;&#124;&nbsp;Business Executive<br />
                      Co-Founder, Kira Scales Limited
                    </div>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;">
                          <a href="${SITE_URL}" style="color:#93c5fd;font-size:12px;text-decoration:none;">&#127758; solomonakor.dev</a>
                        </td>
                        <td style="padding-right:12px;">
                          <a href="https://github.com/dev-akor" style="color:#93c5fd;font-size:12px;text-decoration:none;">&#128187; dev-akor</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:4px;padding-right:12px;">
                          <a href="mailto:akorsolomon.dev@gmail.com" style="color:#93c5fd;font-size:12px;text-decoration:none;">&#9993; akorsolomon.dev@gmail.com</a>
                        </td>
                        <td style="padding-top:4px;">
                          <a href="https://wa.me/2349064817484" style="color:#93c5fd;font-size:12px;text-decoration:none;">&#128241; +234 906 481 7484</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div style="border-top:1px solid #374151;margin-top:20px;padding-top:16px;">
                <p style="margin:0;color:#4b5563;font-size:11px;text-align:center;">
                  This notification was sent automatically from your contact form at
                  <a href="${SITE_URL}" style="color:#6b7280;text-decoration:none;">solomonakor.dev</a>.
                  Reply to this email to respond directly to ${esc(data.name)}.
                </p>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

export function contactNotificationText(data: ContactNotificationData): string {
  const formattedDate = data.receivedAt.toLocaleString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long',
    day: 'numeric', hour: '2-digit', minute: '2-digit',
  })
  return `NEW CONTACT FORM MESSAGE — solomonakor.dev
==========================================

From:     ${data.name}
Email:    ${data.email}
Subject:  ${data.subject}
Received: ${formattedDate}

MESSAGE
-------
${data.message}

---
Reply to: ${data.email}
Website:  ${SITE_URL}

—
Solomon Akor
Software Developer | Head of Operations | Business Executive
Co-Founder, Kira Scales Limited
${SITE_URL}
`
}
