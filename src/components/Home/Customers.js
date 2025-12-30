"use client";

import SectionHeading from "@/components/UI/SectionHeading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import Divider from "../UI/Divider";
import Link from "next/link";

const Button = ({ onClick, icon: Icon, isLeft = false }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 hover:cursor-pointer text-gray-300 hover:text-gray-600 transition`}
        >
            <Icon size={28} />
        </button>
    );
};

export default function Customers() {
    const customers = [
        { id: 1, src: "/images/customers/wasel.webp", alt: "Wasel", href: "https://wasel.store/" },
        { id: 2, src: "/images/customers/fiora.webp", alt: "Fiora Pets", href: "https://fiorapets.qa/" },
        { id: 3, src: "/images/customers/pearlstar.webp", alt: "Pearl Star Limousine", href: "https://pearlstarlimousine.qa/" },
        { id: 4, src: "/images/customers/monasbaty.webp", alt: "Monasbaty", href: "https://monasbaty.com/" },
        { id: 5, src: "/images/customers/keycons.webp", alt: "Keycons", href: "https://keycons.co/" },
        { id: 6, src: "/images/customers/rora.webp", alt: "Rora", href: "https://rorageneraltrading.com/" },
        { id: 7, src: "/images/customers/cinepolis.webp", alt: "Cinepolis", href: "https://cinepolisindia.com/" },
        { id: 8, src: "/images/customers/ecom-express.webp", alt: "Ecom Express", href: "https://ecomexpress.in/" },
        { id: 9, src: "/images/customers/walmart.webp", alt: "walmart", href: "https://www.walmart.com/" },
        { id: 10, src: "/images/customers/jaypee.webp", alt: "jaypee", href: "https://www.jaypeehotels.com/" },
        { id: 11, src: "/images/customers/nokia.webp", alt: "nokia", href: "https://www.nokia.com/" },
        { id: 12, src: "/images/customers/whirpool.webp", alt: "whirpool", href: "https://www.whirlpoolindia.com/" },
        { id: 13, src: "/images/customers/lg.webp", alt: "lg", href: "https://www.lg.com/in/" },
    ];

    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const AUTO_SLIDE_INTERVAL = 3000;

    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Responsive items per slide
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1); // Mobile: 1 item
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2); // Tablet: 2 items
            } else {
                setItemsPerSlide(3); // Desktop: 3 items
            }
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const prev = () => {
        setIsTransitioning(true);
        setIndex((prev) => prev - 1);
    };

    const next = () => {
        setIsTransitioning(true);
        setIndex((prev) => prev + 1);
    };

    // Handle infinite loop
    const handleTransitionEnd = () => {
        if (index >= customers.length) {
            setIsTransitioning(false);
            setIndex(0);
        } else if (index < 0) {
            setIsTransitioning(false);
            setIndex(customers.length - 1);
        }
    };

    // Auto slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setIndex((prev) => prev + 1);
        }, AUTO_SLIDE_INTERVAL);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-(--color-white) py-10">
            <SectionHeading
                heading={"Our Customers"}
                subHeading={
                    "Our Process Thinking approach endorses innovation and transformation that can be seen in our work. Our clients span a wide range of industries i.e. electronics, hypermarket, entertainment, telecom, hotels across the world"
                }
            />
            <div className="mt-8 md:mt-15">
                <Divider />
            </div>
            <div className="px-4 md:px-8 lg:px-15">
                {/* Carousel */}
                <div className="relative mt-8 overflow-hidden">
                    {/* Slides */}
                    <div
                        className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                        style={{
                            transform: `translateX(-${(index * 100) / itemsPerSlide}%)`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {[...customers, ...customers.slice(0, itemsPerSlide - 1)].map((customer, idx) => (
                            <Link
                                key={`${customer.id}-${idx}`}
                                href={customer.href}
                                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 hover:cursor-pointer flex justify-center items-center px-4 md:px-8 lg:px-12 py-4"
                                target="_blank"
                            >
                                <Image
                                    src={customer.src}
                                    alt={customer.alt}
                                    width={260}
                                    height={120}
                                    className="object-contain w-full h-auto max-w-[200px] md:max-w-[220px] lg:max-w-[260px] transition hover:scale-105"
                                />
                            </Link>
                        ))}
                    </div>

                    <Button onClick={prev} icon={FaChevronLeft} isLeft />
                    <Button onClick={next} icon={FaChevronRight} />
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6 md:mt-10 flex-wrap">
                    {customers.map((customer, dotIndex) => (
                        <button
                            key={customer.id}
                            onClick={() => {
                                setIsTransitioning(true);
                                setIndex(dotIndex);
                            }}
                            className={`w-1.5 h-1.5 rounded-full transition ${
                                dotIndex === (index >= customers.length ? 0 : index < 0 ? customers.length - 1 : index)
                                    ? "bg-black scale-125"
                                    : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}