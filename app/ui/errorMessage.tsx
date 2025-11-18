interface ErrorProps {
    errorPrompt: string,
    error: string,
    promptType: string,
    prompt: string | null,
    errorMessage: string
}

export default function ErrorMessage({ errorPrompt, error, promptType, prompt, errorMessage }: ErrorProps) {
    return (
        <div className="p-3 flex flex-col gap-1">
            {
                errorPrompt === error ? (
                    <>
                        <h4 className=" text-purple-text font-semibold">{errorMessage}</h4>
                        {prompt && <p className="font-semibold text-purple-heading"><span>{promptType}</span>{prompt}</p>}
                    </>
                ) : (
                    <h4 className=" text-purple-text font-semibold">Something isn't working, try later.</h4>
                )
            }
        </div>

    )
}