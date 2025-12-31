export default function SectionHeading ({ heading, subHeading }) {
    return (
        <div className="flex flex-col gap-4 py-10">
            <h2 className="max-w-lg mx-auto text-2xl md:text-4xl text-center font-bold text-(--color-primary)">{heading}</h2>
            {subHeading && <p className="max-w-lg text-center mx-auto text-sm md:text-md text-(--color-quaternary)">{subHeading}</p>}
        </div>
    )
}