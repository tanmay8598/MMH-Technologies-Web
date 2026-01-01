"use client";

import InputField from "@/components/UI/InputField";
import PageHero from "@/components/UI/PageHero";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import Button from "@/components/UI/Button";


const Map = () => {
  return (
    <div className="w-full h-90 md:h-full rounded-lb-md rounded-lr-md lg:rounded-tr-md lg:rounded-br-md overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45951.46904296624!2d-79.254441!3d43.960052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d5292c0c3ddb0d%3A0x337236ab356efb9f!2s62%20Miltrose%20Crescent%20%2362%2C%20Whitchurch-Stouffville%2C%20ON%20L4A%200P8%2C%20Canada!5e0!3m2!1sen!2sus!4v1766997168756!5m2!1sen!2sus"
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

        <div className="mt-4 flex flex-col gap-5">
          <h4 className="text-md font-bold text-(--color-primary)">
            Head Office
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
    </div>
  );
}


export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errors = {};
    const { name, email, message } = formData;
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      errors.email = "Enter a valid email address";
    }

    if (!message.trim()) {
      errors.message = "Message cannot be empty";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSuccess("Your message has been sent successfully ✨");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setErrors({ api: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 py-6 lg:py-10 px-6 lg:px-8">
              <InputField
                label="Name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />

              <InputField
                label="Email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <InputField
                label="Message"
                name="message"
                type="textarea"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />

              {errors.api && (
                <p className="text-sm text-(--danger)">{errors.api}</p>
              )}

              {success && (
                <p className="text-sm text-green-600">{success}</p>
              )}

              <div className="pt-2">
                <Button
                  label={loading ? "Sending..." : "Submit Request"}
                />
              </div>
            </form>
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