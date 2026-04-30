import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaApple, FaSwift, FaCode, FaRocket, FaPalette, FaLayerGroup, FaShieldAlt, FaUsers } from "react-icons/fa";

export const metadata = {
  alternates: { canonical: "/services/mobile-app-development/ios-app-development" },
  title: "iOS App Development Services in Qatar | Native Swift & SwiftUI Apps",
  description:
    "Professional iOS app development services with MMH Technologies for Qatar and global clients using Swift, SwiftUI, and native Apple technologies. Build secure, high-performance, and scalable iOS applications with stunning UI/UX.",
  keywords: [
    "iOS app development",
    "Swift app development",
    "SwiftUI development",
    "native iOS apps",
    "Apple app development",
    "iPhone app development company",
    "secure iOS applications",
    "custom iOS development services",
    "Qatar",
  ],
  openGraph: {
    title: "iOS App Development Services in Qatar | Native Swift & SwiftUI Apps",
    description:
      "Professional iOS app development services with MMH Technologies for Qatar and global clients using Swift, SwiftUI, and native Apple technologies. Build secure, high-performance, and scalable iOS applications with stunning UI/UX.",
    url: "https://www.mmhtechnologies.qa/services/mobile-app-development/ios-app-development",
    siteName: "MMH Technologies",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Native iOS App Development Services",
  //   description:
  //     "Build scalable, secure, and high-performing iOS apps using Swift and Apple’s latest technologies.",
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


export default function IOSDevelopmentPage() {
  const technologies = [
    { icon: FaApple, name: "Xcode & Swift", description: "Build native iOS apps with Swift and Xcode for optimal performance and user experience." },
    { icon: FaSwift, name: "SwiftUI", description: "Design modern, reactive, and maintainable UIs with SwiftUI for seamless iOS interfaces." },
    { icon: FaCode, name: "Core APIs", description: "Integrate iOS core APIs like Core Data, Push Notifications, and CloudKit for advanced functionality." },
  ];

  const features = [
    { icon: FaRocket, title: "High Performance", description: "Optimized iOS applications with smooth animations and fast load times." },
    { icon: FaPalette, title: "Modern UI/UX", description: "Beautiful and intuitive designs following Apple's Human Interface Guidelines." },
    { icon: FaLayerGroup, title: "Component Architecture", description: "Reusable SwiftUI components for maintainable and scalable apps." },
    { icon: FaShieldAlt, title: "Security", description: "Built-in app security with encryption, secure storage, and authentication." },
    { icon: FaUsers, title: "Accessibility", description: "WCAG compliant apps to ensure usability for all users." },
  ];

  const benefits = [
    "Native iOS Experience",
    "Fast & Smooth Performance",
    "Optimized for Apple Devices",
    "Secure & Reliable",
    "Scalable Architecture",
    "Reduced Maintenance Costs",
    "Enhanced User Engagement",
    "Future-Proof iOS Solutions",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="iOS App Development Services"
        subHeading="Powerful, Native iOS Experiences"
        description="Crafting high-performance iOS applications with stunning UI/UX and robust architecture"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why iOS App Development Matters"
          subHeading="Deliver exceptional mobile experiences with secure, high-performance native iOS apps."
        />

        {/* Technologies Section */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading
            heading="Our iOS App Features"
            subHeading="Comprehensive solutions for engaging and high-performing iOS apps"
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
          heading="Benefits of Professional iOS App Development"
          subHeading="Invest in quality iOS apps that drive engagement and loyalty"
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
