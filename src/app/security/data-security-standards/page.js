import { FaShieldAlt, FaLock, FaDatabase, FaFileContract, FaTools } from 'react-icons/fa';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';
import Button from '@/components/UI/Button';

export const metadata = {
    title: "Data Security Standards in Qatar | MMH Technologies",
    description:
        "Implement global data security standards with MMH Technologies for Qatar and international clients. ISO 27001 compliance, encryption, backup & recovery, governance, and continuous monitoring to protect sensitive information and build trust.",
    keywords: [
        "Data Security Standards",
        "MMH Technologies",
        "ISO 27001",
        "Encryption Standards",
        "Data Backup and Recovery",
        "Policy Governance",
        "Continuous Monitoring",
        "Cybersecurity Compliance",
        "GDPR",
        "Information Security",
        "Qatar",
    ],
    openGraph: {
        title: "Data Security Standards in Qatar | MMH Technologies",
        description:
            "Implement global data security standards with MMH Technologies for Qatar and international clients. ISO 27001 compliance, encryption, backup & recovery, governance, and continuous monitoring to protect sensitive information and build trust.",
        url: "https://www.mmhtechnologies.com/security/data-security-standards",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-data-security-standards.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Data Security Standards | MMH Technologies",
    //     description:
    //         "Implement global data security standards with MMH Technologies. ISO 27001 compliance, encryption, backup & recovery, governance, and continuous monitoring to protect sensitive information and build trust.",
    //     images: ["/images/og-data-security-standards.webp"],
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



export default function DataSecurityStandardsPage() {
    const features = [
        {
            icon: FaShieldAlt,
            title: "ISO/IEC 27001 Compliance",
            description: "Implement internationally recognized standards for information security management systems to ensure structured protection of data."
        },
        {
            icon: FaLock,
            title: "Encryption Standards",
            description: "All sensitive data is encrypted at rest and in transit using AES-256 and TLS 1.3, ensuring confidentiality and integrity."
        },
        {
            icon: FaDatabase,
            title: "Data Backup & Recovery",
            description: "Regular, automated backups and tested disaster recovery plans guarantee data availability in case of failures."
        },
        {
            icon: FaFileContract,
            title: "Policy & Procedure Governance",
            description: "Comprehensive data handling policies, access controls, and employee training ensure compliance and minimize risk."
        },
        {
            icon: FaTools,
            title: "Continuous Monitoring",
            description: "Advanced monitoring and auditing mechanisms detect anomalies and potential security breaches proactively."
        }
    ];

    const benefits = [
        {
            icon: FaShieldAlt,
            title: "Enhanced Data Security",
            description: "Adopting standards reduces vulnerabilities and protects sensitive information from unauthorized access."
        },
        {
            icon: FaFileContract,
            title: "Regulatory Compliance",
            description: "Aligns your organization with international regulations, reducing legal risk and building customer trust."
        },
        {
            icon: FaLock,
            title: "Customer Trust",
            description: "Demonstrating strong data security practices reassures clients and stakeholders about your commitment to privacy."
        },
        {
            icon: FaTools,
            title: "Operational Excellence",
            description: "Standardized processes simplify audits, incident management, and reporting while improving internal efficiency."
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
                        <FaDatabase className="text-5xl text-[var(--color-primary)] animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
                        Data <span className="text-[var(--color-primary)]">Security Standards</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                        Implementing global data security standards to protect sensitive information, ensure compliance, and build trust with your users.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container-custom">
                    <SectionHeading
                        heading={"Core Data Security Standards"}
                        subHeading={"We follow proven standards to protect your organization's data at every level"}
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
                        heading={"Why Data Security Standards Matter"}
                        subHeading={"Protecting data is not just compliance—it's a business advantage"}
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
                            Ready to Strengthen Your Data Security?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                            Align your organization with global data security standards and protect your business from breaches, loss, and regulatory risks.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button label={"Start Your Data Security Journey"} />
                            <Button label={"Schedule a Consultation"} isPrimary={false} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
