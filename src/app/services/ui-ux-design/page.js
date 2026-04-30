import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaFigma, FaPalette, FaUsers, FaLightbulb, FaRocket, FaLayerGroup, FaShieldAlt } from "react-icons/fa";
import { SiAdobe, SiSketch } from "react-icons/si";

export const metadata = {
  alternates: { canonical: "/services/ui-ux-design" },
  title: "UI/UX Design Services in Qatar | MMH Technologies",
  description:
    "Craft intuitive, user-centered UI/UX designs with MMH Technologies for Qatar and global clients. Create engaging, accessible, and visually stunning interfaces for web and mobile apps to delight users and drive conversions.",
  keywords: [
    "UI Design",
    "UX Design",
    "User Interface",
    "User Experience",
    "Wireframes",
    "Prototypes",
    "Figma",
    "Sketch",
    "Adobe XD",
    "Interaction Design",
    "MMH Technologies",
    "Qatar",
  ],
  openGraph: {
    title: "UI/UX Design Services in Qatar | MMH Technologies",
    description:
      "Craft intuitive, user-centered UI/UX designs with MMH Technologies for Qatar and global clients. Create engaging, accessible, and visually stunning interfaces for web and mobile apps to delight users and drive conversions.",
    url: "https://www.mmhtechnologies.qa/services/ui-ux-design",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-ui-ux-design.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "UI/UX Design Services | MMH Technologies",
  //   description:
  //     "Craft intuitive, user-centered UI/UX designs with MMH Technologies. Create engaging, accessible, and visually stunning interfaces for web and mobile apps to delight users and drive conversions.",
  //   images: ["/images/og-ui-ux-design.webp"],
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


export default function UIDesignPage() {
  // Tools/Technologies
  const tools = [
    { icon: FaFigma, name: "Figma", description: "Collaborative design platform for wireframes, prototypes, and UI mockups." },
    { icon: SiSketch, name: "Sketch", description: "Design precise interfaces and interactive prototypes with a robust vector-based tool." },
    { icon: SiAdobe, name: "Adobe XD", description: "Create visually stunning designs and interactive prototypes with Adobe XD." },
    { icon: FaPalette, name: "Color & Typography", description: "Expertly choose color schemes, fonts, and visual hierarchies for cohesive designs." },
  ];

  // Features / What we deliver
  const features = [
    { icon: FaRocket, title: "User-Centered Design", description: "Focus on the needs, behaviors, and goals of users for intuitive and engaging interfaces." },
    { icon: FaLightbulb, title: "Innovative Prototyping", description: "Rapidly create interactive prototypes to test ideas and gather feedback." },
    { icon: FaLayerGroup, title: "Component-Based UI", description: "Modular design system for consistency, scalability, and easy iteration." },
    { icon: FaShieldAlt, title: "Accessibility & Compliance", description: "Design interfaces that are inclusive and WCAG compliant for all users." },
    { icon: FaUsers, title: "Usability Testing", description: "Evaluate design effectiveness through testing, feedback, and iterations." },
  ];

  // Benefits
  const benefits = [
    "Intuitive & Engaging Interfaces",
    "Consistent Branding Across Platforms",
    "Enhanced User Engagement",
    "Faster Design-to-Development Handoff",
    "Improved Conversion Rates",
    "Inclusive & Accessible Design",
    "Reduced Development Rework",
    "Future-Proof Design Systems",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="UI/UX Design Services"
        subHeading="Designs that Delight and Convert"
        description="Crafting intuitive, user-centered interfaces that drive engagement and enhance digital experiences"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why UI/UX Design Matters"
          subHeading="Great design creates memorable experiences, fosters trust, and drives business growth. Our UI/UX services combine aesthetics with usability to delight your users."
        />

        {/* Tools Section */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} icon={tool.icon} heading={tool.name} description={tool.description} isSmallHeading />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading
            heading="Our UI/UX Design Features"
            subHeading="Delivering visually stunning and user-friendly designs for web and mobile applications"
          />

          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-custom pb-20">
        <SectionHeading
          heading="Benefits of Professional UI/UX Design"
          subHeading="Investing in quality design ensures your products are engaging, effective, and future-ready"
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
