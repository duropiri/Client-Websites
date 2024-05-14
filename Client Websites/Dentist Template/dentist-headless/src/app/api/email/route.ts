import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, telephone, message } = await request.json();

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Form Submission',
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nTelephone: ${telephone}\nMessage: ${message}`
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: Error | null, info: nodemailer.SentMessageInfo) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}
