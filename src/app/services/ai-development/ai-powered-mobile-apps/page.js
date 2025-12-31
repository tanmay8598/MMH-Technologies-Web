import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaRobot, FaMobileAlt, FaBrain, FaRocket, FaPalette, FaLayerGroup, FaShieldAlt, FaUsers } from "react-icons/fa";

export default function AIMobileAppsPage() {
  const technologies = [
    { icon: FaRobot, name: "TensorFlow & PyTorch", description: "Integrate AI models into mobile apps for predictive and intelligent features." },
    { icon: FaMobileAlt, name: "Mobile AI SDKs", description: "Use mobile SDKs like Core ML, ML Kit, and ONNX for on-device AI processing." },
    { icon: FaBrain, name: "Custom AI Models", description: "Design and deploy custom AI models tailored to your app’s needs." },
  ];

  const features = [
    { icon: FaRocket, title: "Smart Features", description: "Integrate recommendation engines, personalization, and predictive capabilities." },
    { icon: FaPalette, title: "Intuitive UI/UX", description: "AI-enhanced interfaces for personalized and interactive experiences." },
    { icon: FaLayerGroup, title: "Scalable Architecture", description: "AI-ready backend and mobile infrastructure for large-scale usage." },
    { icon: FaShieldAlt, title: "Security & Privacy", description: "Ensure data protection while leveraging AI models." },
    { icon: FaUsers, title: "User Engagement", description: "Deliver smarter apps that adapt to user behavior and needs." },
  ];

  const benefits = [
    "Enhanced App Intelligence",
    "Personalized User Experience",
    "Predictive & Adaptive Features",
    "Increased Engagement & Retention",
    "Optimized App Performance",
    "Competitive Advantage",
    "Scalable & Future-Proof",
    "Data-Driven Insights",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="AI-Powered Mobile Apps"
        subHeading="Smart Apps. Intelligent Experiences."
        description="Integrating AI into mobile applications to create personalized, predictive, and interactive experiences"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why AI-Powered Mobile Apps Matter"
          subHeading="AI transforms mobile apps by enabling predictive features, personalization, and smarter interactions."
        />

        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} />
          ))}
        </div>
      </div>

      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading heading="Our AI Mobile App Features" subHeading="Smart, scalable, and personalized mobile app solutions" />
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom pb-20">
        <SectionHeading heading="Benefits of AI-Powered Mobile Apps" subHeading="Deliver intelligent, personalized, and high-performing applications" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} text={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
