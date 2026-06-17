"use client";

const partners = [
  { name: "Birla Cement", abbr: "BIRLA", color: "#004080" },
  { name: "Finolex Pipes", abbr: "FINOLEX", color: "#e31e24" },
  { name: "RR Kabel", abbr: "RR", color: "#1a5276" },
  { name: "Sika India", abbr: "SIKA", color: "#e63212" },
  { name: "Asian Paints", abbr: "ASIAN", color: "#f4a900" },
  { name: "Kajaria Tiles", abbr: "KAJARIA", color: "#2c3e50" },
  { name: "Havells", abbr: "HAVELLS", color: "#e60012" },
  { name: "Saint-Gobain", abbr: "S-G", color: "#006cb5" },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Dhruv Park Residency",
    quote:
      "RudraDhara delivered exactly what they promised. The quality of construction and the timely handover exceeded my expectations. My family is absolutely delighted with our new home.",
    avatar: "RP",
  },
  {
    name: "Priya Shah",
    location: "Shree Shubh Residency",
    quote:
      "From the booking process to possession, the entire experience was smooth and transparent. The amenities are top-notch and the neighbourhood is excellent for raising children.",
    avatar: "PS",
  },
  {
    name: "Mehul Desai",
    location: "Balaji Residency",
    quote:
      "I've been to multiple site visits across Surat before settling on RudraDhara. The construction quality, use of branded materials, and location made it an easy choice.",
    avatar: "MD",
  },
];

export default function Partners() {
  return (
    <>
      {/* Testimonials */}
      <section className="py-24" style={{ background: "var(--light-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-number">06 — Testimonials</span>
            <div className="divider-accent mx-auto" />
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              What Our Residents Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 bg-white"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="text-4xl mb-4" style={{ color: "var(--accent)", fontFamily: "Georgia, serif" }}>
                  "
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: "var(--primary)" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--primary)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--accent)" }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t" style={{ background: "#fff", borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-number">07 — Our Partners</span>
            <div className="divider-accent mx-auto" />
            <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
              Built with Trusted Brands
            </h2>
            <p className="section-subtitle mx-auto text-center mt-3">
              We partner only with India's most trusted construction material suppliers.
            </p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center justify-center p-4 rounded transition-all duration-200 cursor-default"
                style={{ border: "1px solid var(--border)" }}
                title={p.name}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--light-bg)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-black mb-2"
                  style={{ background: p.color }}
                >
                  {p.abbr.slice(0, 2)}
                </div>
                <div className="text-xs text-center font-semibold" style={{ color: "var(--muted)" }}>
                  {p.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
