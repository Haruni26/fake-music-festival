"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Lineup", href: "/lineup" },
    { label: "Tickets", href: "/tickets" },
    { label: "Our Partners", href: "/partners" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-black shadow-lg" : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="font-display flex flex-col leading-tight text-white">
          <span className="text-md md:text-2xl tracking-wide">
            Cabana Music Festival
          </span>
          <span className="text-xs md:text-sm text-white/60 font-normal tracking-wide">
            In collaboration with Poinciana light
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-2xl uppercase tracking-wide text-white/90 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
