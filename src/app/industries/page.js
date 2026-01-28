import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaUniversity, FaStore, FaTruck } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

export const metadata = {
    title: "Industries We Serve in Qatar | MMH Technologies",
    description:
        "Discover how MMH Technologies delivers tailored digital solutions for Qatar and global businesses across Fintech, Healthcare, E-Commerce, Education, Logistics, and Startups, combining industry expertise with innovation.",
    keywords: [
        "MMH Technologies Industries",
        "Fintech Solutions",
        "Healthcare Software",
        "E-Commerce Development",
        "Education Technology",
        "Logistics Software",
        "Startup MVP Development",
        "Digital Solutions",
        "Domain Expertise",
        "Qatar",
    ],
    openGraph: {
        title: "Industries We Serve in Qatar | MMH Technologies",
        description:
            "Discover how MMH Technologies delivers tailored digital solutions for Qatar and global businesses across Fintech, Healthcare, E-Commerce, Education, Logistics, and Startups, combining industry expertise with innovation.",
        url: "https://www.mmhtechnologies.qa/industries",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-industries.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Industries We Serve | MMH Technologies",
    //     description:
    //         "Discover how MMH Technologies delivers tailored digital solutions across Fintech, Healthcare, E-Commerce, Education, Logistics, and Startups. Expertise and innovation for your sector.",
    //     images: ["/images/og-industries.webp"],
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


export default function IndustriesPage() {

    const industries = [
        {
            name: "Fintech",
            icon: FaUniversity,
            description: "Secure banking software, payment gateway integration, and financial data visualization dashboards built for scale."
        },
        {
            name: "Healthcare",
            icon: FaHeartPulse,
            description: "HIPAA-compliant patient portals, telemedicine platforms, and electronic health record (EHR) integrations."
        },
        {
            name: "E-Commerce",
            icon: FaStore,
            description: "High-conversion storefronts, headless commerce architectures, and smart inventory management systems."
        },
        {
            name: "Education",
            icon: IoSchoolSharp,
            description: "Interactive LMS platforms, virtual classrooms, and student engagement tools for modern educational institutions."
        },
        {
            name: "Logistics",
            icon: FaTruck,
            description: "Real-time fleet tracking dashboards, supply chain optimization software, and automated dispatching tools."
        },
        {
            name: "Startups",
            icon: MdRocketLaunch,
            description: "Rapid MVP development, scalable cloud architecture, and agile product strategy for high-growth ventures."
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading={"Industries We Serve"}
                subHeading={"We bring domain expertise to every project."}
                description={"Tailored digital solutions designed to meet the unique challenges of your sector."}
            />
            <section className="container-custom w-full text-center">
                <SectionHeading heading="Our Expertise Across Industries" subHeading="We understand that every industry operates with its own unique set of challenges and regulatory requirements. Our team combines deep domain expertise with technical excellence to tailor digital solutions that align perfectly with your sector’s specific needs, ensuring compliance, efficiency, and scalable growth." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-15">
                    {industries.map(industry => <Card key={industry.name} icon={industry.icon} heading={industry.name} description={industry.description} />)}
                </div>
            </section>
        </div>
    )
}