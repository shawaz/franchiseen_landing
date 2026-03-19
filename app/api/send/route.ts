import { Resend } from 'resend';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing in environment variables.");
    return NextResponse.json({ error: 'Mail service misconfigured' }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, subject, body } = await req.json();

    if (!name || !email || !subject || !body) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Franchiseen Contact <contact@franchiseen.com>',
      to: ['help@codelude.com'],
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${body}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
