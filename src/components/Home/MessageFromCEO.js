import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from "next/image";
import SectionHeading from "../UI/SectionHeading";

export default function MessageFromCEO() {
    return (
        <section className="w-full py-8 md:py-10 lg:py-12">
            <SectionHeading heading={"Message from CEO"} />
            
            <div className="bg-(--color-white)">
                <div className="container-custom flex flex-col md:flex-row md:justify-center items-center md:items-start gap-8 md:gap-16 lg:gap-25 mt-5 px-4 md:px-6 lg:px-8 py-6 md:py-8">
                    
                    {/* CEO Image */}
                    <div className="flex-shrink-0">
                        <div className="rounded-2xl border-2 md:border-3 border-[var(--color-primary)] overflow-hidden w-[180px] h-[240px] sm:w-[200px] sm:h-[267px] md:w-[227px] md:h-[304px]">
                            <Image
                                src="/images/ceo.webp"
                                alt="CEO Shuja Rizvi"
                                width={227}
                                height={304}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative text-center md:text-left max-w-3xl w-full px-4 md:px-0">
                        {/* LEFT BIG QUOTE */}
                        <FaQuoteLeft
                            className="absolute -left-2 -top-4 md:-left-5 md:-top-2 text-4xl md:text-6xl lg:text-8xl text-[var(--color-primary)] opacity-20"
                        />

                        {/* RIGHT BIG QUOTE */}
                        <FaQuoteRight
                            className="absolute -right-2 -bottom-2 md:right-0 md:bottom-12 lg:bottom-2 text-4xl md:text-6xl lg:text-8xl text-[var(--color-primary)] opacity-20"
                        />

                        {/* Message Text */}
                        <div className="relative z-10 pt-8 md:pt-5">
                            <p className="text-base sm:text-lg md:text-xl text-[var(--color-tertiary)] font-bold italic leading-relaxed px-6 md:px-8 lg:px-0">
                                Our comprehensive process - from understanding and defining a
                                project to design and development, right through to quality testing
                                - assures clients that their project is in the hands of a team of
                                professionals that has built a reputation for providing
                                customer-focused project on time.
                            </p>

                            {/* CEO Name */}
                            <p className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-[28px] font-bold text-(--color-black) opacity-80">
                                Shuja Rizvi <span className="font-semibold">- CEO</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}