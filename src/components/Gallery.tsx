"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Building exterior",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
    alt: "Living room",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80",
    alt: "Modern kitchen",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
    alt: "Bedroom",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80",
    alt: "Bathroom",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&q=80",
    alt: "Rooftop garden",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    alt: "Apartment complex",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80",
    alt: "Luxury villa",
    span: "",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24" style={{ background: "var(--light-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-number">03 — Gallery</span>
          <div className="divider-accent mx-auto" />
          <h2 className="section-title mx-auto" style={{ fontFamily: "var(--font-heading)" }}>
            A Glimpse Into Your Future Home
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#gallery" className="btn-outline">
            See Full Gallery
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
