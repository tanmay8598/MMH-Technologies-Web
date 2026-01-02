"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const accordionData = [
    {
        title: "Best Quality Designs",
        content: "We believe that great user interface design is the secret to any company or organization's success, explore more on what we can do for you.",
    },
    {
        title: "Client Centric",
        content: "For any business, Clients are always at the core. Being a leading developer of web and mobile applications, our concept goes beyond our direct customers. We always start from where you are with your ideas and we think from the viewpoints of your end users, their areas of pain, and formulate a solution that solves key issues to help your business.",
    },
    {
        title: "Result Oriented Projects",
        content: "We strive to deliver our project on time. In time, we describe and produce it. Our Products are here to notify the same.",
    },
    {
        title: "Experienced Professionals",
        content: "With our core field of expertise being JavaScript, React, React Native, AWS our coding experts remain on the cutting edge of the newest and most successful technology trends and popular applications on the market. So you can expect a greater level of ownership, commitments & deliveries in less time with higher quality while following all the best practices for the development. Thereby providing the best values for our customers. It is always that we believe in Quality > Quantity & 'Value' is what is valued.",
    },
];

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-[var(--color-bg)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                    {/* Left Image */}
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg order-2 lg:order-1">
                        <Image
                            src="/images/why-choose-us.webp"
                            alt="Why Choose Us"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-[var(--color-primary)] opacity-40" />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col gap-4 md:gap-6 order-1 lg:order-2 lg:pr-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] text-center lg:text-left">
                            Why Choose Us?
                        </h2>

                        <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)] text-center lg:text-left">
                            Here we make sure that you have made the best decision for your
                            project to start with and shape the product as you imagine.
                            <br />
                            <span className="font-semibold text-[var(--color-quaternary)] block mt-2">
                                Because we make it simple.
                            </span>
                        </p>

                        {/* Accordion */}
                        <div className="mt-4 md:mt-6 bg-[var(--color-white)] rounded-lg shadow-md overflow-hidden border border-[var(--color-gray)]">
                            {accordionData.map((item, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="border-b last:border-b-0 border-[var(--color-gray)]"
                                    >
                                        {/* Accordion Header */}
                                        <button
                                            onClick={() => toggle(index)}
                                            className={`w-full flex items-center justify-between hover:cursor-pointer px-4 sm:px-5 md:px-6 py-4 md:py-5 text-left transition-all duration-200 ${isActive
                                                    ? "bg-[var(--color-background-soft)]"
                                                    : "bg-[var(--color-white)] hover:bg-[var(--color-background-soft)]"
                                                }`}
                                        >
                                            <span
                                                className={`text-sm sm:text-base font-semibold transition-colors ${isActive
                                                        ? "text-[var(--color-secondary)]"
                                                        : "text-[var(--color-quaternary)]"
                                                    }`}
                                            >
                                                {item.title}
                                            </span>

                                            <span
                                                className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 flex-shrink-0 ml-4 ${isActive
                                                        ? "bg-[var(--color-secondary)] text-white"
                                                        : "bg-[var(--color-tertiary)] text-[var(--color-white)] hover:opacity-80"
                                                    }`}
                                            >
                                                {isActive ? (
                                                    <FaMinus className="text-xs sm:text-sm" />
                                                ) : (
                                                    <FaPlus className="text-xs sm:text-sm" />
                                                )}
                                            </span>
                                        </button>

                                        {/* Accordion Content */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isActive
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-4 sm:px-5 md:px-6 pb-4 md:pb-5 pt-2">
                                                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}