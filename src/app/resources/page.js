
import DetailPage from "@/components/UI/DetailsPage";
import Card from "@/components/Cards/Card";
import { FaBook, FaFileAlt, FaQuestionCircle } from "react-icons/fa";

export default function ResourcesPage() {
    const categories = [
        {
            name: "Whitepapers",
            icon: FaFileAlt,
            description: "In-depth industry reports and research.",
            href: "/resources/whitepapers"
        },
        {
            name: "Guides",
            icon: FaBook,
            description: "Step-by-step tutorials and best practices.",
            href: "/resources/guides"
        },
        {
            name: "FAQs",
            icon: FaQuestionCircle,
            description: "Answers to common questions.",
            href: "/resources/faqs"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <DetailPage
                title="Resources"
                subtitle="Knowledge Base"
                description="Everything you need to know to succeed in the digital landscape."
            />
            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(cat => (
                        <Card key={cat.name} {...cat} heading={cat.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
