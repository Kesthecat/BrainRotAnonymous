import { useEffect, useState } from "react";
import { ModelResponse, Result } from "../type";
import { callOpenAi } from "../utils/callOpenAI";
interface UseGetRecipesState {
    nano: ModelResponse,
    mini: ModelResponse,
    gpt5: ModelResponse
}

const SYSTEM_PROMPT = `First check the list of ingredient and throw and error if any ingredient is not edible saying "Not Edible" in a valid JSON like this {"error": 'Not Edible"}. Then if the list of ingredients in edible, offer 3 concise recipe ideas based on the user's listed ingredients and the url to the recipe. Respond with a valid JSON like this: {"ingredients": [list of ingredients part of the prompt], "recipes": [{"title": "Short Name", "description": "Brief description of the recipe", "url": "url to the recipe"}]}`;


export default function useGetRecipes(prompt: string | null): UseGetRecipesState {
    const initialState = {
        nano: {
            isLoading: false,
            response: null,
            error: null,
            duration: 0
        },
        mini: {
            isLoading: false,
            response: null,
            error: null,
            duration: 0,
        },
        gpt5: {
            isLoading: false,
            response: null,
            error: null,
            duration: 0,
        }
    }

    const [state, setState] = useState<UseGetRecipesState>(initialState);

    useEffect(() => {
        const trimmedPrompt = prompt?.trim();

        // this should not happen as button is disabled if there is no prompt
        if (!trimmedPrompt) {
            return;
        }

        (async () => {
            setState({ ...initialState, nano: { ...initialState.nano, isLoading: true }, mini: { ...initialState.mini, isLoading: true }, gpt5: { ...initialState.gpt5, isLoading: true } })
            const models = ['gpt-5-nano', 'gpt-5-mini', 'gpt-5'] as const;

            type ModelId = (typeof models)[number];

            const modelKeys: Record<ModelId, keyof UseGetRecipesState> = {
                'gpt-5-nano': 'nano',
                'gpt-5-mini': 'mini',
                "gpt-5": "gpt5",
            }

            await Promise.all(
                models.map(async model => {
                    let timer: ReturnType<typeof setInterval> | null = null;
                    let seconds = 0;

                    const startTimer = () => {
                        if (timer) return;
                        timer = setInterval(() => {
                            seconds++;
                        }, 1000);
                    }

                    const stopTimer = () => {
                        if (!timer) return;
                        clearInterval(timer);
                        timer = null;
                    }

                    startTimer();
                    const modelKey = modelKeys[model];
                    try {
                        const openAIResponse = await callOpenAi(model, SYSTEM_PROMPT, trimmedPrompt);
                        const payload = await openAIResponse.json().catch(() => null);

                        if (!openAIResponse.ok) {
                            const errorMessage =
                                (payload && typeof payload.error === "string" && payload.error) ||
                                openAIResponse.statusText ||
                                "Failed to fetch recipes.";

                            stopTimer();
                            setState(prev => ({ ...prev, [modelKey]: { ...prev[modelKey], isLoading: false, error: errorMessage, duration: seconds } }))
                            return;
                        }

                        const parsedResults = JSON.parse(payload.result);
                        const result: Result =
                            payload && typeof parsedResults === "object" ? parsedResults : null;

                        stopTimer()
                        setState(prev => ({ ...prev, [modelKey]: { ...prev[modelKey], isLoading: false, response: result, duration: seconds } }))

                    } catch (error: unknown) {

                        const message =
                            error instanceof Error ? error.message : "Unexpected error occurred.";

                        stopTimer();
                        setState(prev => ({ ...prev, [modelKey]: { ...prev[modelKey], isLoading: false, error: message, duration: seconds } }))
                    }
                }),
            );
        })();

    }, [prompt]);

    return state;
}
