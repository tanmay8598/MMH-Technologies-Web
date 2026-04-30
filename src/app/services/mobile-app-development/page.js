import Image from "next/image";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import { FaApple, FaAndroid, FaMobileAlt, FaTools } from "react-icons/fa";
import SectionHeading from "@/components/UI/SectionHeading";

export const metadata = {
  alternates: { canonical: "/services/mobile-app-development" },
    title: "Mobile App Development Services in Qatar | MMH Technologies",
    description:
        "Build scalable and high-performance mobile applications with MMH Technologies for Qatar and global clients, covering iOS, Android, and cross-platform solutions. From native development to maintenance and support, we deliver apps users love.",
    keywords: [
        "Mobile App Development",
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Apps",
        "Flutter",
        "React Native",
        "Mobile App Maintenance",
        "App Support",
        "MMH Technologies",
        "Qatar",
    ],
    openGraph: {
        title: "Mobile App Development Services in Qatar | MMH Technologies",
        description:
            "Build scalable and high-performance mobile applications with MMH Technologies for Qatar and global clients, covering iOS, Android, and cross-platform solutions. From native development to maintenance and support, we deliver apps users love.",
        url: "https://www.mmhtechnologies.com/services/mobile-app-development",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-mobile-app-development.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Mobile App Development Services | MMH Technologies",
    //     description:
    //         "Build scalable and high-performance mobile applications for iOS, Android, and cross-platform solutions with MMH Technologies. From native development to maintenance and support, we deliver apps users love.",
    //     images: ["/images/og-mobile-app-development.webp"],
    //     creator: "@MMHTech",
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


export default function MobileAppDevelopmentPage() {
    const subServices = [
        {
            name: "iOS App Development",
            icon: FaApple,
            description: "Native iOS applications built with Swift and SwiftUI for the Apple ecosystem.",
            href: "/services/mobile-app-development/ios-app-development"
        },
        {
            name: "Android App Development",
            icon: FaAndroid,
            description: "Scalable Android apps using Kotlin and Jetpack Compose.",
            href: "/services/mobile-app-development/android-app-development"
        },
        {
            name: "Cross-Platform Apps",
            icon: FaMobileAlt,
            description: "Efficient apps that run on both iOS and Android using Flutter or React Native.",
            href: "/services/mobile-app-development/cross-platform-app-development"
        },
        {
            name: "Maintenance & Support",
            icon: FaTools,
            description: "Ongoing updates, bug fixes, and performance optimization.",
            href: "/services/mobile-app-development/app-maintenance-support"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Mobile App Development Services"
                subHeading="Powerful Apps. Seamless Experiences."
                description="Scalable mobile applications built to drive growth across iOS and Android platforms."
            />


            <div className="container-custom pb-20">
                <SectionHeading
                    heading="Building Mobile Apps That Users Love"
                    subHeading="From intuitive UI/UX to robust backend integration, our mobile app solutions are designed to perform flawlessly, scale effortlessly, and deliver real business value."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subServices.map(service => (
                        <Card key={service.name} {...service} heading={service.name} />
                    ))}
                </div>
            </div>

        </div>
    );
}
