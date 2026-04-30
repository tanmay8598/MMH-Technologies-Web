import SectionHeading from "@/components/UI/SectionHeading";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: "/case-studies" },
    title: "Our Projects | MMH Technologies Portfolio",
    description:
        "Explore MMH Technologies’ diverse portfolio of web, mobile, and enterprise projects for Qatar and global clients. See how we deliver innovative, scalable, and user-friendly digital solutions.",
    keywords: [
        "MMH Technologies Projects",
        "Portfolio",
        "Web Development Projects",
        "Mobile App Development",
        "UI/UX Design Projects",
        "Enterprise Solutions",
        "Digital Products",
        "Qatar",
    ],
    openGraph: {
        title: "Our Projects | MMH Technologies Portfolio",
        description:
            "Explore MMH Technologies’ diverse portfolio of web, mobile, and enterprise projects for Qatar and global clients. See how we deliver innovative, scalable, and user-friendly digital solutions.",
        url: "https://www.mmhtechnologies.qa/projects",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-projects.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Our Projects | MMH Technologies Portfolio",
    //     description:
    //         "Explore MMH Technologies' diverse portfolio of web, mobile, and enterprise projects. See how we deliver innovative, scalable, and user-friendly solutions for our clients.",
    //     images: ["/images/og-projects.webp"],
    //     creator: "@MMHTech",
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


const ProjectCard = ({ title, description, src, alt, href }) => {
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 mb-14">
            <Link href={href} target="_blank" className="my-2 relative w-full max-w-[300px] lg:max-w-[470px] h-[180px] md:h-[230px] rounded-2xl overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
            </Link>


            <div className="my-1 w-full md:max-w-2xl">
                <Link href={href} target="_blank">
                    <h2 className="text-xl md:text-3xl font-bold text-(--color-primary) mb-8">
                        {title}
                    </h2>
                </Link>

                <p className="text-[#4A4A4A] text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function ProjectsPage() {
    const projects = [
        {
            title: "Fiora Pets",
            description: "Welcome to online pet items store, your one-stop destination for all your pet's needs! We understand the importance of providing the best care for your furry friends, and that's why we offer a wide range of high-quality pet products. From food and treats to toys, beds, grooming supplies, and more, we have everything you need to keep your pets happy and healthy. Our user-friendly website makes it easy to browse and find the perfect items for your specific pet. With secure payment options and prompt delivery, shopping for your pet has never been more convenient.",
            src: "/images/projects/project1.webp",
            alt: "Project 1",
            href: "https://fiorapets.qa/"
        },
        {
            title: "Wasel",
            description: "Discover the ultimate bilingual online electronics store, where cutting-edge technology meets unbeatable prices. With a vast selection of the latest gadgets and electronics, our store is a tech enthusiast's paradise. From smartphones and laptops to home entertainment systems and smart devices, we have it all. Our user-friendly website offers a seamless shopping experience, allowing you to browse and compare products effortlessly. With secure payment options and fast shipping, your order will be at your doorstep in no time. Whether you're looking to upgrade your home theater or stay ahead in the digital world, our online electronics store is your go-to destination for all things tech.",
            src: "/images/projects/project2.webp",
            alt: "Project 2",
            href: "https://wasel.store/"
        },
        {
            title: "Delta",
            description: "Our website offers a portfolio of completed projects, illustrating our commitment to excellence and innovation. We provide detailed case studies, testimonials, and images to demonstrate our capabilities in areas such as civil engineering, construction management, environmental services, and geotechnical solutions.",
            src: "/images/projects/project3.webp",
            alt: "Project 3",
            href: "https://deltatrdc.com/"
        },
        {
            title: "Samqah Trading",
            description: "Welcome to online diaper website, your go-to destination for high-quality diapers and baby essentials. Our company is dedicated to providing parents with reliable and comfortable diapering solutions for their little ones. With a wide range of diaper sizes, styles, and absorbency levels, we have the perfect fit for every baby. Our website offers a seamless shopping experience, allowing you to easily browse and select the products you need. We prioritize your baby's comfort and safety, ensuring that our diapers are made with soft, hypoallergenic materials. Experience the convenience of ordering diapers online and trust us to provide the best for your precious bundle of joy.",
            src: "/images/projects/project4.webp",
            alt: "Project 4",
            href: "https://samqahtrading.com/"
        },
        {
            title: "Pearl Star Limousine",
            description: "Premier limousine service website, where luxury and comfort meet your transportation needs. Our project focuses on providing a seamless online platform for clients to book exquisite limousine services for any occasion. With an extensive fleet of elegant vehicles, we offer a wide range of options to suit your preferences and group size. Our user-friendly website allows you to easily select your desired limousine, choose additional amenities, and schedule your pick-up and drop-off locations. Experience the epitome of luxury travel with our professional chauffeurs, who prioritize your safety, punctuality, and personalized service. Book your unforgettable limousine experience with us today.",
            src: "/images/projects/project5.webp",
            alt: "Project 5",
            href: "https://pearlstarlimousine.qa/"
        },
        {
            title: "Subhash Super Store",
            description: "Introducing our revolutionary eCommerce platform, available on Android and iOS devices, offering unlimited data for an unmatched shopping experience. Our project combines cutting-edge technology with user-friendly interfaces, enabling seamless browsing, product selection, and secure transactions. With our extensive catalog of products, customers can explore an endless array of options, from clothing and accessories to electronics and home decor. Our platform's unlimited data ensures lightning-fast loading times and uninterrupted shopping, while advanced search and recommendation features make finding desired items effortless. Enjoy the convenience of secure payments, order tracking, and personalized notifications, all within our robust eCommerce platform. Shop without limits and discover a new era of mobile shopping convenience.",
            src: "/images/projects/project6.webp",
            alt: "Project 6",
            href: "https://apps.apple.com/in/app/subhash-super-store/id6449820958"
        },
        {
            title: "Monasbaty",
            description: "Introducing our Android and iOS app designed specifically for service providers in Qatar. Our app connects skilled professionals with customers seeking their services in a seamless and convenient way. Service providers can create profiles, showcase their expertise, and list their availability. Customers can easily browse through the app to find the right service provider for their needs, request appointments, and securely make payments. With our app, service providers can expand their client base and manage their schedules efficiently, while customers can effortlessly access a wide range of services from trusted professionals. Experience the power of our app and connect with service providers in Qatar like never before.",
            src: "/images/projects/project7.webp",
            alt: "Project 7",
            href: "https://apps.apple.com/in/app/monasbaty/id6450546687"
        },
    ]
    return (
        <div className="py-10">
            <SectionHeading heading={"Our Projects"} />
            <div className="py-10 container-custom">
                {projects.map(project => <ProjectCard key={project.title} {...project} />)}
            </div>
        </div>
    )
}