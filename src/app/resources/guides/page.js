import { FaGavel, FaClipboardCheck, FaCode, FaSearch, FaLock, FaBook } from 'react-icons/fa';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';
import Button from '@/components/UI/Button';

export const metadata = {
  title: "Practical Security Guides | GDPR, Encryption & Secure Coding",
  description:
    "Explore practical, step-by-step security guides covering GDPR implementation, secure coding practices, data security checklists, encryption, and security audits.",
  keywords: [
    "security guides",
    "GDPR implementation guide",
    "secure coding practices",
    "data security checklist",
    "security audit guide",
    "end-to-end encryption",
    "application security best practices"
  ],
  openGraph: {
    title: "Practical Security Guides | GDPR, Encryption & Secure Coding",
    description:
      "Explore practical, step-by-step security guides covering GDPR implementation, secure coding practices, data security checklists, encryption, and security audits.",
    type: "website",
  },
  // twitter: {
  //   card: "summary",
  //   title: "Security & Compliance Guides",
  //   description:
  //     "Actionable guides on GDPR, encryption, secure coding, and security audits.",
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


export default function GuidesPage() {
  const guides = [
    { title: "How to Implement GDPR in Your App", description: "Step-by-step implementation guide for GDPR compliance.", icon: FaGavel },
    { title: "Data Security Checklist for Startups", description: "Ensure your data practices are compliant and secure.", icon: FaClipboardCheck },
    { title: "Top 10 Secure Coding Practices", description: "Reduce vulnerabilities in web and mobile applications.", icon: FaCode },
    { title: "How to Conduct a Security Audit", description: "Practical approach to identifying and fixing risks.", icon: FaSearch },
    { title: "End-to-End Encryption Implementation", description: "Guide for encrypting data in transit and at rest.", icon: FaLock },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--color-background-soft)] text-center">
        <div className="flex justify-center mb-6">
          <FaBook className="text-6xl text-[var(--color-primary)] animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)]">
          Practical <span className="text-[var(--color-primary)]">Guides</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
          Step-by-step instructions and actionable advice for building secure and compliant applications.
        </p>
      </section>

      {/* Guides */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading heading="Our Guides" subHeading="Learn from expert advice and actionable steps" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {guides.map((guide, idx) => (
              <Card key={idx} icon={guide.icon} heading={guide.title} description={guide.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-white)] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Learning Today</h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Access all our guides and implement security and compliance best practices in your organization.
        </p>
        <Button label="View All Guides" />
      </section>
    </>
  );
}
