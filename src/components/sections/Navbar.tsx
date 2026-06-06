"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Music } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Arts", href: "#arts" },
  { label: "Spectacles", href: "#spectacles" },
  { label: "Galerie", href: "#galerie" },
  { label: "Vidéos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stage-dark/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Les Corazon Singers - Accueil"
          >
            <div className="relative w-16 h-12 lg:w-20 lg:h-14 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-110">
              <Image
                src="/logo-bw.png"
                alt="Logo Corazon Singers"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-coral-400 font-body font-semibold tracking-widest uppercase leading-none">
                Les
              </p>
              <p
                className="text-white font-display font-bold text-lg leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Corazon Singers
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-body font-semibold text-white/70 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-coral-500 to-gold-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-body font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral-500/30 shimmer-btn"
            >
              Nous rejoindre
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-stage-dark/98 backdrop-blur-xl border-t border-white/5 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 font-body font-semibold"
              >
                <Music size={16} className="text-coral-500" />
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-body font-bold text-center rounded-xl shimmer-btn"
            >
              Nous rejoindre
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
