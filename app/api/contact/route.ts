import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { user_name, user_email, subject, message } = await req.json()

    if (!user_name || !user_email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 503 })
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sarveshts2k4@gmail.com"],
      replyTo: user_email,
      subject: `[Portfolio] ${subject} — from ${user_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 24px 32px;">
            <h1 style="margin: 0; color: #000; font-size: 20px; font-weight: 700;">New Message from Portfolio</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 80px;">Name</td>
                <td style="padding: 10px 0; color: #fff; font-size: 15px; font-weight: 600;">${user_name}</td>
              </tr>
              <tr style="border-top: 1px solid #222;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${user_email}" style="color: #f59e0b; text-decoration: none;">${user_email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #222;">
                <td style="padding: 10px 0; color: #888; font-size: 13px;">Subject</td>
                <td style="padding: 10px 0; color: #fff; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #f59e0b;">
              <p style="margin: 0 0 8px; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; color: #e5e5e5; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${user_email}?subject=Re: ${subject}" 
                style="display: inline-block; background: #f59e0b; color: #000; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Reply to ${user_name}
              </a>
            </div>
          </div>
          <div style="padding: 16px 32px; border-top: 1px solid #222; text-align: center;">
            <p style="margin: 0; color: #555; font-size: 12px;">Sent via Sarvesh TS Portfolio — sarveshts.com</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("API route error:", err)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
