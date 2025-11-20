export async function callOpenAi(model: string, systemPrompt: string, prompt: string) {
    const openAIResponse = await fetch("/api/generate/openAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, system_prompt: systemPrompt, system_mode: model }),
    });

    return openAIResponse
}