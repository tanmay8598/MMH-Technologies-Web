export default function AboutCard ({ heading, children}) {
    return (
        <div className="rounded-md shadow-md bg-(--color-white) px-8 pt-8 pb-24 flex flex-col gap-4">
            <div className="w-[50px] h-[6px] bg-(--color-primary)"></div>
            <h3 className="text-2xl lg:text-3xl font-bold text-(--color-primary) opacity-80">{heading}</h3>
            {children}
        </div>
    )
}