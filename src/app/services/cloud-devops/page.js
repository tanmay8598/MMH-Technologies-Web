import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import {
    FaCloud,
    FaAws,
    FaServer,
    FaRocket,
    FaCogs,
    FaShieldAlt,
    FaSyncAlt,
    FaMicrosoft
} from "react-icons/fa";
import { SiGooglecloud, SiKubernetes } from "react-icons/si";

export const metadata = {
    title: "Cloud & DevOps Services | MMH Technologies",
    description:
        "Build scalable, reliable, and secure digital products with modern cloud infrastructure and DevOps practices. Leverage AWS, Azure, Google Cloud, and Kubernetes for faster deployments and optimized operations.",
    keywords: [
        "Cloud Services",
        "DevOps",
        "AWS",
        "Azure",
        "Google Cloud",
        "Kubernetes",
        "CI/CD",
        "Infrastructure as Code",
        "Cloud Automation",
        "Scalable Infrastructure",
        "Qatar",
    ],
    openGraph: {
        title: "Cloud & DevOps Services | MMH Technologies",
        description:
            "Build scalable, reliable, and secure digital products with modern cloud infrastructure and DevOps practices. Leverage AWS, Azure, Google Cloud, and Kubernetes for faster deployments and optimized operations.",
        url: "https://www.mmhtechnologies.com/services/cloud-devops",
        siteName: "MMH Technologies",
        type: "website",
        // images: [
        //   {
        //     url: "/images/og-cloud-devops.webp",
        //     width: 1200,
        //     height: 630,
        //   },
        // ],
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Cloud & DevOps Services | MMH Technologies",
    //     description:
    //         "Build scalable, reliable, and secure digital products with modern cloud infrastructure and DevOps practices. Leverage AWS, Azure, Google Cloud, and Kubernetes for faster deployments and optimized operations.",
    //     images: ["/images/og-cloud-devops.webp"],
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


export default function CloudDevOpsPage() {

    const technologies = [
        {
            icon: FaAws,
            name: "AWS",
            description: "Scalable and secure cloud infrastructure using industry-leading AWS services.",
        },
        {
            icon: SiGooglecloud,
            name: "Google Cloud",
            description: "High-performance cloud solutions with advanced analytics and AI-ready services.",
        },
        {
            icon: FaMicrosoft,
            name: "Microsoft Azure",
            description: "Enterprise-grade cloud platforms seamlessly integrated with Microsoft ecosystems.",
        },
        {
            icon: SiKubernetes,
            name: "Kubernetes & Containers",
            description: "Containerized deployments with Kubernetes for resilient and portable applications.",
        },
    ];

    const features = [
        {
            icon: FaRocket,
            title: "CI/CD Automation",
            description: "Automated pipelines for faster, safer, and more reliable application deployments."
        },
        {
            icon: FaCloud,
            title: "Cloud Architecture",
            description: "Highly available, fault-tolerant cloud architectures designed for scale."
        },
        {
            icon: FaCogs,
            title: "Infrastructure as Code",
            description: "Provision and manage infrastructure using Terraform, CloudFormation, and best practices."
        },
        {
            icon: FaSyncAlt,
            title: "Monitoring & Observability",
            description: "Real-time monitoring, logging, and alerts to ensure system health and uptime."
        },
        {
            icon: FaShieldAlt,
            title: "Security & Compliance",
            description: "Robust security strategies with IAM, encryption, and compliance-driven configurations."
        },
        {
            icon: FaServer,
            title: "High Availability",
            description: "Systems engineered for minimal downtime and maximum resilience."
        }
    ];

    const benefits = [
        "Faster Deployment Cycles",
        "Improved System Reliability",
        "Reduced Operational Costs",
        "Scalable Infrastructure",
        "Enhanced Security",
        "Better Resource Utilization",
        "Continuous Delivery",
        "Future-Ready Cloud Solutions"
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Cloud & DevOps Services"
                subHeading="Build Fast. Scale Smarter."
                description="Modern cloud infrastructure and DevOps practices that power reliable, scalable digital products"
            />

            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Why Cloud & DevOps Matter"
                    subHeading="Cloud and DevOps are the backbone of modern digital systems. They enable faster innovation, greater scalability, and rock-solid reliability while reducing operational complexity."
                />

                {/* Technologies Section */}
                <div className="py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {technologies.map((tech, index) => (<Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-(--color-white)">
                <div className="container-custom py-10 pb-20">
                    <SectionHeading
                        heading="What We Deliver"
                        subHeading="End-to-end cloud and DevOps solutions engineered for performance and stability"
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
                    heading="Benefits of Cloud & DevOps Services"
                    subHeading="Empower your business with speed, security, and scalability"
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
