import {
  FaBolt,
  FaDollarSign,
  FaMobileAlt,
  FaTools,
  FaRocket,
  FaUsers
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import Card from "@/components/Cards/Card";
import SectionHeading from "@/components/Blog/SectionHeading";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Flutter App Development | MMH Technologies",
  description:
    "Build high-performance, cross-platform applications with Flutter. MMH Technologies delivers fast development, native performance, and beautiful UIs for Android, iOS, Web, and Desktop from a single codebase.",
  keywords: [
    "Flutter",
    "Flutter App Development",
    "Cross-Platform Apps",
    "Mobile App Development",
    "iOS Apps",
    "Android Apps",
    "Web Apps",
    "Desktop Apps",
    "Hot Reload",
    "MMH Technologies",
    "Qatar",
  ],
  openGraph: {
    title: "Flutter App Development | MMH Technologies",
    description:
      "Build high-performance, cross-platform applications with Flutter. MMH Technologies delivers fast development, native performance, and beautiful UIs for Android, iOS, Web, and Desktop from a single codebase.",
    url: "https://www.mmhtechnologies.com/technologies/flutter",
    siteName: "MMH Technologies",
    type: "website",
    // images: [
    //   {
    //     url: "/images/og-flutter-development.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Flutter App Development | MMH Technologies",
  //   description:
  //     "Build high-performance, cross-platform applications with Flutter. MMH Technologies delivers fast development, native performance, and beautiful UIs for Android, iOS, Web, and Desktop from a single codebase.",
  //   images: ["/images/og-flutter-development.webp"],
  //   creator: "@MMHTech",
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


export default function FlutterPage() {
  const benefits = [
    {
      icon: FaBolt,
      title: "Fast Development",
      description:
        "Hot Reload enables instant UI updates, significantly reducing development time."
    },
    {
      icon: FaDollarSign,
      title: "Cost Effective",
      description:
        "A single codebase for Android, iOS, Web, and Desktop reduces development and maintenance costs."
    },
    {
      icon: FaMobileAlt,
      title: "Native Performance",
      description:
        "Compiled to native ARM code, Flutter apps deliver smooth animations and fast load times."
    },
    {
      icon: FaTools,
      title: "Easy Maintenance",
      description:
        "Centralized codebase makes updates, testing, and scaling effortless."
    }
  ];

  const features = [
    {
      icon: FaRocket,
      title: "Single Codebase",
      description:
        "Build applications for Android, iOS, Web, and Desktop using one unified codebase."
    },
    {
      icon: FaMobileAlt,
      title: "Rich UI & Animations",
      description:
        "Flutter’s widget-based architecture allows beautiful, expressive, and highly customizable UIs."
    },
    {
      icon: FaUsers,
      title: "Backed by Google",
      description:
        "Flutter is supported by Google with a rapidly growing global developer community."
    },
    {
      icon: FaTools,
      title: "Flexible Architecture",
      description:
        "Clean separation of UI and logic ensures scalability for enterprise-grade applications."
    }
  ];

  const stats = [
    { number: "500K+", label: "Apps Built" },
    { number: "160K+", label: "GitHub Stars" },
    { number: "Top 3", label: "Cross-Platform Framework" },
    { number: "#1", label: "Mobile UI Toolkit" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <SiFlutter className="text-5xl text-[var(--color-primary)]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
              Why Flutter is the{" "}
              <span className="text-[var(--color-primary)]">Future</span> of
              Cross-Platform Apps
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Build beautiful, high-performance applications for every platform
              from a single codebase
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg bg-[var(--color-primary)] text-[var(--color-white)]">
                Get Started
              </button>
              <button className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                View Case Studies
              </button> */}
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
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading heading="What Makes Flutter Special?" isLine />

            <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-[var(--text-muted)]">
                Flutter is an open-source UI toolkit created by Google for
                building natively compiled applications from a single codebase.
                It eliminates the traditional compromises of cross-platform
                development.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
                With consistent UI, native performance, and rapid development,
                Flutter empowers businesses to ship faster without sacrificing
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Powerful Features That Set Flutter Apart"
            subHeading="Designed for speed, consistency, and scalability"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Business Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            heading="Why Your Business Should Choose Flutter"
            subHeading="A cross-platform solution built for modern digital products"
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

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-white)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build with Flutter?
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Whether you're launching a startup or scaling an enterprise app,
              Flutter delivers speed, performance, and consistency across
              platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                href={"/contact"}
                label={"Start Your Flutter Project"}
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
