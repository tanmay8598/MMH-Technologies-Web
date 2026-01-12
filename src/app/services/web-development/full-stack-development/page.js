import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaServer, FaRocket, FaPalette, FaCode, FaLayerGroup, FaShieldAlt, FaUsers, FaCheckCircle } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiSpring, SiVueDotJs } from "react-icons/si";


export const metadata = {
    title: "Full Stack Development Services in Qatar | MMH Technologies",
    description:
        "Deliver modern, scalable, and secure full-stack applications with MMH Technologies for Qatar and global clients. Expertise in React.js, Next.js, Node.js, Django, databases, server/cloud management, UI/UX, and optimized full-stack solutions.",
    keywords: [
        "Full Stack Development",
        "React.js Development",
        "Next.js Development",
        "Node.js Development",
        "Django Development",
        "Frontend and Backend",
        "UI/UX Design",
        "Performance Optimization",
        "Scalable Applications",
        "Secure Web Apps",
        "MMH Technologies",
        "Web Development Services",
        "Qatar",
    ],
    openGraph: {
        title: "Full Stack Development Services in Qatar | MMH Technologies",
        description:
            "Deliver modern, scalable, and secure full-stack applications with MMH Technologies for Qatar and global clients. Expertise in React.js, Next.js, Node.js, Django, databases, server/cloud management, UI/UX, and optimized full-stack solutions.",
        url: "https://www.mmhtechnologies.com/full-stack-development",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-fullstack.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Full Stack Development Services | MMH Technologies",
    //     description:
    //         "Deliver modern, scalable, and secure full-stack applications with MMH Technologies. Expertise in React.js, Next.js, Node.js, Django, databases, server/cloud management, UI/UX, and optimized full-stack solutions.",
    //     images: ["/images/og-fullstack.webp"],
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


export default function FullStackDevelopmentPage() {
    const technologies = [
        {
            icon: FaReact,
            name: "React.js",
            description: "Build dynamic, interactive frontend interfaces using React components and modern patterns.",
        },
        {
            icon: SiNextdotjs,
            name: "Next.js",
            description: "Server-side rendering and static generation for full-stack applications with React.",
        },
        {
            icon: FaNodeJs,
            name: "Node.js",
            description: "High-performance server-side applications with scalable and event-driven architecture.",
        },
        {
            icon: SiDjango,
            name: "Django",
            description: "Secure and rapid backend development with Python's Django framework.",
        },
        {
            icon: FaDatabase,
            name: "Databases",
            description: "Design and manage relational & NoSQL databases for full-stack applications.",
        },
        {
            icon: FaServer,
            name: "Server & Cloud",
            description: "Deploy, monitor, and maintain reliable backend servers and cloud infrastructure.",
        },
    ];

    const features = [
        {
            icon: FaRocket,
            title: "Performance Optimization",
            description: "Fast, efficient applications with optimized code and architecture for frontend and backend.",
        },
        {
            icon: FaPalette,
            title: "Modern UI/UX",
            description: "Beautiful and intuitive interfaces integrated seamlessly with backend services.",
        },
        {
            icon: FaCode,
            title: "Clean Code & Architecture",
            description: "Maintainable, scalable full-stack code following best practices and design patterns.",
        },
        {
            icon: FaLayerGroup,
            title: "Component & Module System",
            description: "Reusable frontend components and backend modules to accelerate development and ensure consistency.",
        },
        {
            icon: FaShieldAlt,
            title: "Security First",
            description: "Authentication, authorization, and encryption across frontend and backend for secure apps.",
        },
        {
            icon: FaUsers,
            title: "User & Data Management",
            description: "Comprehensive handling of users, roles, and data ensuring seamless full-stack integration.",
        },
    ];

    const benefits = [
        "End-to-End Development",
        "Faster Delivery & Deployment",
        "Seamless Full-Stack Integration",
        "Optimized Performance",
        "Scalable & Maintainable Architecture",
        "Secure & Reliable Systems",
        "Reduced Development Costs",
        "Future-Proof Applications",
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Full Stack Development Services"
                subHeading="Complete Solutions from Frontend to Backend"
                description="We deliver modern, high-performance full-stack applications using the latest technologies and best practices."
            />

            {/* Technologies Section */}
            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Technologies We Use"
                    subHeading="Robust frontend and backend frameworks that power our full-stack solutions"
                />
                <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-(--color-white)">
                <div className="container-custom py-10 pb-20">
                    <SectionHeading
                        heading="Our Full Stack Solutions"
                        subHeading="Comprehensive full-stack services designed for performance, scalability, and security"
                    />
                    <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="container-custom w-full pb-20">

                <SectionHeading
                    heading="Benefits of Full Stack Development"
                    subHeading="Gain a competitive advantage with complete end-to-end development solutions"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} text={benefit} />
                    ))}

                </div>
            </div>
        </div>
    );
}
