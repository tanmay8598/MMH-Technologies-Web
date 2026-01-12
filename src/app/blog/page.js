

import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import { FaMobileAlt, FaLaptopCode, FaBrain, FaLock } from "react-icons/fa";

// app/blog/page.js
export const metadata = {
    title: "MMH Technologies Blog | Behind the Code",
    description:
        "Explore expert insights from MMH Technologies for Qatar and global audiences on web development, mobile apps, AI technology, data security, and modern software engineering practices.",

    keywords: [
        "technology blog",
        "web development blog",
        "mobile app development blog",
        "AI technology blog",
        "software engineering insights",
        "MMH Technologies blog",
        "Qatar",
    ],

    openGraph: {
        title: "MMH Technologies Blog | Behind the Code",
        description:
            "Explore expert insights from MMH Technologies for Qatar and global audiences on web development, mobile apps, AI technology, data security, and modern software engineering practices.",
        url: "https://mmhtechnologies.com/blog",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-blog.webp", // add this image
        //         width: 1200,
        //         height: 630,
        //         alt: "MMH Technologies Tech Blog",
        //     },
        // ],
        type: "website",
    },
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
    // twitter: {
    //     card: "summary_large_image",
    //     title: "MMH Technologies Blog",
    //     description:
    //         "Insights, trends and best practices in web, mobile and AI software development.",
    //     images: ["/images/og-blog.webp"],
    // },
};


export default function BlogPage() {
    const categories = [
        {
            name: "Web Development",
            icon: FaLaptopCode,
            description: "Latest in frontend and backend tech.",
            href: "/blog/web-development"
        },
        {
            name: "Mobile App Development",
            icon: FaMobileAlt,
            description: "Insights and trends in the mobile world.",
            href: "/blog/mobile-app-development"
        },
        {
            name: "AI Technology",
            icon: FaBrain,
            description: "Exploring the future of artificial intelligence.",
            href: "/blog/ai-technology"
        },
        {
            name: "Data Security",
            icon: FaLock,
            description: "Keep your data safe in a digital age.",
            href: "/blog/data-security"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <PageHero
                heading="Behind the Code"
                subHeading="Tools that shape how we build software"
                description="Exploring the technologies that help us move faster, stay secure, and scale products with confidence."
            />

            <div className="container-custom pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map(cat => (
                        <Card key={cat.name} {...cat} heading={cat.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}
