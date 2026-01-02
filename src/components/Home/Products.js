"use client";
import { motion } from "framer-motion";

import SectionHeading from "@/components/UI/SectionHeading"
import Image from "next/image"

export default function Products() {

  const products = [
    {
      name: "Food Delivery Apps",
      src: "/images/food-delivery.webp",
      alt: "Food delivery mobile application interface",
    },
    {
      name: "Grocery & Ecommerce Delivery Apps",
      src: "/images/grocery-delivery.webp",
      alt: "Grocery and ecommerce delivery app user interface",
    },
    {
      name: "Cab Booking",
      src: "/images/cab-booking.webp",
      alt: "Cab booking and ride hailing mobile application",
    },
    {
      name: "Health and Fitness Apps",
      src: "/images/fitness-app.webp",
      alt: "Health and fitness tracking mobile application",
    },
    {
      name: "Streaming Apps",
      src: "/images/video-streaming.webp",
      alt: "Video streaming and entertainment mobile application",
    },
  ]

  const ProductCard = ({ index, name, src, alt, isLast, isOdd }) => {
    return (
      <motion.div
        initial={{ scale: 0.6, opacity: 0 } }
        whileInView={{ scale: 1, opacity: 1 } }
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`p-4 sm:p-5 flex flex-col items-center text-center ${isLast && isOdd ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""} `}
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] h-auto object-contain"
        />

        <h4 className="mt-4 text-xl sm:text-2xl md:text-3xl text-(--color-primary) font-bold">
          {index}. {name}
        </h4>
      </motion.div>
    )
  }

  return (
    <section className="w-full py-10 sm:py-14 md:py-20 bg-(--color-white)">
      <div className="container-custom">
        <SectionHeading
          heading={"Our Products"}
          subHeading={"Smart digital solutions engineered for modern businesses."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 my-10 md:my-15">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              index={index + 1}
              name={product.name}
              src={product.src}
              alt={product.alt}
              isLast={index === products.length - 1}
              isOdd={products.length % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
