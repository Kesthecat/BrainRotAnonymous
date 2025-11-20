import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const DEFAULT_MODEL = "gpt-5-nano";

export async function POST(request: NextRequest) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "OpenAI API key is not configured on the server." },
            { status: 500 },
        );
    }

    let prompt: string | undefined;
    let systemPrompt: string | undefined;
    let systemModel: string | undefined;

    try {
        const body = await request.json();
        if (typeof body?.prompt === "string") {
            prompt = body.prompt.trim();
        }
        if (typeof body?.system_prompt === "string") {
            systemPrompt = body.system_prompt.trim();
        }
        if (typeof body?.system_model === "string") {
            systemModel = body.system_model.trim();
        }
    } catch {
        return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
    }

    if (!prompt || !systemPrompt) {
        return NextResponse.json(
            { error: "Provide a non-empty `prompt` or `systemPrompt` string in the request body." },
            { status: 400 },
        );
    }

    const client = new OpenAI({ apiKey });

    try {
        const response = await client.responses.create({
            model: systemModel ?? DEFAULT_MODEL,
            input: [
                { role: "assistant", content: systemPrompt },
                { role: "user", content: prompt },
            ],
            store: true,
        });

        if (response.output_text.includes('error')) {
            return NextResponse.json(
                { error: "Not Edible" },
                { status: 400 },
            );
        }

        return NextResponse.json({ prompt, result: response.output_text });
    } catch (error: unknown) {
        const message =
            typeof error === "object" && error !== null && "message" in error
                ? String((error as { message?: string }).message)
                : "OpenAI request failed.";

        return NextResponse.json(
            { error: message },
            { status: 502 },
        );
    }
}
