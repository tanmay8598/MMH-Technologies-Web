import Image from "next/image";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import { FaApple, FaAndroid, FaMobileAlt, FaTools } from "react-icons/fa";
import SectionHeading from "@/components/UI/SectionHeading";

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

            <div className="py-6">
                <SectionHeading
                    heading="Building Mobile Apps That Users Love"
                    subHeading="From intuitive UI/UX to robust backend integration, our mobile app solutions are designed to perform flawlessly, scale effortlessly, and deliver real business value."
                />

            </div>

            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subServices.map(service => (
                        <Card key={service.name} {...service} heading={service.name} />
                    ))}
                </div>
            </div>

        </div>
    );
}
