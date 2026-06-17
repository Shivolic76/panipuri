"use client";

import { useState, useEffect } from "react";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "New Launch",
    title: "Dhruv Park\nResidency",
    subtitle: "Premium 1, 2 & 3 BHK Homes",
    location: "Karadva, Dindoli, Surat",
    price: "Starting ₹28 Lakh",
    badge: "READY TO MOVE",
    bg: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
  },
  {
    id: 2,
    tag: "Ongoing",
    title: "Shree Shubh\nResidency",
    subtitle: "Elegant Living at Its Finest",
    location: "Deladva, Dindoli, Surat",
    price: "Starting ₹32 Lakh",
    badge: "UNDER CONSTRUCTION",
    bg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
  },
  {
    id: 3,
    tag: "Coming Soon",
    title: "Balaji\nResidency",
    subtitle: "Luxury Redefined in Surat",
    location: "150 ft Canal Road, Surat",
    price: "Starting ₹35 Lakh",
    badge: "PRE-LAUNCH",
    bg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((idx + slides.length) % slides.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(t);
  }, [current]);

  const slide = slides[current];

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(26,43,74,0.88) 40%, rgba(26,43,74,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div
          className="transition-all duration-300"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(20px)" : "translateY(0)" }}
        >
          <span
            className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            {slide.tag}
          </span>

          <h1
            className="text-white text-5xl md:text-7xl font-black leading-none mb-4 whitespace-pre-line"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {slide.title}
          </h1>

          <p className="text-white/80 text-lg md:text-xl font-light mb-3">{slide.subtitle}</p>

          <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
            <MapPin size={14} style={{ color: "var(--accent)" }} />
            {slide.location}
          </div>

          <div
            className="inline-block text-sm font-bold tracking-widest uppercase px-3 py-1 mb-8"
            style={{ border: "1px solid var(--accent)", color: "var(--accent)" }}
          >
            {slide.badge}
          </div>

          <div className="text-white text-2xl font-bold mb-8" style={{ color: "var(--accent-light)" }}>
            {slide.price}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Book Site Visit <ArrowRight size={15} />
            </a>
            <a
              href="#projects"
              className="btn-outline"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Slide dots & arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? "2rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "4px",
              background: i === current ? "var(--accent)" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-center translate-y-4">
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </div>
    </section>
  );
}
