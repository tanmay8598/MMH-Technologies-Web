import Link from "next/link";

export default function Button({ label, href, onClick, isDefault = true, className }) {
    return (
        href ? (
            <Link
                href={href}
                className={`hover:cursor-pointer text-center ${isDefault ? "bg-(--color-primary) text-(--color-white) hover:bg-(--color-white) hover:text-(--color-primary) py-2.5 px-7 rounded-md transition ease-in-out duration-300" : className}`}
            >
                {label}
            </Link>
        ) :
            <button
                onClick={onClick}
                className={`hover:cursor-pointer text-center ${isDefault ? "bg-(--color-primary) text-(--color-white) hover:bg-(--color-white) hover:text-(--color-primary) py-2.5 px-7 rounded-md transition ease-in-out duration-300" : className}`}
            >
                {label}
            </button>
    )
}