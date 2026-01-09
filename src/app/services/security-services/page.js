import {
    FaUsers,
    FaCar,
    FaProjectDiagram,
    FaLaptop,
    FaUserTie,
    FaCogs,
    FaFire,
    FaBullseye,
    FaList,
    FaTools,
    FaFileContract,
    FaPlay,
} from "react-icons/fa";

import Image from "next/image";

export const metadata = {
    title: "Security Services | MMH Technologies",
    description:
        "MMH Technologies delivers end-to-end security and fire safety solutions including Fire Detection, CCTV, Access Control, Intruder Alarms, Fire Protection Systems, and Home Automation with AMC & commissioning support.",
    keywords: [
        "MMH Technologies Security Services",
        "Fire Detection and Alarm System",
        "CCTV Surveillance Systems",
        "Access Control System",
        "Intruder Alarm System",
        "Fire Protection System",
        "Security System Integration",
        "Annual Maintenance Contracts",
        "Home Automation Systems",
        "Building Safety Solutions",
        "Qatar"
    ],
    openGraph: {
        title: "Security Services | MMH Technologies",
        description:
            "MMH Technologies delivers end-to-end security and fire safety solutions including Fire Detection, CCTV, Access Control, Intruder Alarms, Fire Protection Systems, and Home Automation with AMC & commissioning support.",
        url: "https://www.mmhtechnologies.com/security-services",
        siteName: "MMH Technologies",
        // images: [
        //     {
        //         url: "/images/og-security-services.webp",
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Integrated Security & Fire Systems | MMH Technologies",
    //     description:
    //         "Fire alarms, CCTV, access control, intruder alarms, fire protection & home automation by MMH Technologies.",
    //     images: ["/images/og-security-services.webp"],
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


export default function SecurityServicesPage() {

    const services = [
        { title: "Hazard Analysis", icon: FaUsers },
        { title: "Surveys", icon: FaCar },
        { title: "Design and Engineering", icon: FaProjectDiagram },
        { title: "System Integration", icon: FaLaptop },
        { title: "Equipment Procurement and Supply", icon: FaUserTie },
        { title: "Installation", icon: FaCogs },
        { title: "Fire Testing", icon: FaFire },
        { title: "Servicing", icon: FaBullseye },
        { title: "Training", icon: FaList },
        { title: "Preventive Maintenance", icon: FaTools },
        { title: "Annual Maintenance Contracts", icon: FaFileContract },
        { title: "Commissioning", icon: FaPlay },
    ];

    const systems = [
        {
            title: "Fire Detection & Alarm System",
            description: "Conventional, Analogue Addressable, Intelligent Addressable & VESDA systems for High Value Assets in Clean Rooms.",
            image: "/images/security-services/fire_alarm_guide.webp",
        },
        {
            title: "Access Control System",
            description: "Standalone/ Networkable System, Proximity and Biometrics based Access Control System along with the Time & Attendance Software’s.",
            image: "/images/security-services/access_control_system.webp",
        },
        {
            title: "Closed Circuit Television System",
            description: "Black & White System, Color Systems, Fixed Cameras, PTZ Cameras, Standalone DVR, Networkable DVR, Standalone or Network System which can be viewed through LAN/ WAN on a different location.",
            image: "/images/security-services/cctv-closed-circuit-television2.webp",
        },
        {
            title: "Intruder Alarm System",
            description: "All types of Intruder/ Burglar Alarm Systems, which includes Wired and Wireless.",
            image: "/images/security-services/alarm_system.webp",
        },
        {
            title: "Fire Protection System",
            description: "Water based Fire Protection system, which includes Fire Hydrant System, Sprinkler System. Water Curtain System. Gas based Fire Protection system for Server Rooms, Data Centers, Hub Rooms etc using FM200 or Inert Gas.",
            image: "/images/security-services/fire_protection_system.webp",
        },
    ];


    const automationItems = [
        {
            title: "Master Power Key",
            image: "/images/security-services/master_power_key.webp",
            description:
                "Module-3M Dimension-H 45mm, W 75mm Color-Black/White/Grey Unit-Energy key tag with control unit Features- Energy key tag holder 30A, Infrared key card holder, time delay 30 sec, swipe 1mm card and activate the mains power, Blue color card slot indicator, System integration with rj45 connector and cat6 cable",
        },
        {
            title: "DND Key",
            image: "/images/security-services/dnd_key.webp",
            description:
                "Module-3M Dimension-H 45mm, W 75mm Color-Black/White/Grey Unit-Energy key tag with control unit Features- Micro push button for call bell, Do Not Disturb indicator with red led, Laundry indicator in yellow led, Make my room indicator in green led, Luxury type indicators, Advance microprocessor based system, System integration with rj45 connector and cat6 cable.",
        },
        {
            title: "Bedside Panel",
            image: "/images/security-services/beside_panel.webp",
            description:
                "Color-Black/White/Grey Type- Table top bedside master control panel Unit-Energy key tag with control unit Features- Advanced microprocessor based, Control the room’s lighting system from one master panel from bedside, World clock display, Fan control on/off with three speed, Master lighting on/off with night sleep mode facility. System integration with rj45 connector and cat6 cable",
        },
        {
            title: "TV Mute System",
            image: "/images/security-services/tv_mute_system.webp",
            description:
                "Unit-Sensors with control unit Features- Automatic TV mute (If TV ON) while you received a call, Manual TV mute note required if you have TV mute system, Configurable with Sony/Samsung or any branded TV.",
        },
        {
            title: "Bathroom Amplifier",
            image: "/images/security-services/bathroom_amplifier.webp",
            description:
                "Unit- Volume control key with control unit. Features- Micro push button controlled volume with off/on features for bathroom speakers, Enjoy the AV sound in bathroom. Electronic Thermostat Module-3M Dimension-H 45mm, W 75mm Color-Black/White/Grey Unit- Digital thermostat key with control unit Features- Micro push button operation, Digital display indicator, Temperature operating range 18°C to 28°C, Three speed control with on/off, Microprocessor based energy saving mode, System integration with rj45 connector and cat6 cable.",
        },
        {
            title: "Lighting Scene Module",
            image: "/images/security-services/lightning_scene_module.webp",
            description:
                "Module-3M Dimension-H 45mm, W 75mm Color-Black/White/Grey Unit-Keypad panel with four mode lighting scenes. Features- Four mode selectable scenes with Master on/off switch. You can operate the room mode with ceiling/light-1 & light-2 mode. Customize lighting arrangement with multiple scenes. Advance microprocessor based system, System integration with rj45 connector and cat6 cable.",
        },
    ];


    return (
        <div className="container-custom flex flex-col gap-6">
            <h2 className="ms-4 text-2xl md:text-5xl font-bold text-[var(--color-primary)] pt-4">
                Security Services
            </h2>

            <p className="text-center text-[var(--color-quaternary)] py-3">
                We offer a complete bouquet of Services to our Clients which Range from
                Surveys to Analysis till Design & Engineering, our full range of Services
                can be found in the list shown below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <Icon className="text-[var(--color-quaternary)] text-4xl mb-4" />
                            <p className="text-lg font-semibold text-[var(--color-secondary)]">
                                {service.title}
                            </p>
                        </div>
                    );
                })}
            </div>

            <p className="text-center text-[var(--color-quaternary)] py-20">
                MMH Technologies is engaged in Design, Engineering, Supply, Erection,
                testing, commissioning & Annual Maintenance Contracts for the following
            </p>

            <section className="flex flex-col gap-10">
                {systems.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12"
                    >
                        <div className="relative w-full aspect-[16/9] mb-2 lg:mb-6">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="rounded-md object-cover"
                            />
                        </div>

                        <div className="md:pt-3 text-center lg:text-left mb-5 md:mb-0">
                            <h2 className="text-center text-3xl font-bold text-[var(--color-primary)] mb-4">
                                {item.title}
                            </h2>

                            <p className="text-center text-[var(--color-quaternary)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="py-20">
                <div>
                    <h2 className="text-2xl md:text-4xl text-center md:text-start font-bold text-[var(--color-primary)] mb-5 md:mb-16">
                        Home Automation System
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {automationItems.map((item, index) => (
                            <div key={index}>
                                <div className="relative w-full h-[280px] mb-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="rounded-md object-cover"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-[var(--color-quaternary)] leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}