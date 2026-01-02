
import Card from "@/components/Cards/Card";
import { FaLaptopCode, FaServer, FaLayerGroup, FaBolt } from "react-icons/fa";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";

export const metadata = {
    title: "Web Development Services | MMH Technologies",
    description:
        "Custom web development services by MMH Technologies. Build responsive, secure, and high-performing websites including frontend, backend, full-stack, and progressive web apps for your business growth.",
    keywords: [
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Progressive Web Apps",
        "Responsive Web Design",
        "Scalable Websites",
        "Secure Websites",
        "MMH Technologies"
    ],
    openGraph: {
        title: "Web Development Services | MMH Technologies",
        description:
            "Custom web development services by MMH Technologies. Build responsive, secure, and high-performing websites including frontend, backend, full-stack, and progressive web apps for your business growth.",
        url: "https://www.mmhtechnologies.com/services/web-development",
        siteName: "MMH Technologies",
        type: "website",
        // images: [
        //     {
        //         url: "/images/og-web-development.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
    },
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


export default function WebDevelopmentPage() {
    const subServices = [
        {
            name: "Frontend Development",
            icon: FaLaptopCode,
            description: "Engaging, responsive, and interactive user interfaces.",
            href: "/services/web-development/frontend-development"
        },
        {
            name: "Backend Development",
            icon: FaServer,
            description: "Robust and secure server-side logic and API integration.",
            href: "/services/web-development/backend-development"
        },
        {
            name: "Full Stack Development",
            icon: FaLayerGroup,
            description: "End-to-end web solutions handling both client and server sides.",
            href: "/services/web-development/full-stack-development"
        },
        {
            name: "Progressive Web Apps",
            icon: FaBolt,
            description: "Web apps with native mobile-like capabilities.",
            href: "/services/web-development/progressive-web-apps"
        }
    ];

    return (
        <main className="flex flex-col gap-6">
            <PageHero
                heading="Web Development Services"
                subHeading="Your Digital Presence, Perfected"
                description="Custom web solutions that drive growth, engagement, and operational efficiency."
            />

            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Building Websites That Engage, Perform, and Scale"
                    subHeading="From interactive UIs to secure backend systems, our solutions provide seamless digital experiences that grow with your business."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subServices.map(service => (
                        <Card key={service.name} {...service} heading={service.name} />
                    ))}
                </div>
            </div>
            
        </main>
    );
}
