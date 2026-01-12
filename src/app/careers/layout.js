export const metadata = {
  title: "Careers at MMH Technologies in Qatar | Join Our Team",
  description:
    "Explore current job openings, company culture, and growth opportunities at MMH Technologies in Qatar and globally. Join us to build innovative products and grow your career.",
  keywords: [
    "MMH Technologies Careers",
    "Jobs at MMH Technologies",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Tech Jobs",
    "Company Culture",
    "Qatar",
  ],
  openGraph: {
    title: "Careers at MMH Technologies in Qatar | Join Our Team",
    description:
      "Explore current job openings, company culture, and growth opportunities at MMH Technologies in Qatar and globally. Join us to build innovative products and grow your career.",
    url: "https://www.mmhtechnologies.com/careers",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-careers.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Careers at MMH Technologies | Join Our Team",
  //   description:
  //     "Explore current job openings, company culture, and growth opportunities at MMH Technologies. Join us to build innovative products and grow your career.",
  //   images: ["/images/og-careers.webp"],
  //   creator: "@MMHTech",
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

export default function CareersLayout({ children }) {
    return children;
}
