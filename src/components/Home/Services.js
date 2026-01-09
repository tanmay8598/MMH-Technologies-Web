import { FiEdit, FiLayout, FiSmartphone, FiUser } from "react-icons/fi";
import { IoMdCloudOutline } from "react-icons/io";
import { RxGlobe } from "react-icons/rx";
import { GiBrain } from "react-icons/gi";
import { MdOutlineChecklistRtl, MdSecurity } from "react-icons/md";

import SectionHeading from "@/components/UI/SectionHeading";
import Card from "@/components/Cards/Card";
import ScrollReveal from "../Animation/ScrollReveal";

export default function Services({
    heading = "WE SHAPE THE PERFECT SOLUTIONS",
    subHeading = "We blur the boundaries between the physical and digital world across user experience, digital marketing and software solutions.",
}) {

    const services = [
        { name: "UI/UX", href: "/services/ui-ux-design", icon: FiEdit, description: "We specialize in creating seamless and unparalleled UI/UX solutions that meet your business goals while enticing and engaging your users." },
        { name: "Web Technologies", href: "/services/web-development", icon: RxGlobe, description: "We cover the entire development cycle for web based applications. Our ability to meet your needs stem from our team of experts in React, Javascript, Nodejs, Php, Laravel, Spring boot, wordpress, woocommerce etc." },
        { name: "Mobile Apps", href: "/services/mobile-app-development", icon: FiSmartphone, description: "We are at the forefront in mobile technology creating iOS and Android apps for businesses around the globe. We hail expertise across extensive technologies i.e. React Native, Nodejs, Javascript, Java, Kotlin, Swift, Flutter." },
        { name: "AI Development", href: "/services/ai-development", icon: GiBrain, description: "Our AI development services help businesses harness machine learning, data analytics, and intelligent automation to build scalable, future-ready applications." },
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: IoMdCloudOutline, description: "Azure Kubernetes Service, Azure app services, Azure APIM, Azure frontdoor, Azure B2C, Azure Insights, Google Cloud Platform, Google App Engine, Google Compute Engine, Google Kubernetes Engine, Google Cloud Run, Google pub- sub, Google Cloud Functions, Google firebase Messaging. Dev/Ops - Infrastructure as-code with Terraform, Azure Dev/Ops, Jenkins, Docker" },
        { name: "QA & Testing", href: "/services/qa-testing", icon: MdOutlineChecklistRtl, description: "We ensure your software meets the highest quality standards through comprehensive testing, performance validation, and defect prevention across all stages of development." },
        { name: "Security Services", href: "/services/security-services", icon: MdSecurity, description: "We provide end-to-end security solutions including fire detection, CCTV surveillance, access control, intruder alarms, and automation systems, ensuring safety, compliance, and reliable protection across facilities." },
    ]

    return (
        <section id="services" className="container-custom w-full py-10 text-center">
            <SectionHeading heading={heading} subHeading={subHeading} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-15 overflow-hidden">
                {services.map((service, index) => (
                    <ScrollReveal
                        key={service.name}
                        direction={Math.floor(index / 3) % 2 === 0 ? "left" : "right"} // row-based direction
                    >
                        <Card
                            href={service.href}
                            icon={service.icon}
                            heading={service.name}
                            description={service.description}
                            className={"min-h-130 md:min-h-170 xl:min-h-140"}
                            isShadow={false}
                        />
                    </ScrollReveal>
                ))}
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-15">
                {services.map(service => <Card key={service.name} href={service.href} icon={service.icon} heading={service.name} description={service.description} />)}
            </div> */}
        </section>
    )
}