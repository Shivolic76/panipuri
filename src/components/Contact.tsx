"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const offices = [
  {
    title: "Sales Office",
    address: "Gate No. 2, Shree Shubh Residency,\n150 ft Canal Road, Dindoli, Surat – 394 210",
    icon: MapPin,
  },
  {
    title: "Phone",
    address: "+91 7986 91 7986\n+91 9876 54 3210",
    icon: Phone,
  },
  {
    title: "Email",
    address: "contact@rudradharadevelopers.com\nsales@rudradharadevelopers.com",
    icon: Mail,
  },
  {
    title: "Office Hours",
    address: "Monday to Sunday\n08:00 AM – 07:00 PM",
    icon: Clock,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full border px-4 py-3 text-sm outline-none transition-all focus:border-[var(--accent)]";
  const inputStyle = { borderColor: "var(--border)", color: "var(--foreground)", background: "#fff" };

  return (
    <section id="contact" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-number">09 — Contact Us</span>
          <div className="divider-accent mx-auto" />
          <h2 className="section-title" style={{ fontFamily: "var(--font-heading)" }}>
            Get in Touch
          </h2>
          <p className="section-subtitle mx-auto text-center mt-3">
            Our team is ready to help you find your dream home. Reach out for site visits, pricing, or any queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {offices.map(({ title, address, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-4 p-5"
                style={{ border: "1px solid var(--border)", background: "var(--light-bg)" }}
              >
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ background: "rgba(201,168,76,0.15)" }}
                >
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: "var(--primary)" }}>
                    {title}
                  </div>
                  <div className="text-sm whitespace-pre-line" style={{ color: "var(--muted)" }}>
                    {address}
                  </div>
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div
              className="w-full overflow-hidden"
              style={{ height: "180px", background: "var(--light-bg)", border: "1px solid var(--border)" }}
            >
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.867!2d72.871!3d21.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA5JzA3LjIiTiA3MsKwNTInMTUuNiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="180"
                style={{ border: 0, filter: "grayscale(30%)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12"
                style={{ border: "1px solid var(--border)", background: "var(--light-bg)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white text-2xl"
                  style={{ background: "var(--accent)" }}
                >
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                  Thank You!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Your enquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: "var(--primary)" }}>
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Rajesh Patel"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: "var(--primary)" }}>
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: "var(--primary)" }}>
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: "var(--primary)" }}>
                      Interested Project
                    </label>
                    <select
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select project</option>
                      <option>Dhruv Park Residency</option>
                      <option>Shree Shubh Residency</option>
                      <option>Balaji Residency</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: "var(--primary)" }}>
                      Unit Type
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select type</option>
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wide block mb-1.5" style={{ color: "var(--primary)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center gap-2">
                  <Send size={15} /> Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
