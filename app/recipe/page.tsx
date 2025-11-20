"use client"

import { useState } from "react";
import OverallLayout from "../ui/overallLayout";
import Input from "../ui/input";
import Response from "../ui/response";
import RecipeList from "./recipeList";
import useGetRecipes from "./useGetRecipes";


export default function Recipe() {
    const [prompt, setPrompt] = useState<string | null>(null);

    const { nano, mini, gpt5 } = useGetRecipes(prompt);

    const isLoading = nano.isLoading && mini.isLoading && gpt5.isLoading;

    const modelsResponse = [
        { modelName: "GPT-5-nano", data: nano },
        { modelName: "GPT-5-mini", data: mini },
        { modelName: "GPT-5", data: gpt5 },
    ]
    return (

        <OverallLayout pageTitle="Recipe suggestions">
            <Input
                instructions='Tell me what ingredients you want to cook or have at home. I&apos;ll give you some suggestions.'
                placeholder='What type of meat, starch, veggies do you have?'
                buttonLabel='What can I cook?'
                setPrompt={setPrompt}
                isLoading={isLoading} />
            <div className="flex gap-4 mt-2">
                {
                    modelsResponse.map(model => {
                        const { duration, isLoading, response, error } = model.data;

                        return <Response AImodel={model.modelName} duration={duration} key={model.modelName}>
                            <RecipeList isLoading={isLoading} response={response} error={error} ingredientPrompt={prompt} />
                        </Response>
                    })
                }
            </div>
        </OverallLayout >

    );
}
