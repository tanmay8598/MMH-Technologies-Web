"use client";
import { useState } from "react";
import InputField from "@/components/UI/InputField";
import Button from "@/components/UI/Button";

export default function ContactForm() {

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
    )
}