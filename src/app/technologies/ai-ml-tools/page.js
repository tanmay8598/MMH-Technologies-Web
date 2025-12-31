import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaRocket,
  FaDollarSign,
  FaLock
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiPython
} from "react-icons/si";
import Card from "@/components/Cards/Card";
import SectionHeading from "@/components/Blog/SectionHeading";

export default function AiMlToolsPage() {
  const tools = [
    {
      icon: SiTensorflow,
      title: "TensorFlow",
      description:
        "An industry-leading framework for building and deploying scalable machine learning and deep learning models."
    },
    {
      icon: SiPytorch,
      title: "PyTorch",
      description:
        "A flexible deep learning framework favored for research, experimentation, and production-grade AI systems."
    },
    {
      icon: SiScikitlearn,
      title: "Scikit-learn",
      description:
        "A powerful library for classical machine learning algorithms like classification, regression, and clustering."
    },
    {
      icon: SiOpenai,
      title: "OpenAI APIs",
      description:
        "Build intelligent chatbots, content generators, recommendation engines, and automation tools."
    },
    {
      icon: SiPython,
      title: "Python Ecosystem",
      description:
        "The backbone of AI development with libraries like NumPy, Pandas, Matplotlib, and more."
    }
  ];

  const features = [
    {
      icon: FaBrain,
      title: "Intelligent Decision Making",
      description:
        "AI models analyze vast datasets to uncover insights and make smarter, data-driven decisions."
    },
    {
      icon: FaRobot,
      title: "Automation at Scale",
      description:
        "Automate repetitive tasks, workflows, and customer interactions using intelligent systems."
    },
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      description:
        "Forecast trends, demand, and user behavior using machine learning models."
    },
    {
      icon: FaDatabase,
      title: "Big Data Processing",
      description:
        "Handle and analyze massive datasets efficiently with ML-powered pipelines."
    }
  ];

  const benefits = [
    {
      icon: FaRocket,
      title: "Competitive Advantage",
      description:
        "AI-powered products differentiate your business and keep you ahead of competitors."
    },
    {
      icon: FaDollarSign,
      title: "Cost Optimization",
      description:
        "Reduce operational costs by automating processes and optimizing resource usage."
    },
    {
      icon: FaCogs,
      title: "Scalable Solutions",
      description:
        "AI systems scale effortlessly as your data and user base grow."
    },
    {
      icon: FaLock,
      title: "Smarter Risk Management",
      description:
        "Detect anomalies, fraud, and risks in real-time using intelligent models."
    }
  ];

  const stats = [
    { number: "80%+", label: "Business Adoption" },
    { number: "10x", label: "Faster Insights" },
    { number: "60%", label: "Cost Reduction" },
    { number: "24/7", label: "AI Automation" }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[var(--color-background-soft)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-6 mb-6">
              <FaBrain className="text-4xl text-[var(--color-primary)]" />
              <FaRobot className="text-4xl text-[var(--color-primary)]" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI & ML Tools That{" "}
              <span className="text-[var(--color-primary)]">
                Power Intelligent Products
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Transform data into intelligence using modern AI and machine
              learning tools built for real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg text-lg font-semibold bg-[var(--color-primary)] text-[var(--color-white)] transition-all hover:scale-105 hover:shadow-lg">
                Build AI Solutions
              </button>
              <button className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                Talk to AI Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-white)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
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

      {/* Intro */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading heading="Why AI & ML Matter Today?" isLine />

            <div className="bg-[var(--color-white)] rounded-2xl shadow-lg p-8 md:p-12 border border-[var(--color-gray)]">
              <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-6">
                Artificial Intelligence and Machine Learning are no longer
                experimental technologies. They are powering real products,
                automating operations, and unlocking insights hidden deep within
                data.
              </p>
              <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed">
                From recommendation systems and chatbots to predictive analytics
                and automation, AI enables businesses to operate smarter, faster,
                and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="AI & ML Tools We Use"
            subHeading="Battle-tested technologies for intelligent systems"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                icon={tool.icon}
                heading={tool.title}
                description={tool.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            heading="Capabilities of AI-Powered Systems"
            subHeading="What intelligent solutions can do for your business"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Benefits */}
      <section className="py-20 bg-[var(--color-background-soft)]">
        <div className="container-custom">
          <SectionHeading
            heading="Business Benefits of AI & ML"
            subHeading="Turn intelligence into measurable growth"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                icon={benefit.icon}
                heading={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-white)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Intelligent Solutions?
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 leading-relaxed">
              Whether it's predictive analytics, AI automation, or intelligent
              customer experiences, we help you turn data into impact.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg text-lg font-semibold bg-[var(--color-primary)] text-[var(--color-white)] transition-all hover:scale-105 hover:shadow-lg">
                Start AI Project
              </button>
              <button className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[var(--color-primary)] text-[var(--color-primary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]">
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
