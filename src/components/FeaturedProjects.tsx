"use client";

import { MapPin, BedDouble, Maximize2, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "dhruv-park",
    name: "Dhruv Park Residency",
    location: "Gate No. 7, Karadva, Dindoli, Surat",
    status: "Ready to Move",
    statusColor: "#22c55e",
    types: "1, 2 & 3 BHK",
    area: "47 – 90 m²",
    floors: "G + 6 Floors",
    price: "₹28 – ₹55 Lakh",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80",
    tag: "Best Seller",
  },
  {
    id: "shubh-residency",
    name: "Shree Shubh Residency",
    location: "150 ft Canal Road, Deladva, Dindoli",
    status: "Under Construction",
    statusColor: "#f59e0b",
    types: "2 & 3 BHK",
    area: "65 – 90 m²",
    floors: "G + 10 Floors",
    price: "₹32 – ₹60 Lakh",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80",
    tag: "New Launch",
  },
  {
    id: "balaji-residency",
    name: "Balaji Residency",
    location: "Near Eklara Check Post, Karadva, Surat",
    status: "Pre-Launch",
    statusColor: "#3b82f6",
    types: "1, 2 & 3 BHK",
    area: "47 – 90 m²",
    floors: "G + 8 Floors",
    price: "₹35 – ₹65 Lakh",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    tag: "Coming Soon",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-number">02 — Our Projects</span>
            <div className="divider-accent" />
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Featured Residences
            </h2>
          </div>
          <p className="section-subtitle text-sm">
            Carefully designed communities that balance comfort, luxury, and affordability across
            prime locations in Surat.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className="card-hover overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "240px" }}>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className="text-xs font-bold px-2 py-1 uppercase tracking-wide"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div
                  className="absolute top-4 right-4 text-xs font-bold px-2 py-1 uppercase tracking-wide text-white"
                  style={{ background: p.statusColor }}
                >
                  {p.status}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                >
                  {p.name}
                </h3>
                <div className="flex items-center gap-1.5 text-sm mb-4" style={{ color: "var(--muted)" }}>
                  <MapPin size={13} style={{ color: "var(--accent)" }} />
                  {p.location}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="text-center p-2 rounded" style={{ background: "var(--light-bg)" }}>
                    <BedDouble size={16} className="mx-auto mb-1" style={{ color: "var(--accent)" }} />
                    <div className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                      {p.types}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>Units</div>
                  </div>
                  <div className="text-center p-2 rounded" style={{ background: "var(--light-bg)" }}>
                    <Maximize2 size={16} className="mx-auto mb-1" style={{ color: "var(--accent)" }} />
                    <div className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                      {p.area}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>Area</div>
                  </div>
                  <div className="text-center p-2 rounded" style={{ background: "var(--light-bg)" }}>
                    <div className="text-xs font-black mx-auto mb-1" style={{ color: "var(--accent)" }}>
                      G+
                    </div>
                    <div className="text-xs font-semibold" style={{ color: "var(--primary)" }}>
                      {p.floors.replace("G + ", "")}
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>Floors</div>
                  </div>
                </div>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                      Starting from
                    </div>
                    <div className="text-lg font-bold" style={{ color: "var(--accent)" }}>
                      {p.price}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors"
                    style={{ color: "var(--primary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  >
                    Book Now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
