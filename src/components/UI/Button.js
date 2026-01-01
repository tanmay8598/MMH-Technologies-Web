export default function Button ({ label, onClick, isPrimary=true}) {
    return (
        <button
            onClick={onClick}
            className={`hover:cursor-pointer ${isPrimary ? "bg-(--color-primary) text-(--color-white) hover:bg-(--color-secondary) hover:text-(--color-white)" : "border-2 border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-white)"} py-4 px-8 rounded-lg transition-all hover:scale-105 ease-in-out duration-300` }
        >
            { label}
        </button>
    )
}