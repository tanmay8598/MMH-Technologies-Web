import { FaFileAlt, FaChartLine, FaUserShield, FaCloud, FaMobileAlt } from 'react-icons/fa';
import Card from '@/components/Cards/Card';
import SectionHeading from '@/components/Blog/SectionHeading';
import Button from '@/components/UI/Button';

export default function WhitepapersPage() {
  const whitepapers = [
    { title: "State of App Security 2026", description: "Trends, threats, and solutions for modern app development.", icon: FaChartLine },
    { title: "GDPR Compliance Guide", description: "Insights on maintaining privacy and regulatory standards globally.", icon: FaUserShield },
    { title: "ISO 27001 Implementation", description: "A roadmap for achieving internationally recognized security certification.", icon: FaFileAlt },
    { title: "Emerging Threats in Cloud Security", description: "Analyzing the latest attack vectors and mitigation strategies.", icon: FaCloud },
    { title: "Secure Mobile App Design", description: "Best practices for building resilient and safe mobile apps.", icon: FaMobileAlt },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--color-background-soft)] text-center">
        <div className="flex justify-center mb-6">
          <FaFileAlt className="text-6xl text-[var(--color-primary)] animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)]">
          Insightful <span className="text-[var(--color-primary)]">Whitepapers</span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
          In-depth research, expert analysis, and actionable insights to help you stay ahead in security and compliance.
        </p>
      </section>

      {/* Whitepapers */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading heading="Our Whitepapers" subHeading="Download detailed reports and research studies" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {whitepapers.map((paper, idx) => (
              <Card key={idx} icon={paper.icon} heading={paper.title} description={paper.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-white)] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Want More In-Depth Research?</h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Download our whitepapers and stay informed on the latest trends in security, compliance, and app development.
        </p>
        <Button label="Download All Whitepapers" />
      </section>
    </>
  );
}
