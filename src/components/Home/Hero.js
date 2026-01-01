"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "./Button"


export default function HeroSection() {
  const [index, setIndex] = useState(0)
  const words = ["Transform", "Grow", "Evolve"]

  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const images = [
    "/images/home-hero-bg.webp",
    "/images/why-choose-us.webp",
    "/images/about-bg-img.webp",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 5000) // image change interval

    return () => clearInterval(interval)
  }, [])

  // typing effect
  useEffect(() => {
    const currentWord = words[wordIndex]
    const speed = isDeleting ? 100 : 250

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      )

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1200)
      }

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setWordIndex(prev => (prev + 1) % words.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex])

  return (
    <section className="relative w-full  h-[600px] md:h-[500px] lg:h-screen overflow-hidden">
      {/* Background images */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0" }`}
        >
          <Image
            src={src}
            alt="Hero background"
            fill
            priority={i === 0}
            className={`object-cover transition-transform duration-[5000ms] ease-linear ${i === index ? "scale-[1.08]" : "scale-100" }`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-(--color-tertiary) opacity-80"></div>
     
      <div className="relative z-10 h-full flex items-center container-custom px-10 md:px-24">
        <div className="max-w-xl text-(--color-white)">
          <h1 className="text-3xl md:text-5xl font-medium mb-10 md:mb-15">
            Helps You{" "}
            <span className="text-(--warning-soft) font-medium">
              {text}
            </span>
          </h1>
          
          <Button label={"GET STARTED"} href={"#services"} /> 
        </div>
      </div>
    </section>
  )
}
