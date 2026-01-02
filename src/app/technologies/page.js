import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import {
    SiNextdotjs,
    SiReact,
    SiNodedotjs,
    SiFlutter,
    SiOpenai
} from "react-icons/si";
import { IoCloudyOutline } from "react-icons/io5";

export const metadata = {
    title: "Technology Stack | MMH Technologies",
    description:
        "Explore the cutting-edge technologies used by MMH Technologies to build fast, secure, and scalable web and mobile applications. From Next.js, React, Node.js, Flutter, cloud platforms, to AI & ML tools, we leverage the best frameworks for optimal performance.",
    keywords: [
        "Next.js",
        "React.js",
        "Node.js",
        "Flutter",
        "Cloud Computing",
        "AWS",
        "Azure",
        "GCP",
        "AI Tools",
        "ML Tools",
        "Technology Stack",
        "MMH Technologies"
    ],
    openGraph: {
        title: "Technology Stack | MMH Technologies",
        description:
            "Explore the cutting-edge technologies used by MMH Technologies to build fast, secure, and scalable web and mobile applications. From Next.js, React, Node.js, Flutter, cloud platforms, to AI & ML tools, we leverage the best frameworks for optimal performance.",
        url: "https://www.mmhtechnologies.com/technologies",
        siteName: "MMH Technologies",
        type: "website",
        // images: [
        //   {
        //     url: "/images/og-technology-stack.webp",
        //     width: 1200,
        //     height: 630,
        //   },
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


export default function TechnologyPage() {

    const technologies = [
        {
            name: "Next.js",
            icon: SiNextdotjs,
            href: "/technologies/nextjs",
            description: "High-performance, SEO-friendly web applications using modern React frameworks."
        },
        {
            name: "React",
            icon: SiReact,
            href: "/technologies/react",
            description: "Interactive and scalable user interfaces built with reusable components."
        },
        {
            name: "Node.js",
            icon: SiNodedotjs,
            href: "/technologies/nodejs",
            description: "Fast, scalable backend APIs and real-time applications."
        },
        {
            name: "Flutter",
            icon: SiFlutter,
            href: "/technologies/flutter",
            description: "Cross-platform mobile apps with native performance."
        },
        {
            name: "React Native",
            icon: SiReact,
            href: "/technologies/react-native",
            description: "Cross-platform mobile apps with native performance using React Native."
        },
        {
            name: "Cloud (AWS, Azure, GCP)",
            icon: IoCloudyOutline,
            href: "/technologies/aws-azure-gcp",
            description: "Secure, scalable, and cost-efficient cloud infrastructure."
        },
        {
            name: "AI & ML Tools",
            icon: SiOpenai,
            href: "/technologies/ai-ml-tools",
            description: "Intelligent automation, predictive analytics, and AI-powered solutions."
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Technologies We Use"
                subHeading="Modern tech. Proven frameworks."
                description="We leverage cutting-edge technologies to build fast, secure, and scalable digital products."
            />
            <section className="container-custom w-full text-center">
                <SectionHeading heading="Our Technology Stack" subHeading="From frontend frameworks to cloud platforms and AI tools, we choose the right technology for performance, scalability, and long-term success." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-15">
                    {technologies.map(tech => <Card key={tech.name} icon={tech.icon} href={tech.href} heading={tech.name} description={tech.description} />)}
                </div>
            </section>
        </div>
    )
}