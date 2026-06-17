"use client";

import {
  Droplets,
  Zap,
  Layers,
  Trees,
  Shield,
  Car,
  Dumbbell,
  Wifi,
  Video,
  Flame,
  Sprout,
  Wind,
} from "lucide-react";

const amenities = [
  { icon: Droplets, label: "24/7 Water Supply", desc: "RO drinking water system & overhead tanks" },
  { icon: Zap, label: "Power Backup", desc: "100% power backup for common areas" },
  { icon: Layers, label: "Vitrified Tiles", desc: "Premium Italian-finish ceramic flooring" },
  { icon: Trees, label: "Landscaped Garden", desc: "Children's play area & green spaces" },
  { icon: Shield, label: "24/7 Security", desc: "CCTV surveillance & security guard" },
  { icon: Car, label: "Ample Parking", desc: "Dedicated stilt & open parking" },
  { icon: Dumbbell, label: "Gymnasium", desc: "Fully equipped fitness centre" },
  { icon: Wifi, label: "High-Speed Internet", desc: "Fibre optic connectivity ready" },
  { icon: Video, label: "Video Door Phone", desc: "Intercom & video doorbell system" },
  { icon: Flame, label: "Gas Pipeline", desc: "PNG gas connection provision" },
  { icon: Sprout, label: "Rainwater Harvesting", desc: "Eco-friendly water conservation" },
  { icon: Wind, label: "Cross Ventilation", desc: "Thoughtfully designed for air flow" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24" style={{ background: "var(--primary)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-number" style={{ color: "var(--accent)" }}>
            05 — Amenities
          </span>
          <div className="divider-accent mx-auto" />
          <h2
            className="section-title text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Everything You Need, Right At Home
          </h2>
          <p className="section-subtitle text-white/60 mx-auto text-center mt-4">
            World-class amenities designed to elevate your everyday living experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.08)" }}>
          {amenities.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group p-8 text-center transition-all duration-300 cursor-default"
              style={{ background: "var(--primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--primary-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--primary)")
              }
            >
              <div
                className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full transition-all duration-300"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <Icon
                  size={24}
                  style={{ color: "var(--accent)" }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-white font-bold text-sm mb-1 uppercase tracking-wide">
                {label}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8"
          style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
        >
          <div>
            <div className="text-white text-xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to experience premium living?
            </div>
            <div className="text-white/60 text-sm">
              Visit our sample flat today — Mon to Sun, 08:00 to 19:00
            </div>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap">
            Book a Site Visit
          </a>
        </div>
      </div>
    </section>
  );
}
