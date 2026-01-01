import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaBrain, FaServer, FaDatabase, FaRocket, FaShieldAlt, FaUsers, FaLayerGroup } from "react-icons/fa";
import { SiTensorflow, SiScikitlearn } from "react-icons/si";

export default function MachineLearningPage() {
  const technologies = [
    { icon: SiTensorflow, name: "TensorFlow", description: "Develop scalable ML models for predictions, classification, and analysis." },
    { icon: SiScikitlearn, name: "Scikit-Learn", description: "Implement regression, classification, and clustering algorithms efficiently." },
    { icon: FaDatabase, name: "Data Pipelines", description: "Collect, preprocess, and manage large datasets for training ML models." },
    { icon: FaServer, name: "Model Deployment", description: "Deploy machine learning models to cloud or on-premise systems for production use." },
  ];

  const features = [
    { icon: FaRocket, title: "Predictive Analytics", description: "Make informed business decisions using predictive models." },
    { icon: FaLayerGroup, title: "Custom ML Models", description: "Tailor algorithms to your specific business requirements." },
    { icon: FaShieldAlt, title: "Secure Data Handling", description: "Process sensitive data securely while training models." },
    { icon: FaUsers, title: "User-Centric Models", description: "Models designed to improve user engagement and experience." },
    { icon: FaBrain, title: "Advanced AI Integration", description: "Integrate machine learning seamlessly with your applications." },
  ];

  const benefits = [
    "Accurate Predictions & Insights",
    "Optimized Business Processes",
    "Data-Driven Decision Making",
    "Scalable & Maintainable Models",
    "Reduced Operational Costs",
    "Enhanced User Experience",
    "Competitive Advantage",
    "Future-Proof AI Solutions",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="Machine Learning Solutions"
        subHeading="Turning Data Into Intelligent Decisions"
        description="Leveraging machine learning to provide predictive, scalable, and actionable insights"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why Machine Learning Solutions Matter"
          subHeading="Machine learning enables data-driven decisions, automation, and predictive capabilities for modern businesses."
        />

        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
          ))}
        </div>
      </div>

      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading heading="Our Machine Learning Features" subHeading="Custom ML models, predictive analytics, and secure data pipelines" />
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom w-full pb-20">
        <SectionHeading heading="Benefits of Machine Learning Solutions" subHeading="Unlock the power of data with scalable and intelligent ML solutions" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} text={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
