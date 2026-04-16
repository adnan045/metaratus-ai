import { NextResponse } from 'next/server';
import { saveLead } from '../../../lib/lead-storage';

export async function POST(request) {
  try {
    const data = await request.json();

    // Anti-Spam Honeypot Check
    // If 'website_hidden' is filled, it's likely a bot
    if (data.website_hidden) {
      console.warn('Bot submission detected via honeypot');
      return NextResponse.json(
        { message: 'Submission filtered by anti-spam system.' },
        { status: 400 }
      );
    }

    // Basic Server-Side Validation
    if (!data.fullName || !data.email || !data.message) {
      return NextResponse.json(
        { message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Remove honeypot field from storage
    const { website_hidden, ...leadData } = data;

    // Save lead
    await saveLead(leadData);

    // In a real production app, you would use an email service like SendGrid here
    console.log(`NEW LEAD: ${leadData.fullName} from ${leadData.company}`);
    console.log(`Subject: New Website Lead — ${leadData.interest} — ${leadData.company}`);

    return NextResponse.json(
      { message: 'Success! Your message has been received.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
