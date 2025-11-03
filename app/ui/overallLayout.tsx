
export default function OverallLayout({ pageTitle, children }: {
    pageTitle: string,
    children: React.ReactNode
}) {

    return (
        <div className=" flex justify-center font-sans flex-col py-24 px-32">
            <h1 className="text-4xl mb-4">{pageTitle}</h1>
            <main className="flex w-full items-center sm:items-start gap-12">
                {children}
            </main>
        </div>
    )
}