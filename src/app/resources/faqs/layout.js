export const metadata = {
  alternates: { canonical: "/resources/faqs" },
    title: "FAQs | Security, Compliance & App Development Questions",
    description:
        "Find answers to frequently asked questions for Qatar-based and global users about application security, GDPR compliance, ISO standards, secure APIs, and mobile app development best practices.",
    keywords: [
        "security FAQs",
        "GDPR compliance questions",
        "ISO 27001 FAQ",
        "application security FAQ",
        "secure API development",
        "mobile app security questions",
        "compliance FAQs",
        "Qatar",
    ],
    openGraph: {
        title: "FAQs | Security, Compliance & App Development Questions",
        description:
            "Find answers to frequently asked questions for Qatar-based and global users about application security, GDPR compliance, ISO standards, secure APIs, and mobile app development best practices.",
        url: "https://www.mmhtechnologies.qa/faqs",
        siteName: "MMH Technologies",
        type: "website",
    },
    // twitter: {
    //     card: "summary",
    //     title: "Security & Compliance FAQs",
    //     description:
    //         "Answers to common questions about GDPR, ISO compliance, app security, and APIs.",
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

export default function FAQsLayout({ children }) {
    return children;
}
