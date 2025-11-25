import { NextResponse, type NextRequest } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Przekształcaj tekst w uporządkowane, czytelne notatki i wzroc wartosc tylko notaktek. nie dopisuj zadnych informacji, nie dodawaj nic od sieb ie ma byc mniej wiecej tyle znakow co dal uzytkownik nie dodawwaj zadnychb informnacji od siebie

        `,
        },
        { role: "user", content },
      ],
    });

    const aiNotes = response.choices[0].message.content;

    return NextResponse.json({ notes: aiNotes });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "AI error" }, { status: 500 });
  }
}
