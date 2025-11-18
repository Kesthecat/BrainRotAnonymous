import { useEffect, useState } from "react";
import { Result } from "../type";

interface UseGetRecipesState {
    isLoading: boolean;
    response: Result | null;
    error: string | null;
}

const SYSTEM_PROMPT = `First check the list of ingredient and throw and error if any ingredient is not edible saying "Not Edible" in a valid JSON like this {"error": 'Not Edible"}. Then if the list of ingredients in edible, offer 3 concise recipe ideas based on the user's listed ingredients. Respond with a valid JSON like this: {"ingredients": [list of ingredients part of the prompt], "recipes": [{"title": "Short Name", "description": "Brief description of the recipe"}]}`;


export default function useGetRecipes(prompt: string | null): UseGetRecipesState {
    const [state, setState] = useState<UseGetRecipesState>({
        isLoading: false,
        response: null,
        error: null,
    });

    useEffect(() => {
        const trimmedPrompt = prompt?.trim();

        // this should not happen as button is disabled if there is no prompt
        if (!trimmedPrompt) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setState({ isLoading: false, response: null, error: null });
            return;
        }

        let cancelled = false;
        const controller = new AbortController();

        setState((previous) => ({ ...previous, isLoading: true, error: null }));

        (async () => {
            try {
                const openAIResponse = await fetch("/api/generate/openAI", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ prompt: trimmedPrompt, system_prompt: SYSTEM_PROMPT }),
                    signal: controller.signal,
                });

                const payload = await openAIResponse.json().catch(() => null);

                if (!openAIResponse.ok) {
                    const errorMessage =
                        (payload && typeof payload.error === "string" && payload.error) ||
                        openAIResponse.statusText ||
                        "Failed to fetch recipes.";

                    if (cancelled) return;
                    setState({
                        isLoading: false,
                        response: null,
                        error: errorMessage,
                    });
                    return;
                }

                const parsedResults = JSON.parse(payload.result);

                const result: Result =
                    payload && typeof parsedResults === 'object' ? parsedResults : null;

                if (cancelled) return;

                setState({ isLoading: false, response: result, error: null });

            } catch (error: unknown) {
                if (controller.signal.aborted || cancelled) return;

                const message =
                    error instanceof Error ? error.message : "Unexpected error occurred.";

                setState({ isLoading: false, response: null, error: message });
            }
        })();

        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [prompt]);

    return state;
}
