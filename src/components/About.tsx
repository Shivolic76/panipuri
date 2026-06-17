"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Building2, Calendar } from "lucide-react";

const stats = [
  { icon: Building2, value: 12, suffix: "+", label: "Total Projects" },
  { icon: Users, value: 680, suffix: "+", label: "Happy Families" },
  { icon: Award, value: 8, suffix: "+", label: "Years Experience" },
  { icon: Calendar, value: 95, suffix: "%", label: "On-Time Delivery" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function StatCard({ icon: Icon, value, suffix, label }: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center p-8">
      <div
        className="w-14 h-14 mx-auto mb-4 flex items-center justify-center"
        style={{ background: "rgba(201,168,76,0.12)", borderRadius: "50%" }}
      >
        <Icon size={26} style={{ color: "var(--accent)" }} />
      </div>
      <div className="stat-counter">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "var(--light-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div>
            <span className="section-number">01 — About Us</span>
            <div className="divider-accent" />
            <h2 className="section-title mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Building Dreams,<br />Crafting Legacies
            </h2>
            <p className="section-subtitle mb-6">
              RudraDhara Developers has been redefining residential living in Surat for over 8 years.
              We blend innovative architecture with sustainable construction practices to deliver homes
              that stand the test of time.
            </p>
            <p className="section-subtitle mb-8">
              Our projects in Karadva, Deladva, and along the 150 ft Canal Road are a testament to
              our commitment to quality, transparency, and customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                Explore Projects
              </a>
              <a href="#contact" className="btn-outline">
                Talk to Us
              </a>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden" style={{ height: "240px" }}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Modern apartment building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden" style={{ height: "160px" }}>
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80"
                alt="Interior living room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden" style={{ height: "160px" }}>
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80"
                alt="Kitchen interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* accent badge */}
            <div
              className="absolute -bottom-4 -left-4 px-5 py-4 text-white shadow-xl"
              style={{ background: "var(--primary)" }}
            >
              <div className="text-3xl font-black" style={{ color: "var(--accent)" }}>
                8+
              </div>
              <div className="text-xs uppercase tracking-widest mt-0.5">Years of Trust</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
          style={{ background: "#fff", borderTop: "4px solid var(--accent)" }}
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
