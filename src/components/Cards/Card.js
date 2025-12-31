import Link from "next/link";

export default function Card({ icon: Icon, heading, description, href }) {
    return (
        <div className="bg-(--color-white) relative shadow-md px-14 pt-8 pb-20 rounded-xl flex items-center justify-start flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {Icon && (
                <div className="rounded-full bg-(--color-primary) p-6">
                    <Icon className="text-(--color-white) text-4xl" />
                </div>
            )}
            <h3 className="text-2xl md:text-3xl font-bold text-center text-(--color-primary)">
                {heading}
            </h3>
            <p className="text-sm md:text-base text-center">{description}</p>

            {/* CTA Button */}
            {href && (
                <Link
                    href={href}
                    className="mt-3 inline-block absolute bottom-6 px-6 py-2 rounded-md transition
                        bg-[var(--color-primary)] text-[var(--color-white)]
                        hover:bg-[var(--color-primary-dark)]"
                >
                    Learn More
                </Link>

            )}
        </div>
    );
}
