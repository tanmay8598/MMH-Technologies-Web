
import Card from "@/components/Cards/Card";
import { FaFileContract, FaCookieBite } from "react-icons/fa";
import PageHero from "@/components/UI/PageHero";

export const metadata = {
    title: "Privacy Policy | Data Protection & User Privacy – MMH Technologies",
    description:
        "Read our Privacy Policy to understand how MMH Technologies collects, uses, stores, and protects personal data for users in Qatar and globally, ensuring transparency, security, and compliance with data protection laws.",
    keywords: [
        "privacy policy",
        "data protection",
        "user privacy",
        "data security",
        "cookie policy",
        "terms and conditions",
        "GDPR compliance",
        "information security",
        "Qatar",
    ],
    
    openGraph: {
        title: "Privacy Policy | Data Protection & User Privacy – MMH Technologies",
        description:
            "Read our Privacy Policy to understand how MMH Technologies collects, uses, stores, and protects personal data for users in Qatar and globally, ensuring transparency, security, and compliance with data protection laws.",
        type: "website",
    },
    // twitter: {
    //     card: "summary",
    //     title: "Privacy Policy | Your Company Name",
    //     description:
    //         "How we protect your data and respect your privacy.",
    // },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};


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
            <PageHero
                heading="Privacy Policy"
                subHeading="Transparency First"
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
