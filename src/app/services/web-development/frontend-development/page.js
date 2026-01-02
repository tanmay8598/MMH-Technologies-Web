
import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaReact, FaVuejs, FaAngular, FaMobile, FaRocket, FaPalette, FaCode, FaLayerGroup, FaCheckCircle, FaClock, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { SiNextdotjs } from "react-icons/si";

export const metadata = {
    title: "Frontend Development Services | MMH Technologies",
    description:
        "Deliver dynamic, scalable, and visually stunning frontend applications with MMH Technologies. Expertise in React.js, Next.js, Vue.js, Angular, UI/UX, performance optimization, and accessibility.",
    keywords: [
        "Frontend Development",
        "React.js Development",
        "React native Development",
        "Next.js Development",
        "Vue.js Development",
        "Angular Development",
        "UI/UX Design",
        "Performance Optimization",
        "Accessible Frontend",
        "MMH Technologies",
        "Modern Web Applications",
        "Responsive Design",
        "Web Development Services"
    ],
    openGraph: {
        title: "Frontend Development Services | MMH Technologies",
        description:
            "Deliver dynamic, scalable, and visually stunning frontend applications with MMH Technologies. Expertise in React.js, Next.js, Vue.js, Angular, UI/UX, performance optimization, and accessibility.",
        url: "https://www.mmhtechnologies.com/frontend-development",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-frontend.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Frontend Development Services | MMH Technologies",
    //     description:
    //         "Deliver dynamic, scalable, and visually stunning frontend applications with MMH Technologies. Expertise in React.js, Next.js, Vue.js, Angular, UI/UX, performance optimization, and accessibility.",
    //     images: ["/images/og-frontend.webp"],
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


export default function FrontendDevelopmentPage() {
    const technologies = [
        {
            icon: FaReact,
            name: "React.js",
            description: "Build dynamic and scalable user interfaces with reusable components and modern React patterns.",
        },
        {
            icon: SiNextdotjs,
            name: "Next.js",
            description: "Create high-performance, SEO-optimized applications with server-side rendering and static generation.",
        },
        {
            icon: FaVuejs,
            name: "Vue.js",
            description: "Craft intuitive and progressive interfaces using Vue's elegant ecosystem.",
        },
        {
            icon: FaAngular,
            name: "Angular",
            description: "Develop enterprise-grade applications with Angular's structured and TypeScript-driven framework.",
        },
    ];


    const features = [
        {
            icon: FaRocket,
            title: "Performance Optimization",
            description: "Blazing-fast load times with code splitting, lazy loading, and advanced caching strategies for superior user experience."
        },
        {
            icon: FaPalette,
            title: "Modern UI/UX",
            description: "Beautiful, intuitive interfaces that delight users and drive engagement with contemporary design patterns."
        },
        {
            icon: FaCode,
            title: "Clean Code",
            description: "Maintainable, scalable code following industry best practices and standards for long-term success."
        },
        {
            icon: FaLayerGroup,
            title: "Component Architecture",
            description: "Reusable component systems that speed up development and ensure consistency across your application."
        },
        {
            icon: FaShieldAlt,
            title: "Security First",
            description: "Built-in security measures to protect your application and user data from modern threats."
        },
        {
            icon: FaUsers,
            title: "Accessibility",
            description: "WCAG compliant applications ensuring everyone can use your product regardless of abilities."
        }
    ];


    const benefits = [
        "Faster Time to Market",
        "Enhanced User Engagement",
        "Improved SEO Rankings",
        "Cross-Browser Compatibility",
        "Scalable Architecture",
        "Reduced Development Costs",
        "Better Conversion Rates",
        "Future-Proof Solutions"
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Frontend Development Services"
                subHeading="Powerful Apps. Seamless Experiences."
                description="Leveraging the latest frontend frameworks and tools to deliver exceptional results"
            />


            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Why Frontend Development Matters"
                    subHeading="Your frontend is the face of your digital presence. It's where first impressions are made and user loyalty is won. Our frontend development services combine aesthetic excellence with technical sophistication to create experiences that users love and businesses rely on."
                />

                {/* Introduction Section */}
                <div className="py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />)}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-(--color-white)">
                <div className="container-custom py-10 pb-20">
                    <SectionHeading
                        heading="What We Deliver"
                        subHeading="Comprehensive frontend solutions built with precision and passion"
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

            <div className="container-custom w-full pb-20">
                {/* Benefits Section */}

                <SectionHeading
                    heading="Benefits of Professional Frontend Development"
                    subHeading="Invest in quality frontend development and watch your business thrive"
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
