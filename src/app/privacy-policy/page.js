
import DetailPage from "@/components/UI/DetailsPage";
import Card from "@/components/Cards/Card";
import { FaFileContract, FaCookieBite } from "react-icons/fa";

export default function PrivacyPolicyPage() {
    const policies = [
        {
            name: "Terms & Conditions",
            icon: FaFileContract,
            description: "Rules for using our services.",
            href: "/privacy-policy/terms-conditions"
        },
        {
            name: "Cookie Policy",
            icon: FaCookieBite,
            description: "How we use cookies to improve your experience.",
            href: "/privacy-policy/cookie-policy"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <DetailPage
                title="Privacy Policy"
                subtitle="Transparency First"
                description="We are committed to protecting your privacy and being transparent about our practices."
            />
            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {policies.map(policy => (
                        <Card key={policy.name} {...policy} heading={policy.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
