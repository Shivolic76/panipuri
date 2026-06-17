"use client";

import { useState } from "react";
import { BedDouble, Bath, Maximize2, Wind, CheckCircle2 } from "lucide-react";

const floorPlans = [
  {
    type: "1 BHK",
    area: "47 m²",
    beds: 1,
    baths: 1,
    balcony: 1,
    price: "₹28 – ₹32 Lakh",
    features: [
      "Spacious Living & Dining",
      "Modular Kitchen",
      "Full Attached Bathroom",
      "Private Balcony",
      "Utility Area",
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  },
  {
    type: "2 BHK",
    area: "65 m²",
    beds: 2,
    baths: 2,
    balcony: 1,
    price: "₹38 – ₹48 Lakh",
    features: [
      "Open Plan Living Room",
      "2 Spacious Bedrooms",
      "2 Bathrooms (1 attached)",
      "Designer Kitchen",
      "Large Balcony",
    ],
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80",
  },
  {
    type: "3 BHK",
    area: "90 m²",
    beds: 3,
    baths: 2,
    balcony: 2,
    price: "₹55 – ₹70 Lakh",
    features: [
      "Premium Living & Dining",
      "3 Large Bedrooms",
      "2 Full Bathrooms",
      "Italian-finish Kitchen",
      "2 Private Balconies",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
  },
];

export default function LivingSpaces() {
  const [active, setActive] = useState(0);
  const plan = floorPlans[active];

  return (
    <section id="floor-plans" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-number">04 — Living Spaces</span>
            <div className="divider-accent" />
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Choose Your Perfect Space
            </h2>
          </div>
          <p className="section-subtitle text-sm">
            Every floor plan is crafted to maximise natural light, ventilation, and functional living.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex gap-2 mb-10 border-b" style={{ borderColor: "var(--border)" }}>
          {floorPlans.map((p, i) => (
            <button
              key={p.type}
              onClick={() => setActive(i)}
              className="px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all"
              style={{
                background: active === i ? "var(--accent)" : "transparent",
                color: active === i ? "#fff" : "var(--muted)",
                borderBottom: active === i ? "3px solid var(--accent)" : "3px solid transparent",
                marginBottom: "-1px",
              }}
            >
              {p.type}
            </button>
          ))}
        </div>

        {/* Plan detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / floor plan mockup */}
          <div className="relative overflow-hidden" style={{ height: "420px" }}>
            <img
              src={plan.image}
              alt={plan.type}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-4 flex gap-6 text-white text-sm font-semibold"
              style={{ background: "rgba(26,43,74,0.85)" }}
            >
              <span className="flex items-center gap-2">
                <BedDouble size={15} style={{ color: "var(--accent)" }} />
                {plan.beds} Bedroom{plan.beds > 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-2">
                <Bath size={15} style={{ color: "var(--accent)" }} />
                {plan.baths} Bath{plan.baths > 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-2">
                <Wind size={15} style={{ color: "var(--accent)" }} />
                {plan.balcony} Balcony
              </span>
              <span className="flex items-center gap-2">
                <Maximize2 size={15} style={{ color: "var(--accent)" }} />
                {plan.area}
              </span>
            </div>
          </div>

          {/* Details */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4"
              style={{ background: "var(--light-bg)", color: "var(--primary)" }}
            >
              {plan.type} Configuration
            </div>
            <div className="text-3xl font-black mb-1" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
              {plan.price}
            </div>
            <div className="text-sm mb-8" style={{ color: "var(--muted)" }}>
              Carpet Area: {plan.area}
            </div>

            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--primary)" }}>
              What's Included
            </h3>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--foreground)" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Building stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Floors", value: "G+10" },
                { label: "Total Units", value: "120" },
                { label: "Social Space", value: "860 m²" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4"
                  style={{ background: "var(--light-bg)" }}
                >
                  <div
                    className="text-xl font-black"
                    style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Schedule Site Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
