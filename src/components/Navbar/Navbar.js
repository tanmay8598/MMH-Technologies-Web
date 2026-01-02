"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Home/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const solidNavbarPatterns = [
        "/projects",
        "/case-studies",
        "/technologies/",
        "/blog/",
        "/resources",
        "/security",
        "/privacy-policy",
    ];

    const isSolid = solidNavbarPatterns.some(pattern =>
        pathname.startsWith(pattern)
    );

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Technologies", href: "/technologies" },
        { name: "Industries", href: "/industries" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`top-0 left-0 w-full z-50 ${isSolid
                    ? "relative bg-(--color-white) text-(--color-primary) shadow-sm"
                    : "absolute text-(--color-white)"
                }`}
        >
            <div className="container-custom flex justify-between items-center py-3">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/logo.webp"
                        alt="logo"
                        width={85}
                        height={85}
                        priority
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-[85px] md:h-[85px]"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-15 items-center">
                    <nav>
                        <ul className="flex gap-8">
                            {navItems.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button label="REQUEST QUOTE" href={"/contact"} />
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden text-2xl transition bg-(--color-secondary) hover:bg-(--color-primary) p-3 text-(--color-white)
                        }`}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-(--color-white) backdrop-blur-sm transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <nav className="px-6 py-6">
                    <ul className="flex flex-col gap-5 text-(--color-black)">
                        {navItems.map(item => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block hover:text-primary transition "
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <Button label="REQUEST QUOTE" href={"/contact"} />
                    </ul>
                </nav>
            </div>
        </header>
    );
}
