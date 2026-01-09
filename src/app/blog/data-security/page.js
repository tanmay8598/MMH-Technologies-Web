import {
  FaLock,
  FaUserShield,
  FaNetworkWired,
  FaKey,
  FaShieldAlt,
  FaClipboardCheck
} from "react-icons/fa";
import SectionHeading from "@/components/Blog/SectionHeading";
import Card from "@/components/Cards/Card";

export const metadata = {
  title: "Data Security Blog | MMH Technologies",
  description:
    "Learn the core principles, best practices, and strategies behind modern data security, protecting information and building trust.",
  keywords: [
    "Data Security",
    "Cybersecurity",
    "Encryption",
    "Compliance",
    "Threat Detection",
    "Identity Management",
    "Qatar",
  ],
  openGraph: {
    title: "Data Security Blog | MMH Technologies",
    description:
      "Learn the core principles, best practices, and strategies behind modern data security, protecting information and building trust.",
    url: "https://www.mmhtechnologies.com/blog/data-security",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-data-security.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "article",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Data Security Blog | MMH Technologies",
  //   description:
  //     "Learn the core principles, best practices, and strategies behind modern data security, protecting information and building trust.",
  //   images: ["/images/og-data-security.webp"],
  //   creator: "@MMHTech",
  // },
};


export default function DataSecurityBlogPage() {
  const pillars = [
    {
      icon: FaLock,
      title: "Data Protection",
      description:
        "Encryption, access control, and secure storage to safeguard sensitive information at rest and in transit."
    },
    {
      icon: FaUserShield,
      title: "Identity & Access Management",
      description:
        "Strong authentication, authorization, and least-privilege principles across systems."
    },
    {
      icon: FaNetworkWired,
      title: "Infrastructure Security",
      description:
        "Securing networks, servers, and cloud environments against internal and external threats."
    },
    {
      icon: FaClipboardCheck,
      title: "Compliance & Governance",
      description:
        "Meeting regulatory requirements through policies, audits, and accountability."
    }
  ];

  const focusAreas = [
    {
      icon: FaKey,
      title: "Encryption & Key Management",
      description:
        "Managing cryptographic keys securely to prevent unauthorized data access."
    },
    {
      icon: FaShieldAlt,
      title: "Threat Detection & Response",
      description:
        "Monitoring systems to identify, contain, and respond to security incidents in real time."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-32 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl text-center">
          <span className="uppercase tracking-widest text-sm text-[var(--color-primary)] font-semibold">
            Security & Trust
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-quaternary)] mt-6 mb-10 leading-tight">
            Data Security
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
            Understanding how modern systems protect data, maintain trust, and
            reduce risk in a connected world.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="Why Data Security Matters"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Data is one of the most valuable assets an organization owns.
            Protecting it is not only a technical responsibility, but also a
            legal and ethical obligation.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Modern applications operate across distributed systems, cloud
            platforms, and third-party services, expanding the surface area for
            potential threats.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            Effective data security strategies balance protection, usability,
            and compliance without slowing innovation.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Core Pillars of Data Security"
            subHeading="Foundational practices that protect digital information"
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

      {/* PREVENTION VS RESPONSE */}
      <section className="py-24">
        <div className="container-custom max-w-5xl">
          <SectionHeading
            heading="Prevention, Detection, and Response"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-12">
            Data security is not achieved through a single control. It requires
            layered defenses that prevent breaches, detect anomalies, and
            respond quickly when incidents occur.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {focusAreas.map((item, index) => (
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

      {/* TRUST & RESILIENCE */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="Building Trust Through Security"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Users trust platforms that demonstrate a clear commitment to data
            protection. Transparency, accountability, and consistent security
            practices strengthen that trust over time.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Security is not static. Regular audits, updates, and training help
            organizations adapt to emerging threats.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            Resilient systems assume breaches can happen and are designed to
            minimize damage while recovering quickly.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 bg-[var(--color-white)]">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-quaternary)]">
            Security as a Foundation, Not an Afterthought
          </h2>

          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            Strong data security enables innovation by creating systems that are
            safe, compliant, and worthy of user trust.
          </p>
        </div>
      </section>
    </>
  );
}
