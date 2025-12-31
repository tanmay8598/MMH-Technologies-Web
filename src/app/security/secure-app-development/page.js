
import DetailPage from "@/components/UI/DetailsPage";

export default function SecureAppDevelopmentPage() {
    const features = [
        { title: "Secure Coding Practices", description: "OWASP Top 10 mitigation." },
        { title: "Vulnerability Scanning", description: "Automated tools to find weaknesses." },
        { title: "Penetration Testing", description: "Ethical hacking to stress-test your app." },
    ];

    const benefits = [
        { title: "Bulletproof Apps", description: "Resistant to common attacks." },
        { title: "User Trust", description: "Demonstrate your commitment to security." },
    ];

    return (
        <DetailPage
            title="Secure App Development"
            subtitle="Security by Design"
            description="We build security into the DNA of your application."
            features={features}
            benefits={benefits}
        />
    );
}
