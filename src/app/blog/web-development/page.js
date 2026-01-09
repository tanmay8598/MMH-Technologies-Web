import {
  FaCode,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaLayerGroup,
  FaCogs
} from "react-icons/fa";
import SectionHeading from "@/components/Blog/SectionHeading";
import Card from "@/components/Cards/Card";

export const metadata = {
  title: "Modern Web Development | Architecture, Performance & SEO",
  description:
    "Explore modern web development principles including scalable architecture, performance engineering, SEO foundations, and security-first design for long-lasting applications.",

  keywords: [
    "modern web development",
    "web application architecture",
    "frontend and backend development",
    "web performance optimization",
    "technical SEO",
    "secure web applications",
    "Qatar",
  ],

  openGraph: {
    title: "Modern Web Development | Architecture, Performance & SEO",
    description:
      "Explore modern web development principles including scalable architecture, performance engineering, SEO foundations, and security-first design for long-lasting applications.",
    url: "https://mmhtechnologies.com/blog/web-development",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-web-development.webp", // add this image
    //     width: 1200,
    //     height: 630,
    //     alt: "Modern Web Development Architecture",
    //   },
    // ],
    type: "article",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Modern Web Development",
  //   description:
  //     "Architecture, performance, SEO, and security principles behind modern web applications.",
  //   images: ["/images/og-web-development.webp"],
  // },

};


export default function WebDevelopmentBlogPage() {
  const pillars = [
    {
      icon: FaLayerGroup,
      title: "Modern Architecture",
      description:
        "Scalable, component-driven systems designed for long-term maintainability rather than short-term delivery."
    },
    {
      icon: FaRocket,
      title: "Performance Engineering",
      description:
        "Every millisecond matters. Optimized rendering, caching, and network strategies shape real user experience."
    },
    {
      icon: FaSearch,
      title: "SEO & Discoverability",
      description:
        "Search visibility today depends on technical foundations like semantics, accessibility, and server rendering."
    },
    {
      icon: FaShieldAlt,
      title: "Security by Design",
      description:
        "Security is not a feature. It is a continuous discipline embedded into every layer of development."
    }
  ];

  const techFocus = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Interfaces that balance performance, accessibility, and aesthetics while remaining intuitive across devices."
    },
    {
      icon: FaCogs,
      title: "Backend Systems",
      description:
        "Reliable APIs, databases, and infrastructure that quietly power products at scale without friction."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-32 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl text-center">
          <span className="uppercase tracking-widest text-sm text-[var(--color-primary)] font-semibold">
            Engineering & Architecture
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-quaternary)] mt-6 mb-10 leading-tight">
            Modern Web Development
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
            A deep dive into how today’s web applications are architected,
            optimized, secured, and scaled for real-world impact.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="The Evolution of Web Development"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Web development has evolved from static pages into complex,
            distributed systems powering businesses, platforms, and global
            communities.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Modern users expect applications to load instantly, adapt seamlessly
            across devices, remain accessible, and protect their data by
            default. These expectations have reshaped how the web is built.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            This article explores the core principles that define successful
            modern web applications and why they matter beyond just technology.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Core Pillars of Modern Web Applications"
            subHeading="The engineering principles behind resilient and scalable products"
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

      {/* FRONTEND VS BACKEND */}
      <section className="py-24">
        <div className="container-custom max-w-5xl">
          <SectionHeading
            heading="Frontend and Backend Responsibilities"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-12">
            While frontend and backend development often overlap, each carries
            distinct responsibilities that must work in harmony to deliver a
            cohesive user experience.
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
            heading="Performance, SEO, and Security"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Performance is no longer a technical metric alone. It directly
            impacts user retention, engagement, and revenue. Slow experiences
            silently erode trust.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Search engines increasingly reward technically sound applications.
            Semantic HTML, accessibility, and server-side rendering now play a
            larger role than keyword tactics.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            Security underpins everything. From authentication flows to data
            storage and infrastructure, modern applications must assume
            continuous exposure and defend accordingly.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 bg-[var(--color-white)]">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-quaternary)]">
            Building for Longevity on the Web
          </h2>

          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            The web remains the most open platform for innovation. Mastering its
            fundamentals today ensures your products remain relevant, resilient,
            and trusted tomorrow.
          </p>
        </div>
      </section>
    </>
  );
}
