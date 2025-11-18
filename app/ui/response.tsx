import { Card, CardContent } from "@mui/material";

export default function Response({ children }: { children: React.ReactNode }) {
    return (
        <Card className="col-span-2 border-2 border-purple-accent shadow-sm w-full h-[342px]" sx={{ borderRadius: '12px' }}>
            <CardContent className="flex h-full w-full flex-col p-4 overflow-y-auto">
                {children}
            </CardContent>
        </Card>
    )
}
