"use client"

import { useState } from "react";
import OverallLayout from "../ui/overallLayout";
import Input from "../ui/input";
import Response from "../ui/response";
import useGetRecipes from "./useGetRecipes";
import RecipeList from "./recipeList";


export default function Recipe() {
    const [prompt, setPrompt] = useState<string | null>(null);

    const { isLoading, response, error } = useGetRecipes(prompt);

    return (

        <OverallLayout pageTitle="Recipe suggestions">
            <Input
                instructions='Tell me what ingredients you want to cook or have at home. I&apos;ll give you some suggestions.'
                placeholder='What type of meat, starch, veggies do you have?'
                buttonLabel='What can I cook?'
                setPrompt={setPrompt}
                isLoading={isLoading} />
            <Response>
                <RecipeList isLoading={isLoading} response={response} error={error} ingredientPrompt={prompt} />
            </Response>
        </OverallLayout >

    );
}
