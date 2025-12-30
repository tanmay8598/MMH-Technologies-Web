export default function InputField({
    label,
    type = "text",
    placeholder,
    value,
    name,
    onChange,
    error,
}) {

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm text-(--text-muted)">
                    {label}
                </label>
            )}
            {type === "textarea" ? (
                <textarea
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    rows={4}
                    value={value}
                    onChange={onChange}
                    className={`w-full px-5 py-3 rounded-xl bg-(--bg-input) text-(--text-main) placeholder-(--text-soft) outline-none transition-all duration-200 focus:ring-2 ${error ? "border border-(--danger) focus:border-(--danger) focus:ring-(--danger-soft)" : "hover:border-(--primary) focus:border-(--primary) focus:ring-(--color-primary)/30 "} `}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full px-5 py-3 rounded-xl bg-(--bg-input) text-(--text-main) placeholder-(--text-soft) outline-none transition-all duration-200 focus:ring-2 ${error ? "border border-(--danger) focus:border-(--danger) focus:ring-(--danger-soft)" : "hover:border-(--primary) focus:border-(--primary) focus:ring-(--color-primary)/30 "} `}
                />
            )}

            {error && (<p className="text-xs text-(--danger)"> {error} </p>)}
        </div>
    );
}