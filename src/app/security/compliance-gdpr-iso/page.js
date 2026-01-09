import { FaFileContract, FaShieldAlt, FaCheckCircle, FaUsers, FaTools } from 'react-icons/fa';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';
import Button from '@/components/UI/Button';

export const metadata = {
    title: "GDPR & ISO Compliance | MMH Technologies",
    description:
        "Ensure GDPR and ISO compliance with MMH Technologies. Implement key compliance measures, protect data, reduce risk, and build trust with clients and stakeholders worldwide.",
    keywords: [
        "GDPR Compliance",
        "ISO Compliance",
        "MMH Technologies",
        "Data Privacy",
        "Regulatory Compliance",
        "Information Security",
        "ISO 27001",
        "Data Protection Policies",
        "Audits and Reporting",
        "Employee Training",
        "Compliance Standards",
        "Qatar",
    ],
    openGraph: {
        title: "GDPR & ISO Compliance | MMH Technologies",
        description:
            "Ensure GDPR and ISO compliance with MMH Technologies. Implement key compliance measures, protect data, reduce risk, and build trust with clients and stakeholders worldwide.",
        url: "https://www.mmhtechnologies.com/security/compliance-gdpr-iso",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-compliance.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "GDPR & ISO Compliance | MMH Technologies",
    //     description:
    //         "Ensure GDPR and ISO compliance with MMH Technologies. Implement key compliance measures, protect data, reduce risk, and build trust with clients and stakeholders worldwide.",
    //     images: ["/images/og-compliance.webp"],
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


export default function CompliancePage() {
    const features = [
        {
            icon: FaFileContract,
            title: "GDPR Compliance",
            description: "Ensure full compliance with GDPR regulations, protecting personal data of users in the EU and beyond while avoiding heavy fines."
        },
        {
            icon: FaCheckCircle,
            title: "ISO Certifications",
            description: "Achieve ISO 27001 and other relevant certifications to demonstrate your organization’s commitment to information security management."
        },
        {
            icon: FaShieldAlt,
            title: "Data Protection Policies",
            description: "Implement structured policies and processes that meet global standards, covering data access, storage, and sharing."
        },
        {
            icon: FaTools,
            title: "Audits & Reporting",
            description: "Regular audits, compliance checks, and reporting ensure your systems and practices remain aligned with GDPR and ISO standards."
        },
        {
            icon: FaUsers,
            title: "Employee Awareness & Training",
            description: "Empower staff with proper training on privacy, security, and regulatory obligations, reducing human error risks."
        }
    ];

    const benefits = [
        {
            icon: FaShieldAlt,
            title: "Legal & Regulatory Protection",
            description: "Reduce risk of fines, lawsuits, and penalties by adhering to GDPR and ISO standards."
        },
        {
            icon: FaCheckCircle,
            title: "Enhanced Trust",
            description: "Show clients, partners, and stakeholders that you take data privacy seriously, increasing confidence and loyalty."
        },
        {
            icon: FaUsers,
            title: "Operational Efficiency",
            description: "Standardized processes simplify audits, risk management, and internal compliance, saving time and resources."
        },
        {
            icon: FaTools,
            title: "Global Recognition",
            description: "ISO certifications and GDPR adherence improve your organization’s credibility worldwide."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl"></div>

                <div className="container-custom relative z-10 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <FaFileContract className="text-5xl text-[var(--color-primary)] animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
                        Compliance with <span className="text-[var(--color-primary)]">GDPR & ISO</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                        Achieve global regulatory compliance and demonstrate your commitment to data privacy, security, and organizational excellence.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container-custom">
                    <SectionHeading
                        heading={"Key Compliance Measures"}
                        subHeading={"Our approach ensures your organization meets GDPR and ISO requirements efficiently"}
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {features.map((feature, index) => (
                            <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-[var(--color-background-soft)]">
                <div className="container-custom">
                    <SectionHeading
                        heading={"Why Compliance Matters"}
                        subHeading={"Protect your business, clients, and reputation by adhering to global standards"}
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} icon={benefit.icon} heading={benefit.title} description={benefit.description} isSmallHeading />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[var(--color-white)]">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Achieve Compliance?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                            Let us guide your organization through GDPR and ISO compliance, safeguarding your data, building trust, and strengthening your global credibility.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button label={"Start Your Compliance Journey"} />
                            <Button label={"Request a Consultation"} isPrimary={false} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
