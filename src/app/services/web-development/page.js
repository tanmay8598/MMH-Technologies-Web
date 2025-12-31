
import DetailPage from "@/components/UI/DetailsPage";
import Card from "@/components/Cards/Card";
import { FaLaptopCode, FaServer, FaLayerGroup, FaBolt } from "react-icons/fa";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";

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

            <div className="py-6">
                <SectionHeading
                    heading="Building Websites That Engage, Perform, and Scale"
                    subHeading="From interactive UIs to secure backend systems, our solutions provide seamless digital experiences that grow with your business."
                />

            </div>

            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subServices.map(service => (
                        <Card key={service.name} {...service} heading={service.name} />
                    ))}
                </div>
            </div>
            
        </main>
    );
}
