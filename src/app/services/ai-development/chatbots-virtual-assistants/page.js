import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaRobot, FaComments, FaUsers, FaRocket, FaShieldAlt, FaLayerGroup, FaCogs } from "react-icons/fa";
import { SiDialogflow, SiRasa } from "react-icons/si";

export default function ChatbotsPage() {
  const technologies = [
    { icon: SiDialogflow, name: "Dialogflow", description: "Design conversational interfaces for websites, apps, and messaging platforms." },
    { icon: SiRasa, name: "Rasa", description: "Open-source framework for building intelligent chatbots and virtual assistants." },
    { icon: FaRobot, name: "AI & NLP", description: "Leverage natural language processing to understand and respond to users effectively." },
  ];

  const features = [
    { icon: FaRocket, title: "24/7 Automation", description: "Provide instant responses and assistance to users around the clock." },
    { icon: FaLayerGroup, title: "Multi-Platform Integration", description: "Deploy chatbots across web, mobile, and social media channels." },
    { icon: FaShieldAlt, title: "Secure Interactions", description: "Protect user data and ensure secure communication." },
    { icon: FaUsers, title: "User Engagement", description: "Enhance customer interaction and satisfaction with intelligent assistants." },
    { icon: FaCogs, title: "Custom Workflows", description: "Tailor conversation flows to meet specific business requirements." },
    { icon: FaComments, title: "Conversational Analytics", description: "Track performance and improve chatbot interactions over time." },
  ];

  const benefits = [
    "Improved Customer Support",
    "Reduced Response Times",
    "Increased User Engagement",
    "24/7 Availability",
    "Cost-Effective Automation",
    "Scalable Solutions",
    "Personalized User Experience",
    "Data-Driven Insights",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="Chatbots & Virtual Assistants"
        subHeading="Intelligent Conversations, Anytime"
        description="Build AI-powered chatbots and virtual assistants to engage users, automate support, and drive business efficiency"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why Chatbots & Virtual Assistants Matter"
          subHeading="Enhance customer experience and reduce operational overhead with AI-driven conversation solutions."
        />

        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} />
          ))}
        </div>
      </div>

      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading heading="Our Chatbot Features" subHeading="Intelligent, secure, and user-friendly chatbot solutions" />
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom pb-20">
        <SectionHeading heading="Benefits of Chatbots & Virtual Assistants" subHeading="Deliver smarter customer interactions and 24/7 engagement" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} text={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
