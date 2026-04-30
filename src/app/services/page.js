import CTACard from "@/components/Cards/CTACard";
import Customers from "@/components/Home/Customers";
import Services from "@/components/Home/Services";
import PageHero from "@/components/UI/PageHero";

export const metadata = {
  alternates: { canonical: "/services" },
    title: "Our Services in Qatar | MMH Technologies",
    description:
        "Explore MMH Technologies range of services for Qatar and global clients, including software development, secure app development, compliance solutions, and industry-specific digital products. We deliver interactive, scalable, and affordable solutions tailored to your business needs.",
    keywords: [
        "MMH Technologies",
        "Software Development Services",
        "Secure App Development",
        "Compliance Solutions",
        "Industry-Specific Software",
        "Digital Transformation",
        "Technology Solutions",
        "Custom Software",
        "Web Development",
        "Mobile App Development",
        "Qatar",
    ],
    openGraph: {
        title: "Our Services in Qatar | MMH Technologies",
        description:
            "Explore MMH Technologies range of services for Qatar and global clients, including software development, secure app development, compliance solutions, and industry-specific digital products. We deliver interactive, scalable, and affordable solutions tailored to your business needs.",
        url: "https://www.mmhtechnologies.qa/services",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-services.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Our Services | MMH Technologies",
    //     description:
    //         "Explore MMH Technologies’ range of services including software development, secure app development, compliance solutions, and industry-specific digital products. We deliver interactive, scalable, and affordable solutions tailored to your business needs.",
    //     images: ["/images/og-services.webp"],
    //     creator: "@MMHTech",
    // },
};



export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading={"Services"}
                subHeading={"We provide a wide range of Services"}
                description={"Credible Source for Interactive & Affordable Software Solutions"}
            />
            <Services heading="How can we help you?" />
            <Customers />
            <CTACard />
        </div>
    )
}