import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { auth } from '@/lib/auth';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await auth();
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { message } = await req.json();

    if (!message) {
      return new NextResponse('Message is required', { status: 400 });
    }

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful personal assistant. Provide clear and concise responses.',
        },
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const response = chatCompletion.choices[0]?.message?.content || 'Sorry, I could not process your request.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}