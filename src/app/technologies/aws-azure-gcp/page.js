import {
    FaAws,
    FaMicrosoft,
    FaGoogle,
    FaCloud,
    FaLock,
    FaRocket,
    FaDollarSign,
    FaServer,
    FaGlobe,
    FaTools,
    FaChartLine
} from "react-icons/fa";
// import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud } from "react-icons/si";
import Card from "@/components/Cards/Card";
import SectionHeading from "@/components/Blog/SectionHeading";
import Button from "@/components/UI/Button";

export const metadata = {
  alternates: { canonical: "/technologies/aws-azure-gcp" },
    title: "Cloud Platforms: AWS, Azure, GCP in Qatar | MMH Technologies",
    description:
        "Leverage the power of cloud computing with AWS, Azure, and Google Cloud through MMH Technologies for Qatar and global clients. We provide scalable, secure, and cost-efficient cloud solutions for modern businesses.",
    keywords: [
        "Cloud Platforms",
        "AWS",
        "Amazon Web Services",
        "Microsoft Azure",
        "Google Cloud Platform",
        "Cloud Migration",
        "Cloud Solutions",
        "Cloud Security",
        "Scalable Infrastructure",
        "MMH Technologies",
        "Qatar",
    ],
    openGraph: {
        title: "Cloud Platforms: AWS, Azure, GCP in Qatar | MMH Technologies",
        description:
            "Leverage the power of cloud computing with AWS, Azure, and Google Cloud through MMH Technologies for Qatar and global clients. We provide scalable, secure, and cost-efficient cloud solutions for modern businesses.",
        url: "https://www.mmhtechnologies.qa/technologies/aws-azure-gcp",
        siteName: "MMH Technologies",
        type: "website",
        // images: [
        //   {
        //     url: "/images/og-cloud-platforms.webp",
        //     width: 1200,
        //     height: 630,
        //   },
        // ],
    },
    //   twitter: {
    //     card: "summary_large_image",
    //     title: "Cloud Platforms: AWS, Azure, GCP | MMH Technologies",
    //     description:
    //       "Leverage the power of cloud computing with AWS, Azure, and Google Cloud. MMH Technologies provides scalable, secure, and cost-efficient cloud solutions for modern businesses.",
    //     images: ["/images/og-cloud-platforms.webp"],
    //     creator: "@MMHTech",
    //   },
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


export default function CloudPlatformsPage() {
    const platforms = [
        {
            icon: FaAws,
            title: "Amazon Web Services (AWS)",
            description:
                "The most mature cloud platform offering unmatched scalability, reliability, and service diversity."
        },
        {
            icon: FaMicrosoft,
            title: "Microsoft Azure",
            description:
                "Perfect for enterprises with strong Microsoft ecosystems, offering seamless hybrid cloud solutions."
        },
        {
            icon: FaGoogle,
            title: "Google Cloud Platform (GCP)",
            description:
                "Data-driven cloud platform optimized for analytics, AI, and high-performance workloads."
        }
    ];

    const features = [
        {
            icon: FaServer,
            title: "Scalable Infrastructure",
            description:
                "Scale compute, storage, and networking resources instantly based on demand."
        },
        {
            icon: FaLock,
            title: "Enterprise-Grade Security",
            description:
                "Advanced identity management, encryption, and compliance standards built-in."
        },
        {
            icon: FaGlobe,
            title: "Global Availability",
            description:
                "Deploy applications across multiple regions for low latency and high availability."
        },
        {
            icon: FaTools,
            title: "DevOps & Automation",
            description:
                "CI/CD pipelines, Infrastructure as Code, and monitoring tools streamline deployments."
        }
    ];

    const benefits = [
        {
            icon: FaRocket,
            title: "Faster Time to Market",
            description:
                "Launch and iterate products quickly without worrying about physical infrastructure."
        },
        {
            icon: FaDollarSign,
            title: "Pay As You Go",
            description:
                "Only pay for what you use, optimizing operational costs and reducing upfront investments."
        },
        {
            icon: FaChartLine,
            title: "High Performance",
            description:
                "Optimized cloud services ensure reliability, speed, and fault tolerance."
        },
        {
            icon: FaCloud,
            title: "Future-Proof Technology",
            description:
                "Stay ahead with continuous innovation in AI, data, and cloud-native services."
        }
    ];

    const stats = [
        { number: "99.99%", label: "Uptime SLA" },
        { number: "200+", label: "Global Regions" },
        { number: "60%", label: "Cost Optimization" },
        { number: "∞", label: "Scalability" }
    ];

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center gap-6 mb-6">
                            <FaAws className="text-4xl text-[var(--color-primary)]" />
                            <FaMicrosoft className="text-4xl text-[var(--color-primary)]" />
                            <FaGoogle className="text-4xl text-[var(--color-primary)]" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Cloud Platforms That{" "}
                            <span className="text-[var(--color-primary)]">Scale Your Business</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                            Build, deploy, and scale modern applications using AWS, Azure, and
                            Google Cloud with enterprise-grade reliability.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            {/* <button className="px-8 py-4 rounded-lg text-lg font-semibold bg-[var(--color-primary)] text-[var(--color-white)] transition-all hover:scale-105 hover:shadow-lg">
                                Start Cloud Migration
                            </button>
                            <button className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                                Talk to Cloud Experts
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-[var(--color-white)]">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-[var(--text-muted)] font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 px-2">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading heading="Why Cloud Platforms Matter?" isLine />

                        <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
                            <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-6">
                                Cloud platforms eliminate the limitations of traditional hosting
                                by offering scalable infrastructure, built-in security, and
                                global reach.
                            </p>
                            <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
                                Whether you're a startup or an enterprise, AWS, Azure, and GCP
                                enable you to innovate faster while keeping costs under control.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-20 bg-[var(--color-background-soft)]">
                <div className="container-custom">
                    <SectionHeading
                        heading="Leading Cloud Platforms We Work With"
                        subHeading="Choose the right cloud based on your business needs"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {platforms.map((platform, index) => (
                            <Card
                                key={index}
                                icon={platform.icon}
                                heading={platform.title}
                                description={platform.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container-custom">
                    <SectionHeading
                        heading="Core Cloud Capabilities"
                        subHeading="Everything you need to build reliable digital products"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                icon={feature.icon}
                                heading={feature.title}
                                description={feature.description}
                                isSmallHeading
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-[var(--color-background-soft)]">
                <div className="container-custom">
                    <SectionHeading
                        heading="Business Benefits of Cloud Adoption"
                        subHeading="Why modern companies choose cloud-first strategies"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card
                                key={index}
                                icon={benefit.icon}
                                heading={benefit.title}
                                description={benefit.description}
                                isSmallHeading
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[var(--color-white)]">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Move to the Cloud?
                        </h2>
                        <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                            From cloud migration to optimization, we help you leverage AWS,
                            Azure, and GCP to their full potential.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                href={"/contact"}
                                label={"Start Cloud Journey"}
                            />
                            {/* <Button
                                label={"Schedule a Consultation"}
                                isPrimary={false}
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
