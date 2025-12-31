
import DetailPage from "@/components/UI/DetailsPage";
import Card from "@/components/Cards/Card";
import { FaMobileAlt, FaLaptopCode, FaBrain, FaLock } from "react-icons/fa";

export default function BlogPage() {
    const categories = [
        {
            name: "Mobile App Development",
            icon: FaMobileAlt,
            description: "Insights and trends in the mobile world.",
            href: "/blog/mobile-app-development"
        },
        {
            name: "Web Development",
            icon: FaLaptopCode,
            description: "Latest in frontend and backend tech.",
            href: "/blog/web-development"
        },
        {
            name: "AI Technology",
            icon: FaBrain,
            description: "Exploring the future of artificial intelligence.",
            href: "/blog/ai-technology"
        },
        {
            name: "Data Security",
            icon: FaLock,
            description: "Keep your data safe in a digital age.",
            href: "/blog/data-security"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <DetailPage
                title="Blog"
                subtitle="Insights & News"
                description="Stay updated with the latest trends, tips, and news from MMH Technologies."
            />
            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map(cat => (
                        <Card key={cat.name} {...cat} heading={cat.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
