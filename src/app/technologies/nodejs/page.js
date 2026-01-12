import {
  FaNodeJs,
  FaBolt,
  FaDollarSign,
  FaServer,
  FaTools,
  FaCode,
  FaRocket,
  FaUsers
} from "react-icons/fa";
import Card from "@/components/Cards/Card";
import SectionHeading from "@/components/Blog/SectionHeading";
import Button from "@/components/UI/Button";

export const metadata = {
  title: "Node.js Development Services in Qatar | MMH Technologies",
  description:
    "Build fast, scalable, and real-time backend systems with Node.js through MMH Technologies for Qatar and global clients. Leverage non-blocking I/O, event-driven architecture, and a massive ecosystem to deliver high-performance web applications and APIs.",
  keywords: [
    "Node.js",
    "Node.js Development",
    "Backend Development",
    "Real-Time Applications",
    "Scalable Backend",
    "JavaScript Runtime",
    "APIs",
    "Microservices",
    "MMH Technologies",
    "Qatar",
  ],
  openGraph: {
    title: "Node.js Development Services in Qatar | MMH Technologies",
    description:
      "Build fast, scalable, and real-time backend systems with Node.js through MMH Technologies for Qatar and global clients. Leverage non-blocking I/O, event-driven architecture, and a massive ecosystem to deliver high-performance web applications and APIs.",
    url: "https://www.mmhtechnologies.com/technologies/nodejs",
    siteName: "MMH Technologies",
    type: "website",
    // images: [
    //   {
    //     url: "/images/og-nodejs-development.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Node.js Development Services | MMH Technologies",
  //   description:
  //     "Build fast, scalable, and real-time backend systems with Node.js. MMH Technologies leverages non-blocking I/O, event-driven architecture, and a massive ecosystem to deliver high-performance web applications and APIs.",
  //   images: ["/images/og-nodejs-development.webp"],
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


export default function NodeJsPage() {

  const benefits = [
    {
      icon: FaBolt,
      title: "High Performance",
      description: "Non-blocking I/O ensures fast response times even under heavy load."
    },
    {
      icon: FaDollarSign,
      title: "Cost Efficient",
      description: "Lightweight architecture reduces server and infrastructure costs."
    },
    {
      icon: FaServer,
      title: "Scalable Systems",
      description: "Ideal for microservices, APIs, and real-time applications."
    },
    {
      icon: FaTools,
      title: "Easy Maintenance",
      description: "Modular structure makes applications easier to update and extend."
    }
  ];

  const features = [
    {
      icon: FaCode,
      title: "JavaScript Everywhere",
      description: "Use a single language across frontend and backend, simplifying development and team collaboration."
    },
    {
      icon: FaRocket,
      title: "Event-Driven Architecture",
      description: "Handles thousands of concurrent connections efficiently using an event loop."
    },
    {
      icon: FaUsers,
      title: "Massive Ecosystem",
      description: "npm provides access to millions of open-source packages to speed up development."
    },
    {
      icon: FaServer,
      title: "Real-Time Ready",
      description: "Perfect for chat apps, live dashboards, streaming platforms, and APIs."
    }
  ];

  const stats = [
    { number: "20M+", label: "Weekly npm Downloads" },
    { number: "1M+", label: "Active Packages" },
    { number: "90%+", label: "Fortune 500 Usage" },
    { number: "#1", label: "Backend Runtime" }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FaNodeJs className="text-6xl mx-auto mb-6 text-[var(--color-primary)]" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-quaternary)] leading-tight">
              Node.js for{" "}
              <span className="text-[var(--color-primary)]">Scalable</span>{" "}
              Backend Systems
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Powering fast, real-time, and high-traffic applications worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-white)]">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2">
                {s.number}
              </div>
              <div className="text-[var(--text-muted)] font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-2">
        <div className="max-w-4xl mx-auto">
          <SectionHeading heading="What Makes Node.js Powerful?" isLine />
          <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
            <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
              Node.js is a JavaScript runtime built on Chrome’s V8 engine, designed
              for building fast and scalable backend systems. It enables
              real-time communication and handles massive traffic effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Core Features of Node.js"
            subHeading="Designed for performance, scalability, and speed"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card
                key={i}
                icon={f.icon}
                heading={f.title}
                description={f.description}
                isSmallHeading
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            heading="Why Businesses Choose Node.js"
            subHeading="A backend technology built for growth"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <Card
                key={i}
                icon={b.icon}
                heading={b.title}
                description={b.description}
                isSmallHeading
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-white)]">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-quaternary)]">
            Build Scalable Backends with Node.js
          </h2>
          <p className="text-xl mb-8 text-[var(--text-muted)] leading-relaxed">
            From APIs to real-time platforms, Node.js gives your business the
            speed and reliability it needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href={"/contact"}
              label={"Start Your Node Project"}
            />
            {/* <Button
              label={"Talk to Experts"}
              isPrimary={false}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}
