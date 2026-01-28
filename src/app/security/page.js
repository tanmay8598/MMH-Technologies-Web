

import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import { FaShieldAlt, FaFileContract, FaLock } from "react-icons/fa";

export const metadata = {
    title: "Security Services in Qatar | MMH Technologies",
    description:
        "MMH Technologies provides robust security services for Qatar and global clients, including data security standards, compliance (GDPR, ISO), and secure mobile and web application development.",
    keywords: [
        "MMH Technologies Security",
        "Data Security Standards",
        "GDPR Compliance",
        "ISO Compliance",
        "Secure App Development",
        "Cybersecurity Solutions",
        "Digital Security",
        "Qatar",
    ],
    openGraph: {
        title: "Security Services in Qatar | MMH Technologies",
        description:
            "MMH Technologies provides robust security services for Qatar and global clients, including data security standards, compliance (GDPR, ISO), and secure mobile and web application development.",
        url: "https://www.mmhtechnologies.qa/security",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-security.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Security Services | MMH Technologies",
    //     description:
    //         "MMH Technologies ensures robust security across your digital platforms, offering Data Security Standards, Compliance (GDPR, ISO), and Secure App Development.",
    //     images: ["/images/og-security.webp"],
    //     creator: "@MMHTech",
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
            <PageHero
                heading="Security"
                subHeading="Protecting What Matters"
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
