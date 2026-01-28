import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaBug, FaDesktop, FaRocket, FaShieldAlt, FaUsers, FaLayerGroup, FaCogs } from "react-icons/fa";
import { SiSelenium, SiJest, SiCypress } from "react-icons/si";

export const metadata = {
  title: "QA Testing Services in Qatar | MMH Technologies",
  description:
    "Ensure software quality, reliability, and performance with MMH Technologies for Qatar and global clients. Our QA testing services include automated, manual, and end-to-end testing to deliver bug-free applications and seamless user experiences.",
  keywords: [
    "QA Testing",
    "Software Testing",
    "Automation Testing",
    "Manual Testing",
    "Selenium",
    "Jest",
    "Cypress",
    "Performance Testing",
    "Regression Testing",
    "User Acceptance Testing",
    "MMH Technologies",
    "Qatar",
  ],
  openGraph: {
    title: "QA Testing Services in Qatar | MMH Technologies",
    description:
      "Ensure software quality, reliability, and performance with MMH Technologies for Qatar and global clients. Our QA testing services include automated, manual, and end-to-end testing to deliver bug-free applications and seamless user experiences.",
    url: "https://www.mmhtechnologies.qa/services/qa-testing",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-qa-testing.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "QA Testing Services | MMH Technologies",
  //   description:
  //     "Ensure software quality, reliability, and performance with MMH Technologies QA Testing services. Automated, manual, and end-to-end testing to deliver bug-free applications and seamless user experiences.",
  //   images: ["/images/og-qa-testing.webp"],
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


export default function QATestingPage() {
  // Tools / Technologies
  const tools = [
    { icon: SiSelenium, name: "Selenium", description: "Automate browser testing to ensure functionality across web applications." },
    { icon: SiJest, name: "Jest", description: "JavaScript testing framework for unit and integration testing of applications." },
    { icon: SiCypress, name: "Cypress", description: "End-to-end testing framework for reliable and fast frontend test automation." },
    { icon: FaDesktop, name: "Manual Testing", description: "Comprehensive manual testing to catch edge cases and ensure high-quality software." },
  ];

  // Features / What We Deliver
  const features = [
    { icon: FaBug, title: "Bug Detection & Reporting", description: "Identify, log, and track defects to ensure software reliability." },
    { icon: FaCogs, title: "Automated Testing", description: "Speed up testing cycles with automated scripts and frameworks for consistent results." },
    { icon: FaLayerGroup, title: "Regression Testing", description: "Verify that new changes do not break existing functionality." },
    { icon: FaShieldAlt, title: "Security & Compliance Testing", description: "Test applications for vulnerabilities and compliance with industry standards." },
    { icon: FaRocket, title: "Performance Testing", description: "Ensure applications perform optimally under expected and peak loads." },
    { icon: FaUsers, title: "User Acceptance Testing", description: "Validate that the software meets user requirements and expectations." },
  ];

  // Benefits
  const benefits = [
    "Improved Software Quality",
    "Reduced Production Bugs",
    "Faster Release Cycles",
    "Increased User Satisfaction",
    "Reliable & Stable Applications",
    "Cost-Effective Testing Solutions",
    "Compliance with Standards",
    "Future-Proof Software Quality",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="QA Testing Services"
        subHeading="Ensuring Software Quality & Reliability"
        description="Comprehensive QA services to deliver high-quality, bug-free, and reliable applications"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why QA Testing Matters"
          subHeading="Thorough testing ensures software reliability, user satisfaction, and reduces costly post-release bugs."
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
            heading="Our QA Testing Features"
            subHeading="Comprehensive testing to ensure software reliability, security, and performance"
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
          heading="Benefits of Professional QA Testing"
          subHeading="Invest in QA to deliver reliable, high-performing, and user-friendly applications"
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
