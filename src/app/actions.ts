"use server";

import { generatePersonalizedMelody } from "@/ai/flows/generate-personalized-melody";

type ActionResult = {
  message: string;
  audioUrl: string | null;
  error?: boolean;
};

export async function createMelodyAction(
  prompt: string
): Promise<ActionResult> {
  if (!prompt || prompt.trim().length < 10) {
    return {
      message:
        "Por favor, proporciona más detalles sobre el resultado deseado (al menos 10 caracteres).",
      audioUrl: null,
      error: true,
    };
  }

  try {
    const result = await generatePersonalizedMelody(prompt);
    if (!result.media) {
      throw new Error("La IA no devolvió ninguna melodía.");
    }
    return {
      message: "¡Tu melodía personalizada está lista!",
      audioUrl: result.media,
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        "Ocurreu un error al generar tu melodía. Por favor, inténtalo de nuevo más tarde.",
      audioUrl: null,
      error: true,
    };
  }
}
