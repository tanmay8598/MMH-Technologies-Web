import {
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaLayerGroup,
  FaSyncAlt
} from "react-icons/fa";
import SectionHeading from "@/components/Blog/SectionHeading";
import Card from "@/components/Cards/Card";

export const metadata = {
  title: "Mobile App Development Blog | MMH Technologies",
  description:
    "Explore the core principles, architecture, and best practices behind successful mobile applications for Qatar-based and global businesses in today’s ecosystem.",
  keywords: [
    "Mobile App Development",
    "Mobile Engineering",
    "Mobile UI Design",
    "App Performance",
    "App Security",
    "Cross-Platform Apps",
    "Qatar",
  ],
  openGraph: {
    title: "Mobile App Development Blog | MMH Technologies",
    description:
      "Explore the core principles, architecture, and best practices behind successful mobile applications for Qatar-based and global businesses in today’s ecosystem.",
    url: "https://www.mmhtechnologies.qa/blog/mobile-app-development",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-mobile-apps.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "article",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Mobile App Development Blog | MMH Technologies",
  //   description:
  //     "Explore the core principles, architecture, and best practices behind successful mobile applications in today's ecosystem.",
  //   images: ["/images/og-mobile-apps.webp"],
  //   creator: "@MMHTech",
  // },
};


export default function MobileAppDevelopmentBlogPage() {
  const pillars = [
    {
      icon: FaLayerGroup,
      title: "Robust App Architecture",
      description:
        "Well-structured, modular architectures that support scalability, maintainability, and long-term growth."
    },
    {
      icon: FaRocket,
      title: "Performance & Responsiveness",
      description:
        "Fast startup times, smooth animations, and efficient resource usage define great mobile experiences."
    },
    {
      icon: FaShieldAlt,
      title: "Security & Privacy",
      description:
        "Secure data storage, encrypted communication, and privacy-first design are non-negotiable today."
    },
    {
      icon: FaSyncAlt,
      title: "Cross-Platform Strategy",
      description:
        "Balancing native performance with shared codebases using modern cross-platform frameworks."
    }
  ];

  const techFocus = [
    {
      icon: FaMobileAlt,
      title: "Frontend (Mobile UI)",
      description:
        "Touch-optimized interfaces, accessibility, and intuitive navigation tailored for small screens."
    },
    {
      icon: FaCogs,
      title: "Backend & Integrations",
      description:
        "APIs, real-time services, authentication, and third-party integrations powering mobile apps."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-32 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl text-center">
          <span className="uppercase tracking-widest text-sm text-[var(--color-primary)] font-semibold">
            Mobile Engineering
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-quaternary)] mt-6 mb-10 leading-tight">
            Mobile App Development
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
            Understanding how modern mobile applications are designed, built,
            optimized, and scaled for real users and real devices.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="The Mobile-First Reality"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Mobile devices have become the primary interface between users and
            digital products. From payments to productivity, expectations for
            mobile experiences are higher than ever.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Users expect apps to feel instant, intuitive, and reliable,
            regardless of network conditions or device limitations. Achieving
            this requires more than just clean UI.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            This article explores the engineering principles that define
            successful mobile applications in today’s ecosystem.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Core Pillars of Mobile App Development"
            subHeading="Foundational principles behind high-quality mobile applications"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {pillars.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                heading={item.title}
                description={item.description}
                isSmallHeading
              />
            ))}
          </div>
        </div>
      </section>

      {/* UI VS SYSTEMS */}
      <section className="py-24">
        <div className="container-custom max-w-5xl">
          <SectionHeading
            heading="User Experience and System Design"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-12">
            Mobile app success lies at the intersection of thoughtful user
            experience and reliable backend systems. One cannot exist without
            the other.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {techFocus.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                heading={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE & SECURITY */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="Performance, Reliability, and Security"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Mobile performance is deeply tied to user retention. Slow launches,
            dropped frames, or excessive battery usage lead to quick uninstalls.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Offline handling, network resilience, and graceful error states are
            essential in real-world mobile environments.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            Security remains critical. Mobile apps often handle sensitive
            personal and financial data, making robust protection a fundamental
            responsibility.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 bg-[var(--color-white)]">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-quaternary)]">
            Designing Mobile Experiences That Last
          </h2>

          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            Great mobile apps balance performance, usability, and reliability.
            Building with these principles ensures products remain valuable as
            platforms and user expectations continue to evolve.
          </p>
        </div>
      </section>
    </>
  );
}
