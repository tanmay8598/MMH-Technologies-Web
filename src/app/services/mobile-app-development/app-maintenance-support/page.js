import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaBug, FaTools, FaServer, FaRocket, FaShieldAlt, FaUsers, FaSyncAlt, FaCloud } from "react-icons/fa";

export const metadata = {
  title: "App Maintenance & Support Services in Qatar | Secure, Reliable & Scalable Apps",
  description:
    "Professional app maintenance and support services with MMH Technologies for Qatar and global clients, including bug fixes, performance monitoring, security updates, CI/CD, and cloud monitoring to keep your apps running smoothly.",
  keywords: [
    "app maintenance services",
    "application support services",
    "mobile app maintenance",
    "software maintenance services",
    "bug fixing services",
    "app performance monitoring",
    "security updates and patches",
    "CI/CD app maintenance",
    "cloud monitoring services",
    "Qatar",
  ],
  openGraph: {
    title: "App Maintenance & Support Services in Qatar | Secure, Reliable & Scalable Apps",
    description:
      "Professional app maintenance and support services with MMH Technologies for Qatar and global clients, including bug fixes, performance monitoring, security updates, CI/CD, and cloud monitoring to keep your apps running smoothly.",
    url: "https://www.mmhtechnologies.qa/services/mobile-app-development/app-maintenance-support",
    siteName: "MMH Technologies",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "App Maintenance & Support",
  //   description:
  //     "Ongoing app support, security updates, bug fixes, and performance optimization for long-term success.",
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


export default function AppMaintenancePage() {
  const technologies = [
    { icon: FaBug, name: "Bug Tracking", description: "Identify, track, and resolve app issues quickly to ensure smooth user experience." },
    { icon: FaTools, name: "CI/CD", description: "Automated build, test, and deployment pipelines for continuous app updates." },
    { icon: FaServer, name: "Server Monitoring", description: "Monitor backend services, databases, and APIs for optimal performance." },
    { icon: FaCloud, name: "Cloud Services", description: "Integrate cloud monitoring, analytics, and storage for app reliability." },
  ];

  const features = [
    { icon: FaRocket, title: "Performance Monitoring", description: "Ensure fast load times, smooth interactions, and optimal resource usage." },
    { icon: FaShieldAlt, title: "Security & Updates", description: "Apply security patches and updates to protect user data and app integrity." },
    { icon: FaSyncAlt, title: "Version Control & Deployment", description: "Seamless updates with minimal downtime and efficient release management." },
    { icon: FaUsers, title: "User Support", description: "Provide ongoing support and troubleshooting for users and stakeholders." },
  ];

  const benefits = [
    "Reduced Downtime & Errors",
    "Improved App Performance",
    "Enhanced Security & Compliance",
    "Faster Bug Fixes & Updates",
    "Better User Retention",
    "Optimized Resource Usage",
    "Reliable & Scalable Apps",
    "Peace of Mind for Businesses",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="App Maintenance & Support"
        subHeading="Keeping Your Apps Secure, Updated, and High-Performing"
        description="Ongoing support to ensure your apps remain reliable, secure, and optimized for users"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why App Maintenance Matters"
          subHeading="Regular maintenance ensures app stability, security, and optimal performance for long-term success."
        />

        {/* Technologies Section */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading
            heading="Our App Maintenance Features"
            subHeading="Comprehensive support to ensure app reliability, security, and continuous improvement"
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
          heading="Benefits of Professional App Maintenance"
          subHeading="Keep your apps performing at their best and users happy with ongoing support"
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
