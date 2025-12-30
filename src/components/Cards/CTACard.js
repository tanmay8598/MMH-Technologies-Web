export default function CTACard() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 my-6 sm:my-8 md:my-10">
            <div className="shadow-md px-6 sm:px-8 md:px-10 lg:px-12 pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-16 lg:pb-18 flex flex-col justify-start items-center md:items-start gap-3 sm:gap-4 bg-[var(--color-white)] rounded-lg">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center md:text-start">
                    Start a project with us.
                </h3>
                <p className="text-sm sm:text-base md:text-md lg:text-lg text-[var(--color-quaternary)] leading-relaxed text-center md:text-start">
                    MMH Technologies is an industry-leading web, software and mobile app development company in Canada, known for delivering innovative solutions and engaging apps.
                </p>
            </div>
        </div>
    );
}