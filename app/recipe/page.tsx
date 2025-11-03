"use client"

// import { Button, FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import OverallLayout from "../ui/overallLayout";
import Input from "../ui/input";
import Response from "../ui/response";

export default function Recipe() {
    const [prompt, setPrompt] = useState<string | null>(null);
    const [response, setResponse] = useState<string | null | undefined>(undefined)

    useEffect(() => {
        setResponse(prompt)
    }, [prompt])

    return (

        <OverallLayout pageTitle="Recipe suggestions">
            <Input instructions='Tell me what ingredients you want to cook and what type of cuisine you fancy. I&apos;ll give you some suggestions.' placeholder='What type of meat, starch, veggies do you have?' buttonLabel='What can I cook?' setPrompt={setPrompt} />
            <Response response={response} />
        </OverallLayout>

    );
}