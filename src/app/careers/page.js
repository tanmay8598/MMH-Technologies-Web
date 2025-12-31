


export default function CareersPage() {
    const features = [
        { title: "Remote Work", description: "Work from anywhere in the world." },
        { title: "Competitive Salary", description: "We value top talent." },
        { title: "Growth Opportunities", description: "Learn and grow with us." },
    ];

    const benefits = [
        { title: "Health Benefits", description: "Comprehensive health coverage." },
        { title: "Learning Budget", description: "Stipend for courses and conferences." },
    ];

    return (
        <DetailPage
            title="Careers"
            subtitle="Join Our Team"
            description="We are always looking for talented individuals to join our growing team."
            features={features}
            benefits={benefits}
        />
    );
}
