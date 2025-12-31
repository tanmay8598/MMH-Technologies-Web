
import DetailPage from "@/components/UI/DetailsPage";

export default function FAQsPage() {
    const features = [
        { title: "General Questions", description: "Who we are and what we do." },
        { title: "Services", description: "Details about our offerings." },
        { title: "Support", description: "How to get help when you need it." },
    ];

    return (
        <DetailPage
            title="Frequently Asked Questions"
            subtitle="Here to Help"
            description="Find answers to the most common questions about our services."
            features={features}
        />
    );
}
