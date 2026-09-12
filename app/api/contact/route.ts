import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiter: max 5 submissions per IP per 10 minutes
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request){
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    if (isRateLimited(ip)) {
    const body = await request.json();
    const { name, company, email, phone, support, message } = body;

    // Required fields
    if (!name || !email || !support || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Type checks
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof support !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json({ error: 'Invalid field types' }, { status: 400 });
    }

    // Length limits
    if (
      name.length > MAX_FIELD_LENGTH ||
      email.length > MAX_FIELD_LENGTH ||
      support.length > MAX_FIELD_LENGTH ||
      (company && company.length > MAX_FIELD_LENGTH) ||
      (phone && phone.length > MAX_FIELD_LENGTH) ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json({ error: 'One or more fields is too long' }, { status: 400 });
    }

    // Email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Basic sanitization: strip HTML tags from user input before embedding in email
    const strip = (s: string) => s.replace(/<[^>]*>/g, '');
    const safe = {
      name: strip(name),
      company: company ? strip(company) : '',
      email: strip(email),
      phone: phone ? strip(phone) : '',
      support: strip(support),
      message: strip(message),
    };

    await resend.emails.send({
      from: 'TrackOne Website <noreply@trackoneparalegals.com>',
      to: 'hello@trackoneparalegals.com',
      replyTo: safe.email,
      subject: `New support request from ${safe.name}`,
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Company:</strong> ${safe.company || '—'}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone || '—'}</p>
        <p><strong>Support Required:</strong> ${safe.support}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}