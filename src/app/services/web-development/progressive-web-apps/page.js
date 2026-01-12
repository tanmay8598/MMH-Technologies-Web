import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaMobile, FaRocket, FaShieldAlt, FaUsers, FaSyncAlt, FaCloud, FaBolt, FaCode, FaLayerGroup, FaPalette, FaCheckCircle } from "react-icons/fa";

export const metadata = {
    title: "PWA Development Services in Qatar | MMH Technologies",
    description:
        "Build fast, reliable, and engaging Progressive Web Apps (PWAs) with MMH Technologies for Qatar and global clients. Native-like experiences, offline functionality, push notifications, and cross-platform compatibility for maximum user engagement.",
    keywords: [
        "Progressive Web App",
        "PWA Development",
        "Offline Web Apps",
        "Push Notifications",
        "Cross-Platform Web Apps",
        "Service Workers",
        "Web Performance",
        "Mobile Web Apps",
        "MMH Technologies",
        "Qatar",
    ],
    openGraph: {
        title: "PWA Development Services in Qatar | MMH Technologies",
        description:
            "Build fast, reliable, and engaging Progressive Web Apps (PWAs) with MMH Technologies for Qatar and global clients. Native-like experiences, offline functionality, push notifications, and cross-platform compatibility for maximum user engagement.",
        url: "https://www.mmhtechnologies.com/services/web-development/progressive-web-apps",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-pwa-development.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "PWA Development Services | MMH Technologies",
    //     description:
    //         "Build fast, reliable, and engaging Progressive Web Apps (PWAs) with MMH Technologies. Native-like experiences, offline functionality, push notifications, and cross-platform compatibility for maximum user engagement.",
    //     images: ["/images/og-pwa-development.webp"],
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


export default function PwaDevelopmentPage() {
    const technologies = [
        {
            icon: FaMobile,
            name: "Service Workers",
            description: "Enable offline capabilities, background sync, and push notifications to make your app resilient and engaging.",
        },
        {
            icon: FaSyncAlt,
            name: "Caching Strategies",
            description: "Optimize loading times and reduce network requests using smart caching with workbox or custom strategies.",
        },
        {
            icon: FaCloud,
            name: "Cloud Integration",
            description: "Seamless integration with cloud services and APIs to deliver real-time data and offline-first experiences.",
        },
        {
            icon: FaBolt,
            name: "Fast Performance",
            description: "Accelerated app load times and smooth interactions with optimized assets and lazy loading techniques.",
        },
    ];

    const features = [
        {
            icon: FaRocket,
            title: "App-Like Experience",
            description: "PWAs feel and behave like native apps with home screen installation, splash screens, and full-screen mode."
        },
        {
            icon: FaPalette,
            title: "Modern UI/UX",
            description: "Intuitive, responsive interfaces that adapt seamlessly across devices and screen sizes."
        },
        {
            icon: FaCode,
            title: "Reliable & Maintainable Code",
            description: "Structured, reusable, and maintainable codebase using modern frontend frameworks and best practices."
        },
        {
            icon: FaLayerGroup,
            title: "Component-Based Architecture",
            description: "Modular components ensure consistent UI and faster development cycles across your PWA."
        },
        {
            icon: FaShieldAlt,
            title: "Security First",
            description: "HTTPS, service workers, and secure caching mechanisms keep your app and users safe."
        },
        {
            icon: FaUsers,
            title: "Accessibility & Inclusivity",
            description: "WCAG compliant apps ensuring accessibility for all users."
        }
    ];

    const benefits = [
        "Offline Functionality",
        "Increased User Engagement",
        "Push Notifications",
        "No App Store Required",
        "Faster Load Times",
        "Cross-Platform Compatibility",
        "Lower Development & Maintenance Costs",
        "Future-Proof Technology"
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Progressive Web App (PWA) Development"
                subHeading="Native Experience. Web Flexibility."
                description="Building modern, fast, and reliable web apps that behave like native apps on any device."
            />

            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Why Progressive Web Apps Matter"
                    subHeading="PWAs combine the best of web and mobile apps to provide seamless experiences for users, boosting engagement, retention, and conversions."
                />

                {/* Technologies Section */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => (
                            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-(--color-white)">
                <div className="container-custom pb-20">
                    <SectionHeading
                        heading="Our PWA Features"
                        subHeading="Delivering app-like experiences directly through the web with cutting-edge technologies"
                    />

                    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                icon={feature.icon}
                                heading={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container-custom w-full pb-20">

                <SectionHeading
                    heading="Benefits of Progressive Web Apps"
                    subHeading="PWAs offer a future-ready approach to engaging users and delivering seamless experiences across all platforms."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} text={benefit} />
                    ))}
                </div>

            </div>
        </div>
    );
}
