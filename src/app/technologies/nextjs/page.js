import {
  FaBolt,
  FaDollarSign,
  FaMobileAlt,
  FaTools,
  FaRocket,
  FaServer,
  FaUsers
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Card from "@/components/Cards/Card";
import SectionHeading from "@/components/Blog/SectionHeading";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Next.js Development Services | MMH Technologies",
  description:
    "Build blazing-fast, SEO-optimized, and scalable web applications with Next.js. MMH Technologies leverages server-side rendering, static generation, and full-stack capabilities to deliver high-performance React applications.",
  keywords: [
    "Next.js",
    "Next.js Development",
    "React Framework",
    "Server-Side Rendering",
    "Static Site Generation",
    "SEO-Optimized Web Apps",
    "Full-Stack React",
    "High Performance Web Apps",
    "MMH Technologies"
  ],
  openGraph: {
    title: "Next.js Development Services | MMH Technologies",
    description:
      "Build blazing-fast, SEO-optimized, and scalable web applications with Next.js. MMH Technologies leverages server-side rendering, static generation, and full-stack capabilities to deliver high-performance React applications.",
    url: "https://www.mmhtechnologies.com/technologies/nextjs",
    siteName: "MMH Technologies",
    type: "website",
    // images: [
    //   {
    //     url: "/images/og-nextjs-development.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Next.js Development Services | MMH Technologies",
  //   description:
  //     "Build blazing-fast, SEO-optimized, and scalable web applications with Next.js. MMH Technologies leverages server-side rendering, static generation, and full-stack capabilities to deliver high-performance React applications.",
  //   images: ["/images/og-nextjs-development.webp"],
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


export default function NextJsPage() {
  const benefits = [
    {
      icon: FaBolt,
      title: "Blazing Fast Performance",
      description:
        "Built-in optimizations like server-side rendering and static generation deliver exceptional speed."
    },
    {
      icon: FaDollarSign,
      title: "SEO & Conversion Friendly",
      description:
        "Pre-rendered pages improve search rankings and increase conversion rates."
    },
    {
      icon: FaMobileAlt,
      title: "Production Ready",
      description:
        "Next.js is designed for real-world applications with routing, caching, and rendering handled for you."
    },
    {
      icon: FaTools,
      title: "Developer Productivity",
      description:
        "File-based routing, API routes, and zero-config setup accelerate development."
    }
  ];

  const features = [
    {
      icon: FaRocket,
      title: "Server-Side Rendering (SSR)",
      description:
        "Render pages on the server for faster initial loads and better SEO, especially for content-heavy platforms."
    },
    {
      icon: FaServer,
      title: "Static Site Generation (SSG)",
      description:
        "Generate ultra-fast static pages at build time while still supporting dynamic content."
    },
    {
      icon: FaUsers,
      title: "Full-Stack Capabilities",
      description:
        "With API routes and server actions, Next.js allows you to build frontend and backend in one framework."
    },
    {
      icon: FaTools,
      title: "Automatic Optimizations",
      description:
        "Image optimization, code splitting, caching, and performance enhancements come built-in."
    }
  ];

  const stats = [
    { number: "1M+", label: "Websites Built" },
    { number: "100K+", label: "GitHub Stars" },
    { number: "Top 3", label: "React Framework" },
    { number: "#1", label: "SEO-Friendly React Stack" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />

        <div className="container-custom relative text-center z-10">

          <div className="flex justify-center mb-6">
            <SiNextdotjs className="text-5xl text-[var(--color-primary)]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
            Why Next.js is the{" "}
            <span className="text-[var(--color-primary)]">Future</span> of
            React Applications
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
            Build lightning-fast, SEO-optimized, and scalable web applications
            with Next.js
          </p>
          {/* <div className="flex flex-wrap gap-4 justify-center">
              <Button
                label={"Get Started"}

              />
              <Button
                label={"View Projects"}
                isPrimary={false}
              />
            </div> */}

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
      <section className="py-20 px-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading heading="What Makes Next.js Special?" isLine />
          <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-[var(--text-muted)]">
              Next.js is a powerful React framework built by Vercel that enables
              developers to create production-grade applications with ease.
              It bridges the gap between performance, scalability, and
              developer experience.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
              From marketing websites to enterprise platforms, Next.js gives
              businesses the performance edge needed to scale and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Powerful Features That Set Next.js Apart"
            subHeading="Designed for speed, SEO, and scalability"
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
            heading="Why Your Business Should Choose Next.js"
            subHeading="A framework built for modern, high-performance products"
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
              Ready to Build with Next.js?
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Whether you're launching a startup or scaling an enterprise
              platform, Next.js delivers unmatched speed, SEO, and flexibility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                label={"Start Your Next.js Project"}

              />
              <Button
                label={"Schedule a Consultation"}
                isPrimary={false}
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
