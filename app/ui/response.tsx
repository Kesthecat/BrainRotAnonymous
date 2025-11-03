export default function Response({ response }: { response: any }) {
    return (
        <div className="w-full min-h-[350px] border-2 rounded-sm border-indigo-200 p-2">{response}</div>
    )
}