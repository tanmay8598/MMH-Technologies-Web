import CTACard from "@/components/Cards/CTACard";
import Customers from "@/components/Home/Customers";
import Services from "@/components/Home/Services";
import PageHero from "@/components/UI/PageHero";


export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-6">
            <PageHero 
                heading={"Services"}
                subHeading={"We provide a wide range of Services"}
                description={"Credible Source for Interactive & Affordable Software Solutions"}
            />
            <Services heading="How can we help you?" />
            <Customers />
            <CTACard />
        </div>
    )
}