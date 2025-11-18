import { Button, FormControl, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface Props {
    instructions: string,
    placeholder: string,
    buttonLabel: string,
    isLoading: boolean,
    setPrompt: (prompt: string) => void
}

export default function Input({ instructions, placeholder, buttonLabel, isLoading, setPrompt }: Props) {
    const [message, setMessage] = useState<string>("");
    const [wordCount, setWordCount] = useState<number>(0);
    const textRef = useRef<HTMLTextAreaElement | null>(null);

    const wordLimit = 50;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        setMessage(text);
        const trimmedText = text.trim();
        const wordsOnly = trimmedText.split(/\s+/).filter(Boolean);
        setWordCount(trimmedText.length === 0 ? 0 : wordsOnly.length);
    }

    const handleClick = () => {
        const trimmedMessage = message.trim();
        if (!trimmedMessage) {
            return;
        }

        setPrompt(trimmedMessage);
        setMessage("");
        setWordCount(0);
        if (textRef.current) {
            textRef.current.value = "";
        }
    }

    useEffect(() => {
        if (!textRef.current) return;

        if (isLoading) {
            textRef.current.value = "You can't ask me again while I'm thinking.";
            return;
        }

        textRef.current.value = message;
    }, [isLoading, message]);

    return (

        <div className="w-full col-span-1">
            <p className="text-purple-primary mb-6 leading-relaxed">{instructions}</p>
            <FormControl className="flex gap-4 w-full">
                <div>
                    <TextField
                        inputRef={textRef}
                        multiline
                        rows={4}
                        fullWidth placeholder={placeholder}
                        onChange={handleChange}
                        disabled={isLoading}
                        slotProps={{
                            root: {
                                sx: {
                                    backgroundColor: "var(--color-white)",
                                    borderRadius: '12px',
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "2px solid var(--color-purple-accent)"
                                    },
                                },
                            },
                        }}
                    />
                    <div className="flex justify-end " >
                        <p className="text-xs text-purple-primary-light">{`${wordCount} / ${wordLimit}`}</p>
                    </div>
                </div>
                <Button
                    variant="outlined"
                    onClick={handleClick}
                    disabled={wordCount === 0 || wordCount > wordLimit}
                    loading={isLoading}
                    sx={{
                        backgroundColor: "var(--color-white)",
                        borderColor: "var(--color-purple-accent)",
                        borderWidth: '2px',
                        color: "var(--color-purple-text)",
                        height: '48px',
                        marginBottom: '24px',
                        borderRadius: '12px',
                        "&:hover": {
                            backgroundColor: "var(--color-purple-primary)",
                            color: "var(--color-white-background)",
                            opacity: 0.6,
                        },
                    }}
                >{buttonLabel}</Button>
            </FormControl>
        </div>
    )
}
