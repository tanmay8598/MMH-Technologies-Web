import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaReact, FaMobileAlt, FaRocket, FaPalette, FaLayerGroup, FaShieldAlt, FaUsers, FaCode } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

export const metadata = {
  title: "Cross-Platform App Development Services in Qatar | React Native & Flutter",
  description:
    "Build high-quality cross-platform mobile apps with MMH Technologies for Qatar and global clients using React Native and Flutter. Single codebase solutions for iOS and Android with native-like performance, security, and scalability.",
  keywords: [
    "cross-platform app development",
    "React Native app development",
    "Flutter app development",
    "iOS and Android app development",
    "mobile app development services",
    "single codebase apps",
    "custom cross-platform apps",
    "cost-effective mobile development",
    "Qatar",
  ],
  openGraph: {
    title: "Cross-Platform App Development Services in Qatar | React Native & Flutter",
    description:
      "Build high-quality cross-platform mobile apps with MMH Technologies for Qatar and global clients using React Native and Flutter. Single codebase solutions for iOS and Android with native-like performance, security, and scalability.",
    url: "https://www.mmhtechnologies.qa/services/mobile-app-development/cross-platform-app-development",
    siteName: "MMH Technologies",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Cross-Platform App Development Services",
  //   description:
  //     "Reach more users faster with React Native and Flutter apps built from a single codebase.",
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


export default function CrossPlatformDevelopmentPage() {
  const technologies = [
    { icon: FaReact, name: "React Native", description: "Build high-quality cross-platform apps with a shared codebase for iOS and Android." },
    { icon: SiFlutter, name: "Flutter", description: "Develop expressive UIs and native-like apps using Flutter’s single codebase approach." },
    { icon: FaMobileAlt, name: "Mobile APIs", description: "Integrate device features like camera, push notifications, GPS, and sensors for full functionality." },
  ];

  const features = [
    { icon: FaRocket, title: "Fast Development", description: "Single codebase enables faster app delivery for multiple platforms." },
    { icon: FaPalette, title: "Consistent UI/UX", description: "Uniform design and experience across Android and iOS devices." },
    { icon: FaLayerGroup, title: "Reusable Components", description: "Maintainable component-based architecture for scalable cross-platform apps." },
    { icon: FaShieldAlt, title: "Secure Apps", description: "Implement authentication, encryption, and secure storage across platforms." },
    { icon: FaUsers, title: "Accessibility", description: "Ensure usability and accessibility for all users across devices." },
    { icon: FaCode, title: "Modern Code Practices", description: "Clean, maintainable, and future-proof codebase for long-term success." },
  ];

  const benefits = [
    "Single Codebase for iOS & Android",
    "Faster Time-to-Market",
    "Cost-Effective Development",
    "Native-Like User Experience",
    "Consistent Design Across Platforms",
    "Easier Maintenance & Updates",
    "Cross-Platform Scalability",
    "Enhanced User Engagement",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="Cross-Platform App Development"
        subHeading="One Codebase. Multiple Platforms."
        description="Delivering high-quality apps on iOS and Android with a single development effort"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why Cross-Platform Development Matters"
          subHeading="Reach more users faster with cost-effective, high-performing apps for multiple platforms."
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
            heading="Our Cross-Platform App Features"
            subHeading="Delivering scalable, maintainable, and native-like experiences on multiple platforms"
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
          heading="Benefits of Cross-Platform App Development"
          subHeading="Maximize reach and efficiency with apps that work seamlessly across devices"
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
