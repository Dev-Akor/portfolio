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

interface AutoResponseData {
  name: string
  email: string
  subject: string
  message: string
}

export function autoResponseHtml(data: AutoResponseData): string {
  const firstName = data.name.split(' ')[0]
  const messagePreview = data.message.length > 200
    ? data.message.substring(0, 200).trim() + '…'
    : data.message

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You for Contacting Solomon Akor</title>
  <style>
    @media only screen and (max-width: 600px) {
      .wrapper { padding: 12px !important; }
      .card { padding: 20px !important; }
      .social-table td { display: inline-block !important; padding: 4px 6px !important; }
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
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;vertical-align:middle;">
                          <img src="${LOGO_URL}" alt="Solomon Akor" width="44" height="44"
                               style="border-radius:8px;display:block;border:2px solid rgba(255,255,255,0.3);" />
                        </td>
                        <td style="vertical-align:middle;">
                          <div style="color:#ffffff;font-size:18px;font-weight:700;line-height:1.2;">Solomon Akor</div>
                          <div style="color:#93c5fd;font-size:12px;margin-top:2px;">Software Developer &amp; Head of Operations</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── CONFIRMATION BANNER ── -->
          <tr>
            <td style="background:#15803d;padding:14px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <span style="font-size:18px;vertical-align:middle;margin-right:8px;">&#10003;</span>
                    <span style="color:#dcfce7;font-size:14px;font-weight:600;letter-spacing:0.02em;vertical-align:middle;">
                      Message received successfully
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="background:#ffffff;padding:36px 32px;" class="card">

              <!-- Greeting -->
              <h1 style="margin:0 0 6px 0;font-size:22px;font-weight:700;color:#111827;">
                Dear ${esc(firstName)},
              </h1>
              <p style="margin:0 0 20px 0;font-size:15px;color:#6b7280;">
                Thank you for contacting me through my website.
              </p>

              <!-- Main Message -->
              <p style="margin:0 0 16px 0;font-size:15px;line-height:1.75;color:#374151;">
                Your message has been received successfully and is currently under review.
                I appreciate your interest and will respond as soon as possible.
              </p>
              <p style="margin:0 0 24px 0;font-size:15px;line-height:1.75;color:#374151;">
                Whether your inquiry relates to software development, business operations,
                digital solutions, consulting, partnerships, or Kira Scales projects,
                I look forward to connecting with you.
              </p>

              <!-- Response Time Badge -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;font-size:22px;vertical-align:middle;">&#9200;</td>
                        <td style="vertical-align:middle;">
                          <div style="font-size:12px;font-weight:700;letter-spacing:0.06em;color:#1d4ed8;text-transform:uppercase;margin-bottom:2px;">
                            Expected Response Time
                          </div>
                          <div style="font-size:15px;font-weight:600;color:#1e3a8a;">
                            Within 24–48 business hours
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Summary -->
              <div style="margin-bottom:8px;">
                <span style="font-size:11px;font-weight:700;letter-spacing:0.08em;color:#6b7280;text-transform:uppercase;">
                  Your Message
                </span>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="border:1px solid #e5e7eb;border-radius:8px;margin-bottom:28px;overflow:hidden;">
                <tr style="background:#f9fafb;">
                  <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;">
                    <span style="font-size:13px;color:#6b7280;">Subject: </span>
                    <span style="font-size:13px;font-weight:600;color:#111827;">${esc(data.subject)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px;font-size:14px;line-height:1.7;color:#4b5563;font-style:italic;">
                    &ldquo;${esc(messagePreview)}&rdquo;
                  </td>
                </tr>
              </table>

              <!-- Divider with portrait -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td style="border-top:1px solid #e5e7eb;vertical-align:middle;" width="50%"></td>
                  <td style="padding:0 16px;vertical-align:middle;text-align:center;" width="68">
                    <img src="${PORTRAIT_URL}" alt="Solomon Akor" width="56" height="56"
                         style="border-radius:50%;border:3px solid #dbeafe;display:block;" />
                  </td>
                  <td style="border-top:1px solid #e5e7eb;vertical-align:middle;" width="50%"></td>
                </tr>
              </table>

              <!-- CTA Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;" class="btn-row">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    <a href="mailto:akorsolomon.dev@gmail.com?subject=Re:%20${encodeURIComponent(data.subject)}"
                       style="display:inline-block;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;
                              text-align:center;text-decoration:none;padding:14px 36px;border-radius:8px;
                              letter-spacing:0.02em;margin-right:8px;">
                      &#9993;&nbsp; Reply to Solomon
                    </a>
                    <a href="${SITE_URL}"
                       style="display:inline-block;background:#111827;color:#ffffff;font-size:14px;font-weight:700;
                              text-align:center;text-decoration:none;padding:14px 28px;border-radius:8px;
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
                  <td>
                    <div style="color:#d1d5db;font-size:13px;margin-bottom:4px;font-weight:500;">Best regards,</div>
                    <div style="color:#f9fafb;font-size:16px;font-weight:700;margin-bottom:4px;">Solomon Akor</div>
                    <div style="color:#9ca3af;font-size:12px;line-height:1.6;margin-bottom:16px;">
                      Software Developer&nbsp;&#124;&nbsp;Head of Operations&nbsp;&#124;&nbsp;Business Executive<br />
                      Co-Founder, Kira Scales Limited
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Social Links -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                     style="background:rgba(255,255,255,0.05);border-radius:8px;padding:16px;"
                     class="social-table">
                <tr>
                  <td style="padding:4px 12px 4px 0;white-space:nowrap;">
                    <a href="${SITE_URL}" style="color:#93c5fd;font-size:12px;text-decoration:none;font-weight:500;">
                      &#127758;&nbsp;solomonakor.dev
                    </a>
                  </td>
                  <td style="padding:4px 12px;white-space:nowrap;border-left:1px solid #374151;">
                    <a href="https://github.com/dev-akor" style="color:#93c5fd;font-size:12px;text-decoration:none;font-weight:500;">
                      &#128187;&nbsp;dev-akor
                    </a>
                  </td>
                  <td style="padding:4px 12px;white-space:nowrap;border-left:1px solid #374151;">
                    <a href="mailto:akorsolomon.dev@gmail.com" style="color:#93c5fd;font-size:12px;text-decoration:none;font-weight:500;">
                      &#9993;&nbsp;Gmail
                    </a>
                  </td>
                  <td style="padding:4px 0 4px 12px;white-space:nowrap;border-left:1px solid #374151;">
                    <a href="https://wa.me/2349064817484" style="color:#4ade80;font-size:12px;text-decoration:none;font-weight:500;">
                      &#128241;&nbsp;WhatsApp
                    </a>
                  </td>
                </tr>
              </table>

              <div style="border-top:1px solid #374151;margin-top:20px;padding-top:16px;">
                <p style="margin:0;color:#4b5563;font-size:11px;text-align:center;">
                  You can reply directly to this email and it will reach Solomon.
                  Sent from the contact form at
                  <a href="${SITE_URL}" style="color:#6b7280;text-decoration:none;">solomonakor.dev</a>.
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

export function autoResponseText(data: AutoResponseData): string {
  const firstName = data.name.split(' ')[0]
  return `Dear ${firstName},

Thank you for reaching out through my website. Your message has been received successfully and is currently under review. I appreciate your interest and will respond as soon as possible.

Whether your inquiry relates to software development, business operations, digital solutions, consulting, partnerships, or Kira Scales projects, I look forward to connecting with you.

Expected response time: Within 24–48 business hours.

---
Best regards,

Solomon Akor
Software Developer | Head of Operations | Business Executive
Co-Founder, Kira Scales Limited

Website:  https://solomonakor.dev
GitHub:   https://github.com/dev-akor
Email:    akorsolomon.dev@gmail.com
Phone:    +234 906 481 7484

---
You can reply directly to this email and it will reach Solomon.
Sent from the contact form at solomonakor.dev.
`
}
