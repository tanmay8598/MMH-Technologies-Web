
import DetailPage from "@/components/UI/DetailsPage";
import Card from "@/components/Cards/Card";
import { FaShieldAlt, FaFileContract, FaLock } from "react-icons/fa";

export default function SecurityPage() {
    const subServices = [
        {
            name: "Data Security Standards",
            icon: FaShieldAlt,
            description: "Adhering to global data protection standards.",
            href: "/security/data-security-standards"
        },
        {
            name: "Compliance (GDPR, ISO)",
            icon: FaFileContract,
            description: "Ensuring legal and regulatory compliance.",
            href: "/security/compliance-gdpr-iso"
        },
        {
            name: "Secure App Development",
            icon: FaLock,
            description: "Building security into every line of code.",
            href: "/security/secure-app-development"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <DetailPage
                title="Security"
                subtitle="Protecting What Matters"
                description="We prioritize security at every stage of the development lifecycle."
            />
            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subServices.map(service => (
                        <Card key={service.name} {...service} heading={service.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
