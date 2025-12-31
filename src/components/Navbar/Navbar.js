"use client";

import Image from 'next/image'
import Button from '../UI/Button'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
    // Pages where navbar should be solid
    const solidNavbarRoutes = ["/projects", ];
    const isSolid = solidNavbarRoutes.includes(pathname);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Technologies", href: "/technologies" },
        { name: "Industries", href: "/industries" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className={`top-0 left-0 w-full z-50
            ${isSolid ? "relative bg-(--color-white) text-(--color-primary) shadow-sm" : "absolute text-(--color-white)"}
        `}>
            <div className="container-custom flex justify-between items-center py-3">
                {/* Logo */}
                <Link href={"/"}>
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
                <div className="hidden lg:flex gap-15 items-center justify-center">
                    <nav>
                        <ul className="flex gap-8">
                            {navItems.map(item => (
                                <li key={item.name}><Link href={item.href}>{item.name}</Link></li>
                            ))}
                        </ul>
                    </nav>
                    <Button label={"REQUEST QUOTE"} />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-(--color-white)"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-[2px] bg-(--color-white) mb-1"></span>
                    <span className="block w-6 h-[2px] bg-(--color-white) mb-1"></span>
                    <span className="block w-6 h-[2px] bg-(--color-white)"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-(--color-black)/90 backdrop-blur-md transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <nav className="container-custom py-6">
                    <ul className="flex flex-col gap-5 text-(--color-white)">
                        {navItems.map(item => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block hover:text-primary transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <Button label="REQUEST QUOTE" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}