
export default function OverallLayout({ pageTitle, children }: {
    pageTitle: string,
    children: React.ReactNode
}) {

    return (
        <div className=" flex w-full items-center not-only:justify-center font-sans py-10 px-30 mt-1 min-h-[calc(100vh-4rem)] bg-white-background text-purple-heading">
            <div className="flex flex-col w-full">
                <h1 className="text-4xl font-semibold mb-4 text-purple-heading">{pageTitle}</h1>
                <main className="flex-col w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}