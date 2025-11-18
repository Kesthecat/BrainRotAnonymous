
export default function OverallLayout({ pageTitle, children }: {
    pageTitle: string,
    children: React.ReactNode
}) {

    return (
        <div className=" flex w-full items-center not-only:justify-center font-sans py-10 px-30 mt-1 min-h-[calc(100vh-4rem)] bg-white-background text-purple-heading">
            <div className="flex flex-col">
                <h1 className="text-4xl font-semibold mb-4 text-purple-heading">{pageTitle}</h1>
                <main className="columns-3xs sm:items-start gap-14 w-full max-w-[1920px]">
                    {children}
                </main>
            </div>
        </div>
    )
}