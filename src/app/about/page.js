import AboutCard from "@/components/About/AboutCard";
import ProcessCard from "@/components/About/ProcessCard";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import CTACard from "@/components/Cards/CTACard";
import PageHero from "@/components/UI/PageHero";

export default function AboutPage() {

    const processes = [
        { id: "01", name: "Discover", description: "Before you can fix a problem, you need to know what the problem is, and what the perfect solution needs to be. We sit down with you and discover what you are currently doing, what you want to do, and who your target market is." },
        { id: "02", name: "Define", description: "The next step is to define the problem so that we are all on the same page. Depending on the problem, we will define a solution and map it out for you, step by step." },
        { id: "03", name: "Design", description: "Once we are certain that everyone is literally on the same page, we will custom design a solution for you. Depending on the requirements, that may involve designing a new website for you, or designing a social media marketing plan to suit." },
        { id: "04", name: "Develop", description: "Next step in the process is to develop the specific custom solution for you. This may mean developing a wire-frame version of your new website, or developing a step by step plan for your social media marketing." },
        { id: "05", name: "Deploy", description: "This is where everything starts to get real for you, the client. We will deploy a live version of your solution, so that you can see first-hand how the solution will work, honk the horn and ring the bells." },
        { id: "06", name: "Deliver", description: "Once we are satisfied that you are delighted with your new solution." },
    ]

    return (
        <div className="flex flex-col gap-6">
            <PageHero 
                heading={"About Us"}
                subHeading={"At MMH, we offer enterprise-level solutions by embracing the latest industry technologies."}
                description={"We are specialized to fulfil your different requirements of software development and IT services"}
            />
            <div className="container-custom">
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-10 -mt-14 md:-mt-30">
                    <AboutCard heading={"Who Are We"} >
                        <p>MMH Technologies is Canada based IT solutions company which is consistently expanding over the globe to leverage the digital transformation of your business.</p>
                    </AboutCard>
                    <AboutCard heading={"Our Mission"} >
                        <p>Consistently deliver quality work in a constructive and collaborative environment that matters.</p>
                    </AboutCard>
                    <AboutCard heading={"What We Do"} >
                        <p>Consistently deliver quality work in a constructive and collaborative environment that matters.</p>
                    </AboutCard>
                </div>
                <div className="py-20">
                    <h3 className="text-4xl text-center font-bold text-(--color-primary)">Our 6-D Process</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-15">
                        {processes.map(process => <ProcessCard key={process.id} index={process.id} heading={process.name} description={process.description} />)}
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <CTACard />
        </div>
    )
}