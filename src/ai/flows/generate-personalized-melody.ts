'use server';

/**
 * @fileOverview An AI agent that generates a personalized 15-second audio affirmation based on user input about their desired relationship outcome.
 *
 * - generatePersonalizedMelody - A function that handles the melody generation process.
 * - GeneratePersonalizedMelodyInput - The input type for the generatePersonalizedMelody function.
 * - GeneratePersonalizedMelodyOutput - The return type for the generatePersonalizedMelody function.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {z} from 'genkit';
import wav from 'wav';

const GeneratePersonalizedMelodyInputSchema = z.string().describe(
  'Details about your desired relationship outcome.  The AI will use these details to generate a unique 15-second audio affirmation tailored to influence your state of mind and attract that outcome.'
);
export type GeneratePersonalizedMelodyInput = z.infer<
  typeof GeneratePersonalizedMelodyInputSchema
>;

const GeneratePersonalizedMelodyOutputSchema = z.object({
  media: z.string().describe('The generated audio as a data URI.'),
});
export type GeneratePersonalizedMelodyOutput = z.infer<
  typeof GeneratePersonalizedMelodyOutputSchema
>;

export async function generatePersonalizedMelody(
  input: GeneratePersonalizedMelodyInput
): Promise<GeneratePersonalizedMelodyOutput> {
  return generatePersonalizedMelodyFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generatePersonalizedMelodyFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedMelodyFlow',
    inputSchema: GeneratePersonalizedMelodyInputSchema,
    outputSchema: GeneratePersonalizedMelodyOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: `Generate a 15-second audio affirmation for the following desired relationship outcome: ${input}`,
    });
    if (!media) {
      throw new Error('no media returned');
    }
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    return {
      media: 'data:audio/wav;base64,' + (await toWav(audioBuffer)),
    };
  }
);
