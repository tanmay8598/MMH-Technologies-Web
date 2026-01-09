import Image from "next/image";

export default function PageHero({
    heading,
    subHeading,
    description,
    src="/images/about-bg-img.webp",
    alt="Hero Background image"
}) {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] px-10 overflow-hidden">
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
            <div className="relative text-center z-10 flex flex-col gap-3 lg:gap-6 items-center justify-center h-full text-(--color-white)">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                    {heading}
                </h1>
                <p className="max-w-xl mx-auto text-center text-base md:text-xl font-bold">{subHeading}</p>
                <p className="max-w-xl mx-auto text-center text-sm md:text-md font-semibold">{description}</p>
            </div>
        </div>
    )
}