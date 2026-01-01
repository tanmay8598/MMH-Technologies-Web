import { FaLock, FaCode, FaMobileAlt, FaTools, FaShieldAlt } from 'react-icons/fa';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';
import Button from '@/components/UI/Button';

export default function SecureAppDevelopmentPage() {
    const features = [
        {
            icon: FaCode,
            title: "Secure Coding Practices",
            description: "Our developers follow OWASP and industry best practices to write code that minimizes vulnerabilities and protects user data."
        },
        {
            icon: FaLock,
            title: "Authentication & Authorization",
            description: "Implement strong authentication, multi-factor login, and role-based access control to prevent unauthorized access."
        },
        {
            icon: FaMobileAlt,
            title: "Mobile App Hardening",
            description: "Techniques like obfuscation, encryption, and secure storage ensure mobile applications resist reverse engineering and tampering."
        },
        {
            icon: FaTools,
            title: "Vulnerability Testing",
            description: "Regular static and dynamic code analysis, penetration testing, and threat modeling to identify and mitigate potential risks."
        },
        {
            icon: FaShieldAlt,
            title: "Continuous Security Monitoring",
            description: "Monitor apps in real-time for suspicious activity and potential breaches, ensuring fast detection and mitigation."
        }
    ];

    const benefits = [
        {
            icon: FaShieldAlt,
            title: "Protection Against Breaches",
            description: "Minimize risk of data leaks, hacks, and cyber attacks with secure development practices integrated from the start."
        },
        {
            icon: FaCode,
            title: "Reliable & Stable Apps",
            description: "Secure coding ensures fewer vulnerabilities, fewer bugs, and better performance for your end-users."
        },
        {
            icon: FaMobileAlt,
            title: "User Trust",
            description: "Building secure applications demonstrates responsibility, earning trust and loyalty from your customers."
        },
        {
            icon: FaTools,
            title: "Regulatory Compliance",
            description: "Secure development helps meet standards like GDPR, ISO 27001, and PCI-DSS, protecting both your business and your clients."
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
                        <FaMobileAlt className="text-5xl text-[var(--color-primary)] animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
                        Secure <span className="text-[var(--color-primary)]">App Development</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                        Build robust, secure, and trustworthy applications that protect data, maintain compliance, and earn user trust.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container-custom">
                    <SectionHeading
                        heading={"Core Practices in Secure App Development"}
                        subHeading={"Security built into every stage of the software development lifecycle"}
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
                        heading={"Why Secure App Development is Crucial"}
                        subHeading={"Strong security practices protect your users, data, and business reputation"}
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
                            Ready to Build Secure Applications?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                            Integrate security into your development process from day one and deliver apps your users can trust.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button label={"Start Secure Development"} />
                            <Button label={"Schedule a Consultation"} isPrimary={false} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
