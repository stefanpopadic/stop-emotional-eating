import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, quizType, answers } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  const apiKey = process.env.EMAILIT_API_KEY;
  const audienceId = process.env.EMAILIT_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error('Missing EMAILIT_API_KEY or EMAILIT_AUDIENCE_ID environment variables');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const response = await fetch(`https://api.emailit.com/v2/audiences/${audienceId}/subscribers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: firstName || '',
        custom_fields: {
          quiz_type: quizType || '',
          source: 'quiz',
          ...(answers ? { quiz_answers: JSON.stringify(answers) } : {}),
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Emailit API error:', response.status, errorData);
      return res.status(200).json({ success: true, emailCaptured: false });
    }

    return res.status(200).json({ success: true, emailCaptured: true });
  } catch (error) {
    console.error('Emailit API error:', error);
    return res.status(200).json({ success: true, emailCaptured: false });
  }
}
