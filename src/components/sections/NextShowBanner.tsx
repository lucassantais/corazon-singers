"use client";

import { Calendar, MapPin, Ticket } from "lucide-react";

export function NextShowBanner() {
  return (
    <div className="relative bg-gradient-to-r from-violet-900/80 via-stage-dark to-coral-900/80 border-y border-coral-500/30 overflow-hidden">
      {/* Animated glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral-500/5 via-violet-500/10 to-coral-500/5 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: label */}
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-coral-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-coral-500" />
            </span>
            <span className="text-coral-300 font-body font-bold text-sm tracking-widest uppercase">
              Prochain spectacle
            </span>
          </div>

          {/* Center: show info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              <p className="text-white font-display font-black text-lg sm:text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Une histoire de Sherlock
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-1">
                <span className="flex items-center gap-1 text-white/60 font-body text-sm">
                  <Calendar size={13} />
                  12 &amp; 13 juin 2026 · 20h
                </span>
                <span className="flex items-center gap-1 text-white/60 font-body text-sm">
                  <MapPin size={13} />
                  Théâtre Navarre · Champ-sur-Drac
                </span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <a
            href="https://www.helloasso.com/associations/closjouvinculture"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-body font-bold rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-glow whitespace-nowrap shimmer-btn"
          >
            <Ticket size={16} />
            Réserver mes places
          </a>
        </div>
      </div>
    </div>
  );
}
