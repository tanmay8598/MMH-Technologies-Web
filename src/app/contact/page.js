import PageHero from "@/components/UI/PageHero";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "@/components/Contact/ContactForm";


export const metadata = {
  title: "Contact MMH Technologies in Qatar | Get Free Consultation",
  description:
    "Contact MMH Technologies in Qatar for web development, mobile app development, AI, cloud, and software solutions. Get a free consultation and project estimation today.",

  keywords: [
    "contact MMH Technologies",
    "free consultation IT company",
    "software development consultation",
    "web development company contact",
    "mobile app development services",
    "IT solutions company Canada",
    "Qatar",
  ],

  openGraph: {
    title: "Contact MMH Technologies in Qatar | Get Free Consultation",
    description:
      "Contact MMH Technologies in Qatar for web development, mobile app development, AI, cloud, and software solutions. Get a free consultation and project estimation today.",
    url: "https://www.mmhtechnologies.qa/contact",
    siteName: "MMH Technologies",
    // images: [
    //   {
    //     url: "/images/og-contact.webp", // add this image
    //     width: 1200,
    //     height: 630,
    //     alt: "Contact MMH Technologies",
    //   },
    // ],
    type: "website",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Contact MMH Technologies | Free Consultation",
  //   description:
  //     "Reach MMH Technologies for expert digital solutions and free project consultation.",
  //   images: ["/images/og-contact.webp"],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



const Map = () => {
  return (
    <div className="w-full h-90 md:h-full rounded-lb-md rounded-lr-md lg:rounded-tr-md lg:rounded-br-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.403743889625!2d51.54651867521345!3d25.257000277672468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf7c5fe100a9%3A0xab3caea3fd1fe4eb!2sMMH%20Technologies!5e0!3m2!1sen!2sin!4v1770622395467!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

const InfoRow = ({ icon, children }) => (
  <div className="flex items-start gap-5 text-(--text-main)">
    <div className="text-(--color-primary) mt-1">{icon}</div>
    <p className="text-md leading-relaxed">{children}</p>
  </div>
);


const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-8 mt-10">
      {/* Reach Us */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-(--color-primary)">
          Reach Us
        </h3>
      </div>

      {/* MENA */}
      <div>
        <h4 className="text-lg font-bold text-(--color-primary)">
          MENA
        </h4>

        <div className="mt-4 flex flex-col gap-5">
          <h5 className="text-md font-bold text-(--color-primary)">
            Qatar
          </h5>

          <InfoRow icon={<FaMapMarkerAlt />}>
            Worldwide Commercial Building,
            <br />
            Zone 42, Building 72, Street 250,
            <br />
            Al Hilal, Doha, Qatar
          </InfoRow>

          <InfoRow icon={<FaPhoneAlt />}>
            +974-66178767
          </InfoRow>
        </div>
      </div>

      {/* Ethiopia */}
      <div>
        <h4 className="text-md font-bold text-(--color-primary)">
          Ethiopia
        </h4>

        <div className="mt-4 flex flex-col gap-5">
          <InfoRow icon={<FaMapMarkerAlt />}>
            Laphto mall office number 112/11,
            <br />
            Addis Ababa, Ethiopia
          </InfoRow>

          <InfoRow icon={<FaPhoneAlt />}>
            +251-945005924
          </InfoRow>
        </div>
      </div>

      {/* Indian Subcontinent */}
      <div>
        <h4 className="text-md font-bold text-(--color-primary)">
          Indian Subcontinent
        </h4>

        <div className="mt-4 flex flex-col gap-5">
          <InfoRow icon={<FaMapMarkerAlt />}>
            F223 A Mangal Bazar, Laxmi Nagar,
            <br />
            New Delhi
          </InfoRow>

          <InfoRow icon={<FaPhoneAlt />}>
            +91-9015051710
          </InfoRow>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <h4 className="text-md font-bold text-(--color-primary)">
          Canada
        </h4>

        <InfoRow icon={<FaMapMarkerAlt />}>
          62-62 Miltrose Crescent, Stouffville,
          <br />
          Ontario Canada
        </InfoRow>

        <InfoRow icon={<FaEnvelope />}>
          info@mmhtechnologies.com
        </InfoRow>

        <InfoRow icon={<FaPhoneAlt />}>
          +1 647-515-3379
        </InfoRow>
      </div>
    </div>
  );
}


export default function ContactPage() {

  return (
    <div className="flex flex-col gap-6">
      <PageHero
        heading={"Contact Us"}
        subHeading={"Contact for Premium Business Services"}
        description={"Get your project estimations for well-informed business decisions and top-notch digital outcomes."}
      />
      <div className="w-full container-custom grid grid-cols-1 lg:grid-cols-3 gap-25 my-10">
        <div className="lg:col-span-2 px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-(--color-primary)">Request Free Consultation</h2>
          <div className="rounded-md shadow-md grid grid-cols-1 md:grid-cols-2 gap-10 bg-(--color-white) my-10">
            <ContactForm />
            <div>
              <Map />
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-(--color-primary)">Get In Touch</h2>
          <GetInTouch />
        </div>
      </div>
    </div>
  )
}