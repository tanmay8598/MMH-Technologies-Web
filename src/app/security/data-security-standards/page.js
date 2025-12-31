
import DetailPage from "@/components/UI/DetailsPage";

export default function DataSecurityStandardsPage() {
    const features = [
        { title: "Encryption", description: "AES-256 bit encryption for data at rest and in transit." },
        { title: "Access Control", description: "Strict role-based access control (RBAC)." },
        { title: "Regular Audits", description: "Periodic security assessments." },
    ];

    const benefits = [
        { title: "Data Integrity", description: "Ensure your data remains unaltered." },
        { title: "Confidentiality", description: "Keep sensitive information private." },
    ];

    return (
        <DetailPage
            title="Data Security Standards"
            subtitle="Fortified Data Protection"
            description="We implement rigorous security standards to keep your data safe."
            features={features}
            benefits={benefits}
        />
    );
}
