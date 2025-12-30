import React from "react";
import Image from "next/image";
import { MdCopyright } from "react-icons/md";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Our Partners", href: "/partners" },
    ];

    const socialLinks = [
        { icon: FaFacebook, href: "#" },
        { icon: FaTwitter, href: "#" },
        { icon: FaGoogle, href: "#" },
        { icon: FaInstagram, href: "#" },
        { icon: FaLinkedin, href: "#" },
    ];

    return (
        <footer className="bg-(--color-footer) text-(--color-white)">
            {/* Top Section */}
            <div className="container-custom mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

                    {/* Logo + Social */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/logo.webp" 
                            alt="MMH Technologies"
                            width={83}
                            height={83}
                        />

                        <div className="flex gap-5 text-lg">
                            {socialLinks.map(({ icon: Icon, href }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    aria-label="Social link"
                                    className="hover:opacity-80 transition"
                                >
                                    <Icon />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex md:justify-center">
                        <ul className="flex flex-col gap-0.5 md:text-center text-md">
                            {navLinks.map(({ label, href }, index) => (
                                <li key={index}>
                                    <Link
                                        href={href}
                                        className="hover:underline cursor-pointer"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="md:text-center md:text-right">
                        <h4 className="text-2xl font-bold mb-4">Head Office</h4>
                        <p className="text-md leading-relaxed">
                            MMH Technologies, 62-62 Miltrose Crescent
                            <br />
                            Stouffville, Ontario Canada L4A 0P8
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-(--color-quaternary)/20">
                <div className="container-custom mx-auto px-6 py-6">
                    <p className="flex items-center justify-center gap-1 text-md font-semibold">
                        Copyright <span><MdCopyright /></span> 2025 MMH Technologies
                    </p>
                </div>
            </div>
        </footer>
    )
}