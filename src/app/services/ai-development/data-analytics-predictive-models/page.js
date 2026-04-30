import BenefitCard from "@/components/Cards/BenefitCard";
import Card from "@/components/Cards/Card";
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaChartBar, FaChartLine, FaDatabase, FaRocket, FaShieldAlt, FaUsers, FaLayerGroup, FaCogs } from "react-icons/fa";
import { SiMicrosoftpowerbi, SiTableau } from "react-icons/si";

export const metadata = {
  alternates: { canonical: "/services/ai-development/data-analytics-predictive-models" },
  title: "Data Analytics & Predictive Models in Qatar | MMH Technologies",
  description:
    "Leverage data analytics and predictive modeling with MMH Technologies for Qatar and global clients using Power BI, Tableau, and advanced analytics. Unlock insights, optimize processes, and make smarter, data-driven business decisions.",
  keywords: [
    "Data Analytics",
    "Predictive Modeling",
    "Business Intelligence",
    "Power BI",
    "Tableau",
    "Data Visualization",
    "Data-Driven Decisions",
    "Analytics Dashboards",
    "ETL Pipelines",
    "Advanced Analytics",
    "Qatar",
  ],
  openGraph: {
    title: "Data Analytics & Predictive Models in Qatar | MMH Technologies",
    description:
      "Leverage data analytics and predictive modeling with MMH Technologies for Qatar and global clients using Power BI, Tableau, and advanced analytics. Unlock insights, optimize processes, and make smarter, data-driven business decisions.",
    url: "https://www.mmhtechnologies.qa/services/ai-development/data-analytics-predictive-models",
    siteName: "MMH Technologies",
    type: "website",
    // images: [
    //   {
    //     url: "/images/og-data-analytics.webp",
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Data Analytics & Predictive Models | MMH Technologies",
  //   description:
  //     "Leverage data analytics and predictive modeling with Power BI, Tableau, and advanced analytics. Unlock insights, optimize processes, and make smarter, data-driven business decisions with MMH Technologies.",
  //   images: ["/images/og-data-analytics.webp"],
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


export default function DataAnalyticsPage() {
  const technologies = [
    { icon: FaChartBar, name: "Power BI", description: "Visualize and analyze data with interactive dashboards and reports." },
    { icon: SiTableau, name: "Tableau", description: "Transform raw data into actionable insights using Tableau’s analytics platform." },
    { icon: FaDatabase, name: "Data Management", description: "Collect, preprocess, and store data efficiently for analytics and predictive modeling." },
  ];

  const features = [
    { icon: FaRocket, title: "Predictive Modeling", description: "Forecast trends and behaviors using advanced statistical and ML techniques." },
    { icon: FaLayerGroup, title: "Custom Dashboards", description: "Interactive dashboards tailored to business KPIs and metrics." },
    { icon: FaShieldAlt, title: "Data Security & Compliance", description: "Ensure sensitive data is processed securely and complies with regulations." },
    { icon: FaUsers, title: "Actionable Insights", description: "Translate analytics into business strategies for informed decision-making." },
    { icon: FaCogs, title: "ETL & Data Pipelines", description: "Streamline data processing from raw sources to analytical-ready datasets." },
    { icon: FaChartLine, title: "Advanced Analytics", description: "Use descriptive, diagnostic, predictive, and prescriptive analytics to optimize outcomes." },
  ];

  const benefits = [
    "Informed Decision Making",
    "Predictive Business Insights",
    "Optimized Operations & Resources",
    "Data-Driven Strategies",
    "Enhanced Customer Experience",
    "Reduced Risks & Errors",
    "Scalable & Future-Ready Analytics",
    "Competitive Advantage",
  ];

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading="Data Analytics & Predictive Models"
        subHeading="Transform Data into Actionable Insights"
        description="Leverage data analytics and predictive modeling to make smarter, faster, and data-driven business decisions"
      />

      <div className="container-custom pb-20">
        <SectionHeading
          heading="Why Data Analytics & Predictive Models Matter"
          subHeading="Unlock insights from data to drive business growth, optimize processes, and anticipate trends."
        />

        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} icon={tech.icon} heading={tech.name} description={tech.description} isSmallHeading />
          ))}
        </div>
      </div>

      <div className="bg-(--color-white)">
        <div className="container-custom py-10 pb-20">
          <SectionHeading heading="Our Data Analytics Features" subHeading="Actionable insights, predictive models, and interactive dashboards" />
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} icon={feature.icon} heading={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom w-full pb-20">
        <SectionHeading heading="Benefits of Data Analytics & Predictive Models" subHeading="Drive smarter business decisions and optimize outcomes with data" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} text={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
