import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCopyright } from "react-icons/md";
import {
    FaFacebookF,
    FaTwitter,
    FaGoogle,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100083367429110#" },
        { icon: FaTwitter, href: "https://mmhtechnologies.com/" },
        { icon: FaGoogle, href: "https://www.google.com/search?client=ms-android-xiaomi-rev1&sca_esv=589119146&hl=en-GB&cs=0&sxsrf=AM9HkKlANfYvk2y3i6aPVrhDqJfc-0MU5Q:1702061672148&q=MMH+Technologies&ludocid=14463773696791692015&lsig=AB86z5X2UL7_JzI9vCmS_I_aPKrd&kgs=ce0ff8ede1c6aff1&shndl=-1&shem=lcspc,lsp&source=sh/x/loc/act/m1/4" },
        { icon: FaInstagram, href: "https://mmhtechnologies.com/" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/mmh-technologies/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B4l%2BSTvaKQgyzMmGGmj8npA%3D%3D" },
    ];

    const footerLinks = [
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "Mobile App Development", href: "/services/mobile-app-development" },
                { label: "Web Development", href: "/services/web-development" },
                { label: "AI Development", href: "/services/ai-development" },
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
                { label: "Cloud & DevOps", href: "/services/cloud-devops" },
                { label: "QA & Testing", href: "/services/qa-testing" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", href: "/blog" },
                { label: "Whitepapers", href: "/resources/whitepapers" },
                { label: "Guides", href: "/resources/guides" },
                { label: "FAQs", href: "/resources/faqs" },
            ],
        },
        {
            title: "Legal",
            links: [
                { label: "Terms & Conditions", href: "/privacy-policy/terms-conditions" },
                { label: "Cookie Policy", href: "/privacy-policy/cookie-policy" },
            ],
        },
    ];

    return (
        <footer className="bg-(--color-footer) text-(--color-white)">
            {/* Top */}
            <div className="container-custom px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Link
                            href={"/"}
                        >
                            <Image
                                src="/images/logo.webp"
                                alt="MMH Technologies"
                                width={85}
                                height={85}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-[85px] md:h-[85px]"
                            />

                        </Link>

                        <p className="text-sm text-(--color-white)/70 leading-relaxed max-w-sm">
                            Building secure, scalable, and future-ready digital solutions for
                            startups and enterprises worldwide.
                        </p>

                        <div className="flex gap-4 mt-2">
                            {socialLinks.map(({ icon: Icon, href }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    className="w-9 h-9 flex items-center justify-center rounded-full
                  bg-(--color-white)/10 hover:bg-(--color-white) hover:text-(--color-primary) transition"
                                >
                                    <Icon className="text-sm" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-12">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h4 className="text-sm font-semibold mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2 text-sm text-(--color-white)/70">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link href={link.href} className="hover:text-(--color-white) transition">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Address */}
                    <div className="lg:pl-8 lg:border-l lg:border-(--color-white)/10">
                        <h4 className="text-sm font-semibold mb-4">Head Office</h4>
                        <p className="text-sm text-(--color-white)/70 leading-relaxed">
                            MMH Technologies<br />
                            Worldwide Commercial Building,<br />
                            Zone 42, Building 72, Street 250,<br />
                            Al Hilal, Doha, Qatar
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-(--color-white)/10">
                <div className="container-custom px-6 py-6 flex items-center justify-center text-xs text-(--color-white)">
                    <p className="flex items-center gap-1">
                        Copyright <MdCopyright />
                        {new Date().getFullYear()} MMH Technologies. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
