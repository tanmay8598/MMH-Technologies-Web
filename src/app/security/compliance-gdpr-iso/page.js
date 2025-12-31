
import DetailPage from "@/components/UI/DetailsPage";

export default function CompliancePage() {
    const features = [
        { title: "GDPR Compliance", description: "Respecting user privacy rights in Europe." },
        { title: "ISO 27001", description: "International standard for information security." },
        { title: "PIPEDA", description: "Canadian privacy law compliance." },
    ];

    const benefits = [
        { title: "Legal Safety", description: "Avoid costly fines and legal issues." },
        { title: "Global Reach", description: "Operate confidently in international markets." },
    ];

    return (
        <DetailPage
            title="Compliance (GDPR, ISO)"
            subtitle="Adhering to Global Regulations"
            description="We navigate the complex landscape of data privacy laws for you."
            features={features}
            benefits={benefits}
        />
    );
}
