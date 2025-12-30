"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 scale-95 transition-all duration-300 pointer-events-none hidden md:block group-hover:opacity-100 group-hover:scale-100">
        <div className="bg-[var(--color-tooltip-bg)] text-[var(--color-tooltip-text)] text-sm px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/97466178767"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--whatsapp)] hover:bg-[var(--whatsapp-hover)] shadow-lg transition-all duration-300"
      >
        <FaWhatsapp className="text-[var(--color-white)] text-3xl" />
      </a>
    </div>
  );
}
