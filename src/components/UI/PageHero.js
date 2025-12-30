import Image from "next/image";

export default function PageHero({
    heading,
    subHeading,
    description,
    src="/images/about-bg-img.webp",
    alt="Hero Background image"
}) {
    return (
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
            <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-(--color-tertiary) opacity-80"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-3 items-center justify-center h-full text-(--color-white)">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {heading}
                </h1>
                <p className="max-w-xl mx-auto text-center text-xl font-bold">{subHeading}</p>
                <p className="max-w-xl mx-auto text-center text-md font-semibold">{description}</p>
            </div>
        </div>
    )
}