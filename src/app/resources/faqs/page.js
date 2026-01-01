"use client";

import { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import SectionHeading from "@/components/Blog/SectionHeading";

export default function FAQsPage() {
    const faqs = [
        {
            category: "Security",
            items: [
                {
                    q: "What measures do you take to protect data?",
                    a: "We implement encryption, secure coding, access controls, and continuous monitoring.",
                },
                {
                    q: "How often are security audits performed?",
                    a: "Audits are conducted quarterly, with continuous monitoring for critical systems.",
                },
            ],
        },
        {
            category: "Compliance",
            items: [
                {
                    q: "Are your solutions GDPR compliant?",
                    a: "Yes, all our apps follow GDPR regulations including data privacy and consent management.",
                },
                {
                    q: "Do you maintain ISO certifications?",
                    a: "We are ISO 27001 certified and update processes regularly to maintain compliance.",
                },
            ],
        },
        {
            category: "App Development",
            items: [
                {
                    q: "How do you ensure mobile apps are secure?",
                    a: "We follow secure coding practices, app hardening, encryption, and vulnerability testing.",
                },
                {
                    q: "Can you help with secure API development?",
                    a: "Yes, we implement authentication, authorization, rate limiting, and monitoring.",
                },
            ],
        },
    ];

    // State to track which FAQ is open per category
    const [openIndex, setOpenIndex] = useState({});

    const toggleFAQ = (categoryIdx, itemIdx) => {
        const key = `${categoryIdx}-${itemIdx}`;
        setOpenIndex((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <>
            {/* Hero */}
            <section className="relative py-24 bg-[var(--color-background-soft)] text-center">
                <div className="flex justify-center mb-6">
                    <FaQuestionCircle className="text-6xl text-[var(--color-primary)] animate-pulse" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-quaternary)]">
                    Frequently Asked <span className="text-[var(--color-primary)]">Questions</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
                    Get answers to your most common queries on security, compliance, and app development.
                </p>
            </section>

            {/* FAQs */}
            <section className="py-20">
                <div className="container-custom space-y-16">
                    {faqs.map((section, categoryIdx) => (
                        <div key={categoryIdx}>
                            <SectionHeading heading={section.category} isLine />
                            <div className="mt-6 space-y-4">
                                {section.items.map((faq, itemIdx) => {
                                    const isOpen = openIndex[`${categoryIdx}-${itemIdx}`];
                                    return (
                                        <div
                                            key={itemIdx}
                                            className="bg-[var(--color-white)] p-4 rounded-xl shadow border border-[var(--color-gray)] cursor-pointer transition-all duration-300 hover:shadow-md"
                                            onClick={() => toggleFAQ(categoryIdx, itemIdx)}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[var(--color-quaternary)] font-medium text-base md:text-lg">
                                                    {faq.q}
                                                </h3>
                                                <span className="text-[var(--color-primary)]">
                                                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </span>
                                            </div>
                                            <div
                                                className={`mt-2 text-[var(--text-muted)] text-sm md:text-base transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                {faq.a}
                                            </div>
                                        </div>

                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
