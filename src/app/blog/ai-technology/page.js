import {
  FaBrain,
  FaProjectDiagram,
  FaShieldAlt,
  FaBalanceScale,
  FaCogs,
  FaChartLine
} from "react-icons/fa";
import SectionHeading from "@/components/Blog/SectionHeading";
import Card from "@/components/Cards/Card";

export const metadata = {
  title: "AI Technology Blog | MMH Technologies",
  description:
    "Explore the core principles, engineering practices, and responsible governance behind modern AI systems for Qatar-based and global organizations, driving real-world impact.",
  keywords: [
    "Artificial Intelligence",
    "AI Technology",
    "Machine Learning",
    "Responsible AI",
    "Model Engineering",
    "Ethics in AI",
    "Qatar",
  ],
  openGraph: {
    title: "AI Technology Blog | MMH Technologies",
    description:
      "Explore the core principles, engineering practices, and responsible governance behind modern AI systems for Qatar-based and global organizations, driving real-world impact.",
    url: "https://www.mmhtechnologies.com/blog/ai-technology",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-ai-technology.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "article",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "AI Technology Blog | MMH Technologies",
  //   description:
  //     "Explore the core principles, engineering practices, and responsible governance behind modern AI systems for real-world impact.",
  //   images: ["/images/og-ai-technology.webp"],
  //   creator: "@MMHTech",
  // },
};


export default function AITechnologyBlogPage() {
  const pillars = [
    {
      icon: FaBrain,
      title: "Applied Intelligence",
      description:
        "AI systems designed to solve real problems through data, models, and measurable outcomes."
    },
    {
      icon: FaProjectDiagram,
      title: "Data & Model Pipelines",
      description:
        "Reliable data collection, preprocessing, training, and deployment pipelines power effective AI."
    },
    {
      icon: FaChartLine,
      title: "Continuous Learning",
      description:
        "Monitoring, retraining, and iteration ensure models remain relevant as data evolves."
    },
    {
      icon: FaShieldAlt,
      title: "Responsible AI",
      description:
        "Security, bias mitigation, transparency, and governance are core to trustworthy AI systems."
    }
  ];

  const focusAreas = [
    {
      icon: FaCogs,
      title: "Model Engineering",
      description:
        "Selecting, training, evaluating, and deploying models suited to specific business needs."
    },
    {
      icon: FaBalanceScale,
      title: "Ethics & Compliance",
      description:
        "Designing AI systems that respect user privacy, regulatory requirements, and societal impact."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-32 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl text-center">
          <span className="uppercase tracking-widest text-sm text-[var(--color-primary)] font-semibold">
            Artificial Intelligence
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-quaternary)] mt-6 mb-10 leading-tight">
            AI Technology
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-relaxed">
            Exploring how artificial intelligence is engineered, deployed, and
            governed in modern digital products.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="Beyond the Buzzwords"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Artificial intelligence is often discussed in abstract terms, yet
            its real value emerges only when models are grounded in reliable
            data, clear objectives, and practical constraints.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Successful AI systems are not isolated algorithms. They are
            carefully engineered pipelines that integrate seamlessly with
            products, infrastructure, and human decision-making.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            This article examines the foundational principles behind effective
            and responsible AI implementations.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Core Pillars of AI Technology"
            subHeading="Key components that define reliable and impactful AI systems"
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

      {/* ENGINEERING VS GOVERNANCE */}
      <section className="py-24">
        <div className="container-custom max-w-5xl">
          <SectionHeading
            heading="Engineering Intelligence and Managing Risk"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-12">
            Building AI is as much an engineering challenge as it is a
            governance responsibility. Technical excellence must be matched
            with ethical awareness.
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

      {/* PERFORMANCE & TRUST */}
      <section className="py-24 bg-[var(--color-background-soft)]">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            heading="Accuracy, Trust, and Reliability"
            isLine
          />

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Model accuracy alone does not define success. Reliability,
            interpretability, and resilience under real-world conditions are
            equally critical.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)] mb-6">
            Continuous monitoring helps detect data drift, bias, and performance
            degradation before they impact users or business outcomes.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            Trust in AI systems is built through transparency, accountability,
            and consistent performance over time.
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-28 bg-[var(--color-white)]">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--color-quaternary)]">
            Building AI That Deserves Trust
          </h2>

          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            The future of AI belongs to systems that are not only powerful, but
            also responsible, explainable, and aligned with human values.
          </p>
        </div>
      </section>
    </>
  );
}
