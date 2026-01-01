export default function SectionHeading ({ heading, subHeading, isLine=false }) {
    return (
        <div className="flex flex-col text-center gap-4 py-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[var(--color-primary)]">{heading}</h2>
            {subHeading && <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">{subHeading}</p>}
            {isLine && <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>}
        </div>
    )
}