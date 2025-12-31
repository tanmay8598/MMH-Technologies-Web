import { FaReact, FaBolt, FaDollarSign, FaMobileAlt, FaTools, FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';

export default function ReactPage() {
    const benefits = [
        {
            icon: FaBolt,
            title: "Faster Development",
            description: "Reusable components and a vast library of pre-built solutions mean faster time-to-market for your projects."
        },
        {
            icon: FaDollarSign,
            title: "Cost-Effective",
            description: "A large talent pool of React developers means competitive rates and easier hiring for your projects."
        },
        {
            icon: FaMobileAlt,
            title: "Cross-Platform",
            description: "Use React Native to build mobile apps with the same codebase, reducing development costs significantly."
        },
        {
            icon: FaTools,
            title: "Easy Maintenance",
            description: "Component-based structure makes it simple to update, test, and maintain your application over time."
        }
    ];

    const features = [
        {
            icon: FaCode,
            title: "Component-Based Architecture",
            description: "React allows you to break down complex UIs into small, reusable components. Each component manages its own state and logic, making your code more maintainable and scalable. Think of it like building with LEGO blocks—once you create a component, you can use it anywhere in your application.",
        },
        {
            icon: FaRocket,
            title: "Virtual DOM for Lightning-Fast Performance",
            description: "React uses a Virtual DOM that efficiently updates only the parts of your page that actually change. This means faster rendering and a smoother user experience, even with complex applications handling large amounts of data.",
        },
        {
            icon: BiCodeAlt,
            title: "One-Way Data Flow",
            description: "React's unidirectional data flow makes your application more predictable and easier to debug. Data flows from parent to child components, creating a clear structure that developers can easily understand and maintain.",
        },
        {
            icon: FaUsers,
            title: "Rich Ecosystem and Community",
            description: "With millions of developers worldwide, React has an extensive ecosystem of libraries, tools, and resources. Whatever you need to build, there's likely a solution already available in the React ecosystem.",
        }
    ];

    const stats = [
        { number: "10M+", label: "Developers Worldwide" },
        { number: "220K+", label: "GitHub Stars" },
        { number: "40%+", label: "Market Share" },
        { number: "#1", label: "Most Popular Library" }
    ];

    const companies = ["Facebook", "Instagram", "Netflix", "Airbnb", "Uber", "Dropbox", "WhatsApp", "Discord"];

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl"></div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <FaReact className="text-5xl text-[var(--color-primary)] animate-spin" style={{ animationDuration: '3s' }} />
                            {/* <HiSparkles className="text-3xl text-[var(--color-secondary)]" /> */}
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
                            Why React is the <span className="text-[var(--color-primary)]">Future</span> of Web Development
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                            Build lightning-fast, scalable, and interactive web applications with the world's most popular JavaScript library
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg bg-[var(--color-secondary)] text-[var(--color-white)]">
                                Get Started Today
                            </button>
                            <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[var(--color-white)]">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
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

            {/* Introduction */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading heading={"What Makes React Special?"} isLine />
 

                        <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
                            <p className="text-lg md:text-xl leading-relaxed mb-6 text-[var(--text-muted)]">
                                React is a powerful JavaScript library developed by Facebook (now Meta) for building user interfaces. Since its release in 2013, it has become the most popular choice for front-end development, powering millions of websites and applications worldwide.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
                                Unlike traditional frameworks, React focuses on one thing and does it exceptionally well: creating interactive, dynamic user interfaces through reusable components. This laser-focused approach has made it the go-to choice for developers and businesses alike.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-[var(--color-background-soft)]">
                <div className="container-custom">
                    
                    <SectionHeading 
                        heading={"Powerful Features That Set React Apart"}
                        subHeading={"React comes packed with features designed to make development faster, easier, and more enjoyable"}    
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Benefits */}
            <section className="py-20">
                <div className="container-custom">
                    
                    <SectionHeading 
                        heading={"Why Your Business Should Choose React"}
                        subHeading={"Investing in React means investing in your business's future success"}    
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card key={index} icon={benefit.icon} heading={benefit.title} description={benefit.description} />
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-(--color-white) text-[var(--color-primary)]">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl md:text-2xl text-(--color-black) mb-8 opacity-90 leading-relaxed">
                            React isn't just a trend—it's a proven, battle-tested solution that has stood the test of time. Whether you're building a simple landing page or a complex web application, React provides the tools, performance, and flexibility you need to succeed.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg bg-[var(--color-secondary)] text-[var(--color-white)]">
                                Start Your React Project
                            </button>
                            <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                                Schedule a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}