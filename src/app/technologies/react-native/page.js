import { FaReact, FaBolt, FaDollarSign, FaMobileAlt, FaTools, FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';
import Button from '@/components/UI/Button';

export const metadata = {
  alternates: { canonical: "/technologies/react-native" },
  title: "React Native Development Services in Qatar | MMH Technologies",
  description:
    "Build high-performance, cross-platform mobile apps with React Native through MMH Technologies for Qatar and global clients. Leverage reusable components, native modules, and a single codebase for iOS and Android to deliver fast and cost-effective mobile solutions.",
  keywords: [
    "React Native",
    "React Native Development",
    "Mobile Apps",
    "Cross-Platform",
    "Frontend Development",
    "iOS Development",
    "Android Development",
    "JavaScript Library",
    "MMH Technologies",
    "Qatar",
  ],
  openGraph: {
    title: "React Native Development Services in Qatar | MMH Technologies",
    description:
      "Build high-performance, cross-platform mobile apps with React Native through MMH Technologies for Qatar and global clients. Leverage reusable components, native modules, and a single codebase for iOS and Android to deliver fast and cost-effective mobile solutions.",
    url: "https://www.mmhtechnologies.qa/technologies/react-native",
    siteName: "MMH Technologies",
    type: "website",
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

export default function ReactNativePage() {
    const benefits = [
        {
            icon: FaBolt,
            title: "Faster Development",
            description: "Single codebase for both iOS and Android speeds up development and reduces time-to-market."
        },
        {
            icon: FaDollarSign,
            title: "Cost-Effective",
            description: "Write once, deploy everywhere. Cut down development costs while reaching multiple platforms."
        },
        {
            icon: FaMobileAlt,
            title: "Cross-Platform",
            description: "React Native enables apps to run natively on multiple devices without losing performance or UX quality."
        },
        {
            icon: FaTools,
            title: "Easy Maintenance",
            description: "Reusable components and modular architecture make it simple to update, test, and maintain your mobile apps."
        }
    ];

    const features = [
        {
            icon: FaCode,
            title: "Reusable Components",
            description: "React Native allows you to create modular, reusable UI components. This ensures consistency across your app and faster development cycles."
        },
        {
            icon: FaRocket,
            title: "Native Performance",
            description: "With React Native, your apps use native components for rendering, delivering smooth performance and a native look and feel."
        },
        {
            icon: BiCodeAlt,
            title: "Single Codebase",
            description: "Write your code once and deploy it to both iOS and Android. This reduces development effort and ensures consistency across platforms."
        },
        {
            icon: FaUsers,
            title: "Vibrant Community & Libraries",
            description: "React Native has a strong developer community and an extensive ecosystem of libraries, tools, and modules for all your needs."
        }
    ];

    const stats = [
        { number: "1M+", label: "Apps Built Worldwide" },
        { number: "100K+", label: "GitHub Stars" },
        { number: "40%+", label: "Market Share in Cross-Platform" },
        { number: "#2", label: "Most Popular Mobile Framework" }
    ];

    const companies = ["Facebook", "Instagram", "Uber", "Discord", "Walmart", "Airbnb", "Tesla", "Skype"];

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
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
                            Build Cross-Platform Mobile Apps with <span className="text-[var(--color-primary)]">React Native</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
                            Create high-performance, cost-effective mobile apps for iOS and Android using a single, reusable codebase.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
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

            {/* Introduction */}
            <section className="py-20 px-2">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading heading={"Why Choose React Native?"} isLine />
                    <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-[var(--text-muted)]">
                            React Native is a powerful framework that allows developers to build mobile applications using JavaScript and React. Its single codebase approach drastically reduces development time while delivering near-native performance.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
                            Whether you want to target iOS, Android, or both, React Native provides the flexibility and efficiency needed to create seamless, high-quality apps without maintaining separate codebases.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-[var(--color-background-soft)]">
                <div className="container-custom">
                    <SectionHeading
                        heading={"Core Features of React Native"}
                        subHeading={"React Native offers a range of features that simplify mobile development and accelerate delivery"}
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
                        heading={"Benefits for Your Business"}
                        subHeading={"Investing in React Native saves time, reduces costs, and ensures consistent UX across platforms"}
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            Ready to Launch Your Mobile App?
                        </h2>
                        <p className="text-xl md:text-2xl  mb-8 opacity-90 leading-relaxed">
                            React Native allows you to create performant, cross-platform apps quickly and cost-effectively. Let’s build something that your users will love.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                href={"/contact"}
                                label={"Start Your React Native Project"}
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
