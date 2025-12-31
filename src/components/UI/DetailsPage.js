
import PageHero from "@/components/UI/PageHero";
import SectionHeading from "@/components/UI/SectionHeading";
import { FaCheckCircle } from "react-icons/fa";

export default function DetailPage({ title, subtitle, description, features = [], benefits = [] }) {
    return (
        <div className="flex flex-col gap-6">
            <PageHero 
                heading={title}
                subHeading={subtitle}
                description={description}
            />
            
            {(features.length > 0 || benefits.length > 0) && (
                <div className="container-custom py-20">
                    {features.length > 0 && (
                        <div className="mb-16">
                            <SectionHeading heading="Key Features" subHeading="What allows us to stand out." />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <h3 className="text-xl font-bold text-(--color-primary) mb-3">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {benefits.length > 0 && (
                        <div>
                             <SectionHeading heading="Business Benefits" subHeading="Why this matters for your growth." />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <FaCheckCircle className="text-(--success) text-xl flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-lg font-bold text-(--color-quaternary) mb-1">{benefit.title}</h4>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
