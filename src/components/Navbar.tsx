"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "Projects",
    href: "#projects",
    children: [
      { label: "Dhruv Park Residency", href: "#dhruv-park" },
      { label: "Shree Shubh Residency", href: "#shubh-residency" },
      { label: "Balaji Residency", href: "#balaji-residency" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Gallery", href: "#gallery" },
      { label: "Amenities", href: "#amenities" },
      { label: "Floor Plans", href: "#floor-plans" },
      { label: "News & Press", href: "#news" },
      { label: "FAQs", href: "#contact" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 text-sm text-white" style={{ background: "var(--primary)" }}>
        <span className="flex items-center gap-2">
          <Phone size={13} />
          +91 7986 91 7986 &nbsp;|&nbsp; contact@rudradharadevelopers.com
        </span>
        <span>Mon–Sun &nbsp; 08:00 – 19:00</span>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ background: "#fff" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image
              src="https://rudradharadevelopers.com/wp-content/uploads/2023/04/Picsart_23-04-04_18-20-27-158.png"
              alt="RudraDhara Developers"
              width={200}
              height={56}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-5 text-sm font-semibold tracking-wide uppercase transition-colors duration-200"
                  style={{ color: "var(--primary)" }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} />}
                </a>
                {link.children && openDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 min-w-[210px] shadow-xl py-2 z-50"
                    style={{ background: "#fff", border: "1px solid var(--border)" }}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm font-medium transition-colors duration-150"
                        style={{ color: "var(--foreground)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "var(--light-bg)")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn-primary hidden md:inline-flex text-sm">
            Book Now
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--primary)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t px-6 py-4 space-y-2"
            style={{ background: "#fff", borderColor: "var(--border)" }}
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-semibold uppercase"
                  style={{ color: "var(--primary)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-1.5 text-sm"
                        style={{ color: "var(--muted)" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#contact" className="btn-primary mt-4 w-full justify-center">
              Book Now
            </a>
          </div>
        )}
      </header>
    </>
  );
}
