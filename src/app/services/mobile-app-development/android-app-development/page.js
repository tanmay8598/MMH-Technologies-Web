import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaAndroid, FaJava, FaDatabase, FaRocket, FaPalette, FaLayerGroup, FaShieldAlt, FaUsers, FaCode } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";

export const metadata = {
  title: "Android App Development Services in Qatar | Secure & Scalable Android Apps",
  description:
    "Professional Android app development services with MMH Technologies for Qatar and global clients using Kotlin, Java, Firebase, and modern Android architecture. Build fast, secure, and scalable Android applications.",
  keywords: [
    "android app development services",
    "android app developers",
    "kotlin android development",
    "java android app development",
    "custom android applications",
    "android mobile app development",
    "firebase android apps",
    "secure android app development",
    "scalable android solutions",
    "Qatar",
  ],
  openGraph: {
    title: "Android App Development Services in Qatar | Secure & Scalable Android Apps",
    description:
      "Professional Android app development services with MMH Technologies for Qatar and global clients using Kotlin, Java, Firebase, and modern Android architecture. Build fast, secure, and scalable Android applications.",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Android App Development Services",
  //   description:
  //     "Custom Android apps built with Kotlin, Java, and Firebase for performance, security, and scalability.",
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


export default function AndroidDevelopmentPage() {
  const technologies = [
    { icon: FaAndroid, name: "Android Studio", description: "Official IDE for building high-performance Android apps with robust tools and debugging support." },
    { icon: SiKotlin, name: "Kotlin", description: "Modern language for Android development enabling concise, safe, and expressive code." },
    { icon: FaJava, name: "Java", description: "Reliable language for building scalable Android applications with extensive ecosystem support." },
    { icon: FaDatabase, name: "Firebase & Databases", description: "Integrate real-time databases, cloud storage, and authentication services for dynamic apps." },
  ];

  const features = [
    { icon: FaRocket, title: "High Performance", description: "Optimized for fast load times and smooth user interactions on all Android devices." },
    { icon: FaPalette, title: "Material Design UI", description: "Follow Google’s design principles to create intuitive and visually appealing interfaces." },
    { icon: FaLayerGroup, title: "Component Architecture", description: "Reusable components and modular architecture for scalable Android apps." },
    { icon: FaShieldAlt, title: "Security", description: "Secure app design with encryption, authentication, and data protection measures." },
    { icon: FaUsers, title: "Accessibility", description: "Inclusive apps ensuring usability for all users." },
    { icon: FaCode, title: "Modern Code Practices", description: "Maintainable and clean code for long-term app success." },
  ];

  const benefits = [
    "Native Android Experience",
    "Fast & Smooth Performance",
    "Optimized for Multiple Devices",
    "Secure & Reliable",
    "Scalable Architecture",
    "Reduced Maintenance Costs",
    "Enhanced User Engagement",
    "Future-Proof Android Apps",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="Android App Development Services"
        subHeading="Powerful, Native Android Experiences"
        description="Creating high-performance Android applications with intuitive UI/UX and robust architecture"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why Android App Development Matters"
          subHeading="Reach millions of users with fast, secure, and engaging Android applications."
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
            heading="Our Android App Features"
            subHeading="Comprehensive solutions for high-performing and secure Android apps"
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
          heading="Benefits of Professional Android App Development"
          subHeading="Invest in Android apps that engage users and drive growth"
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
