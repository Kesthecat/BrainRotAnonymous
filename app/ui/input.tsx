import { Button, FormControl, TextField } from "@mui/material";
import { useRef, useState } from "react";

interface Props {
    instructions: string,
    placeholder: string,
    buttonLabel: string,
    setPrompt: (prompt: string) => void
}

export default function Input({ instructions, placeholder, buttonLabel, setPrompt }: Props) {
    const [message, setMessage] = useState<string | null>(null);
    const textRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value)
    }

    const handleClick = () => {
        if (message) {
            setPrompt(message)
            setMessage(null);
            if (textRef.current) {
                textRef.current.value = ''
            }
        }
        // else send error message
    }

    return (

        <div>
            <p className="m-1.5">{instructions}</p>
            <FormControl className="flex gap-4 w-full">
                <TextField inputRef={textRef} multiline rows={4} fullWidth placeholder={placeholder} onChange={handleChange} />
                <Button variant="outlined" onClick={handleClick} disabled={message === null}>{buttonLabel}</Button>
            </FormControl>
        </div>
    )
}