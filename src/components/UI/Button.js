export default function Button ({ label, onClick, isDefault=true, className}) {
    return (
        <button
            onClick={onClick}
            className={`hover:cursor-pointer ${isDefault ? "bg-(--color-primary) text-(--color-white) hover:bg-(--color-white) hover:text-(--color-primary) py-2.5 px-7 rounded-md transition ease-in-out duration-300" : className}`}
        >
            { label}
        </button>
    )
}