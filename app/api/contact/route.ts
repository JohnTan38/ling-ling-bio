import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const gmailUser = process.env.GMAIL_USER;
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    const toEmail = process.env.CONTACT_TO || gmailUser;
    const defaultReplyTo = process.env.REPLY_TO;

    // Check if Gmail OAuth2 is configured
    if (!gmailUser || !clientId || !clientSecret || !refreshToken || !toEmail) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, organization, message, email } = body;

    // Validate input
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !organization || !message || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const accessTokenResponse = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: gmailUser,
        clientId,
        clientSecret,
        refreshToken,
        accessToken: accessTokenResponse?.token || undefined,
      },
    });

    const replyTo = email || defaultReplyTo || gmailUser;

    // Send email using Gmail SMTP
    const data = await transporter.sendMail({
      from: `"Speaker Ling " <${gmailUser}>`,
      to: toEmail,
      replyTo,
      subject: `New Contact Inquiry from ${name}`,
      text: [
        'New Contact Form Submission',
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization}`,
        'Message:',
        message,
        '',
        'Sent from Khor Ling Ling Portfolio Website',
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Sent from Khor Ling Ling Portfolio Website</p>
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
