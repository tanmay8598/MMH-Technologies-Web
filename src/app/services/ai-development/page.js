

import Card from "@/components/Cards/Card";
import { FaBrain, FaRobot, FaChartLine, FaMobile } from "react-icons/fa";
import SectionHeading from "@/components/UI/SectionHeading";
import PageHero from "@/components/UI/PageHero";

export const metadata = {
    title: "AI Development Services in Qatar | AI-Powered Apps & ML Solutions – MMH Technologies",
    description:
        "Harness the power of Artificial Intelligence with MMH Technologies for Qatar and global clients. We deliver AI-powered mobile apps, machine learning solutions, chatbots, and predictive analytics to drive smarter business decisions and automation.",
    keywords: [
        "AI Development",
        "Artificial Intelligence",
        "Machine Learning",
        "AI Mobile Apps",
        "Chatbots",
        "Virtual Assistants",
        "Predictive Analytics",
        "Intelligent Automation",
        "MMH Technologies",
        "Qatar",
    ],
    openGraph: {
        title: "AI Development Services in Qatar | AI-Powered Apps & ML Solutions – MMH Technologies",
        description:
            "Harness the power of Artificial Intelligence with MMH Technologies for Qatar and global clients. We deliver AI-powered mobile apps, machine learning solutions, chatbots, and predictive analytics to drive smarter business decisions and automation.",
        url: "https://www.mmhtechnologies.com/services/ai-development",
        siteName: "MMH Technologies",
        type: "website",
        // images: [
        //   {
        //     url: "/images/og-ai-development.webp",
        //     width: 1200,
        //     height: 630,
        //   },
        // ],
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "AI Development Services | MMH Technologies",
    //     description:
    //         "Harness the power of Artificial Intelligence with MMH Technologies. We deliver AI-powered mobile apps, machine learning solutions, chatbots, and predictive analytics to drive smarter business decisions and automation.",
    //     images: ["/images/og-ai-development.webp"],
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


export default function AIDevelopmentPage() {
    const subServices = [
        {
            name: "AI-Powered Mobile Apps",
            icon: FaMobile,
            description: "Smart mobile applications integrated with AI capabilities.",
            href: "/services/ai-development/ai-powered-mobile-apps"
        },
        {
            name: "Machine Learning Solutions",
            icon: FaBrain,
            description: "Custom ML models to automate complex processes.",
            href: "/services/ai-development/machine-learning-solutions"
        },
        {
            name: "Chatbots & Virtual Assistants",
            icon: FaRobot,
            description: "Intelligent conversational agents for customer support.",
            href: "/services/ai-development/chatbots-virtual-assistants"
        },
        {
            name: "Data Analytics & Predictive Models",
            icon: FaChartLine,
            description: "Turn data into actionable insights with predictive analytics.",
            href: "/services/ai-development/data-analytics-predictive-models"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="AI Development Services"
                subHeading="Intelligence at Scale"
                description="Harness the power of Artificial Intelligence to innovate and automate your business."
            />
            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Building Intelligent AI Solutions That Scale"
                    subHeading="From machine learning models to intelligent automation and predictive analytics, our AI solutions are designed to deliver real insights, efficiency, and business impact."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subServices.map(service => (
                        <Card key={service.name} {...service} heading={service.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
