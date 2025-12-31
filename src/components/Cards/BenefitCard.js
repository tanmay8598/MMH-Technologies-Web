import { FaCheckCircle } from "react-icons/fa";

export default function BenefitCard({ text }) {
    return (
        <div className="flex items-center p-6 rounded-xl bg-(--color-white) border border-(--color-gray) shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <FaCheckCircle className="text-2xl text-(--success) mr-4 flex-shrink-0" />
            <span className="text-lg font-medium text-(--color-quaternary)">
                {text}
            </span>
        </div>
    );
}
