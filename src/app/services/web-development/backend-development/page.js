import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaNodeJs, FaPython, FaDatabase, FaServer, FaShieldAlt, FaCogs, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";
import { SiDjango, SiSpring } from "react-icons/si";

export default function BackendDevelopmentPage() {
  const technologies = [
    {
      icon: FaNodeJs,
      name: "Node.js",
      description: "Build fast, scalable server-side applications using Node.js and its extensive ecosystem.",
    },
    {
      icon: SiDjango,
      name: "Django",
      description: "Develop secure, high-performance web applications quickly with Python's Django framework.",
    },
    {
      icon: SiSpring,
      name: "Spring Boot",
      description: "Create enterprise-grade Java backend applications with Spring Boot for robustness and scalability.",
    },
    {
      icon: FaDatabase,
      name: "Databases",
      description: "Integrate and manage relational and NoSQL databases for reliable data storage and retrieval.",
    },
  ];

  const features = [
    {
      icon: FaRocket,
      title: "High Performance",
      description: "Optimized backend systems ensuring minimal latency, fast processing, and scalable architecture.",
    },
    {
      icon: FaCogs,
      title: "Robust APIs",
      description: "RESTful and GraphQL APIs designed for security, scalability, and seamless integration.",
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Built-in authentication, authorization, and encryption to protect sensitive data and comply with standards.",
    },
    {
      icon: FaServer,
      title: "Server & Cloud Management",
      description: "Deploy, monitor, and maintain servers and cloud infrastructure for reliable backend services.",
    },
    {
      icon: FaDatabase,
      title: "Data Management",
      description: "Efficient database schema design, optimization, and data migration for large-scale applications.",
    },
    {
      icon: FaUsers,
      title: "User Management",
      description: "Advanced user authentication, roles, and permissions for secure and scalable user handling.",
    },
  ];

  const benefits = [
    "Scalable & Reliable Systems",
    "Fast & Efficient APIs",
    "Secure Data Handling",
    "Cross-Platform Integration",
    "Easy Maintenance & Updates",
    "Reduced Downtime & Errors",
    "Optimized Resource Usage",
    "Future-Proof Architecture",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="Backend Development Services"
        subHeading="Powerful, Scalable, and Secure"
        description="Leveraging modern backend frameworks and technologies to build reliable, high-performance applications"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why Backend Development Matters"
          subHeading="The backbone of your application. Strong backend ensures your business logic is reliable, scalable, and secure, enabling smooth experiences for your users."
        />

        {/* Technologies Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading
            heading="Our Backend Solutions"
            subHeading="Comprehensive backend services tailored for performance, security, and scalability"
          />

          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-custom w-full pb-20">

        <SectionHeading
          heading="Benefits of Professional Backend Development"
          subHeading="Invest in a strong backend and empower your applications for growth and reliability"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} text={benefit} />
          ))}
        </div>

      </div>
    </div>
  );
}
