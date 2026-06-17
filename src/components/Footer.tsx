"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const SocialIcons = {
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  Youtube: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1a2b4a"/></svg>
  ),
  Twitter: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
};

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  { label: "Dhruv Park Residency", href: "#dhruv-park" },
  { label: "Shree Shubh Residency", href: "#shubh-residency" },
  { label: "Balaji Residency", href: "#balaji-residency" },
];

const unitTypes = [
  { label: "1 BHK Apartments", href: "#floor-plans" },
  { label: "2 BHK Apartments", href: "#floor-plans" },
  { label: "3 BHK Apartments", href: "#floor-plans" },
  { label: "Premium Villas", href: "#projects" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--primary)", color: "#fff" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Image
              src="https://rudradharadevelopers.com/wp-content/uploads/2023/04/Picsart_23-04-04_18-20-27-158.png"
              alt="RudraDhara Developers"
              width={180}
              height={50}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Building premium residential communities in Surat since 2016. We craft homes that become
            legacies — built with trust, delivered with pride.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: SocialIcons.Facebook, href: "#" },
              { Icon: SocialIcons.Instagram, href: "#" },
              { Icon: SocialIcons.Youtube, href: "#" },
              { Icon: SocialIcons.Twitter, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.08)", color: "var(--accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
                }
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4
            className="text-sm font-bold uppercase tracking-widest mb-5"
            style={{ color: "var(--accent)" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "var(--accent)" }}>›</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4
            className="text-sm font-bold uppercase tracking-widest mb-5"
            style={{ color: "var(--accent)" }}
          >
            Our Projects
          </h4>
          <ul className="space-y-2 mb-6">
            {projects.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "var(--accent)" }}>›</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
          <h4
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)" }}
          >
            Property Types
          </h4>
          <ul className="space-y-2">
            {unitTypes.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span style={{ color: "var(--accent)" }}>›</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-sm font-bold uppercase tracking-widest mb-5"
            style={{ color: "var(--accent)" }}
          >
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-white/60">
              <MapPin size={15} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
              Gate No. 2, Shree Shubh Residency, 150 ft Canal Road, Dindoli, Surat – 394 210
            </li>
            <li className="flex gap-3 text-sm text-white/60">
              <Phone size={15} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
              +91 7986 91 7986
            </li>
            <li className="flex gap-3 text-sm text-white/60">
              <Mail size={15} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
              contact@rudradharadevelopers.com
            </li>
            <li className="flex gap-3 text-sm text-white/60">
              <Clock size={15} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
              Mon – Sun: 08:00 AM to 07:00 PM
            </li>
          </ul>

          <div className="mt-6">
            <a href="#contact" className="btn-primary text-xs">
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2024 RudraDhara Developers. All rights reserved.</span>
          <span>RERA Registered | MahaRERA No. P51700000000</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
