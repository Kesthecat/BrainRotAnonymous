import { Card, CardContent } from "@mui/material";

export default function Response({ AImodel, duration, children }: { AImodel: string, duration: number, children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full mt-4">
            <h2 className="text-2xl font-semibold ml-2 mb-1 text-purple-heading">{AImodel}</h2>
            <h3 className="ml-2 mb-3 text-purple-primary">Processing time:  {duration > 0 ? duration : 0} seconds</h3>
            <Card className="border-2 border-purple-accent shadow-sm w-full h-[342px]" sx={{ borderRadius: '12px' }}>
                <CardContent className="flex h-full w-full flex-col p-4 overflow-y-auto">
                    {children}
                </CardContent>
            </Card >
        </div>
    )
}
