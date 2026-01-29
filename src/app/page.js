import CTACard from "@/components/Cards/CTACard";
import Customers from "@/components/Home/Customers";
import Hero from "@/components/Home/Hero";
import MessageFromCEO from "@/components/Home/MessageFromCEO";
import Products from "@/components/Home/Products";
import Services from "@/components/Home/Services";

export const metadata = {
  title: "MMH Techologies | Web development & App development",
  description:
    "MMH Technologies provides expert web development, mobile app development, UI/UX design, AI solutions, cloud & DevOps services for modern businesses.",

  keywords: [
    "web development company",
    "mobile app development",
    "software development company",
    "UI UX design",
    "AI development",
    "cloud and devops services",
    "MMH Technologies",
    "Qatar",
  ],

  openGraph: {
    title: "MMH Techologies | Web development & App development",
    description:
      "We build scalable web, mobile and AI-driven solutions for startups and enterprises worldwide.",
    url: "https://mmhtechnologies.com",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-home.webp", 
    //     width: 1200,
    //     height: 630,
    //     alt: "MMH Technologies",
    //   },
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
  //   card: "summary_large_image",
  //   title: "MMH Technologies | Web & App Development",
  //   description:
  //     "Industry-leading web, mobile app & software development company delivering innovative digital solutions.",
  // },
};



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans ">
      {/* pt-32 pb-15  */}
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <Hero />
        <Services />
        <Products />
        <Customers />
        <MessageFromCEO />
        <CTACard />
      </main>
    </div>
  );
}
