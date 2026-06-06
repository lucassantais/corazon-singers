"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MUSIC_NOTES = ["♪", "♫", "♬", "♩", "𝄞", "𝄢"];
const WORDS = [
  "Chantons",
  "Dansons",
  "Jouons",
  "Rayonnons",
  "Vibrons",
  "Créons",
];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [notes, setNotes] = useState<
    { id: number; x: number; note: string; delay: number; size: number }[]
  >([]);
  const heroRef = useRef<HTMLDivElement>(null);

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Generate floating notes
  useEffect(() => {
    const generate = () => {
      const newNote = {
        id: Date.now(),
        x: Math.random() * 90 + 5,
        note: MUSIC_NOTES[Math.floor(Math.random() * MUSIC_NOTES.length)],
        delay: Math.random() * 2,
        size: Math.random() * 24 + 16,
      };
      setNotes((prev) => [...prev.slice(-15), newNote]);
    };
    const interval = setInterval(generate, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stage-dark"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-stage-dark via-stage-mid to-stage-dark" />

        {/* Colorful spotlight blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-coral-600/10 blur-[120px] animate-pulse" />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-teal-600/8 blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-gold-400/6 blur-[100px] animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Musical staff lines */}
        {[15, 30, 45, 60, 75].map((top) => (
          <div
            key={top}
            className="staff-line"
            style={{ top: `${top}%`, opacity: 0.03 + Math.random() * 0.04 }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating musical notes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {notes.map((n) => (
          <span
            key={n.id}
            className="absolute note-float text-coral-400/40 select-none"
            style={{
              left: `${n.x}%`,
              bottom: "10%",
              fontSize: `${n.size}px`,
              animationDelay: `${n.delay}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            {n.note}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-24 pb-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-coral-500/20 mb-6 animate-bounce-gentle">
              <span className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="wave-bar bg-coral-400"
                    style={{
                      height: "16px",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </span>
              <span className="text-coral-300 font-body font-semibold text-sm tracking-wider">
                Depuis 2005 · Jarrie, Isère
              </span>
            </div>

            {/* Main title */}
            <h1
              className="font-display font-black leading-none mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl">
                Les
              </span>
              <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-gradient-coral drop-shadow-2xl">
                Corazon
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white/90 drop-shadow-2xl">
                Singers
              </span>
            </h1>

            {/* Animated verb */}
            <div className="h-12 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
              <div
                className="text-2xl sm:text-3xl font-accent text-gold-400 transition-all duration-500"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                {WORDS[currentWord]} ensemble !
              </div>
            </div>

            {/* Description */}
            <p className="text-white/70 font-body text-lg sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Une chorale de collégiens du{" "}
              <span className="text-coral-400 font-semibold">
                Collège Clos Jouvin
              </span>{" "}
              qui unit chant, danse et théâtre pour créer des spectacles vivants
              inoubliables.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { value: "20+", label: "Ans d'histoire" },
                { value: "50+", label: "Artistes sur scène" },
                { value: "15+", label: "Spectacles créés" },
                { value: "10k+", label: "Spectateurs touchés" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-black text-gradient-coral">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50 font-body font-semibold tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://www.helloasso.com/associations/closjouvinculture"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-body font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow shimmer-btn overflow-hidden"
              >
                <span className="relative z-10">🎟 Réserver · 12 & 13 juin</span>
              </a>
              <a
                href="#spectacles"
                className="px-8 py-4 glass border border-white/20 hover:border-coral-500/50 text-white font-body font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                Nos Spectacles
              </a>
            </div>
          </div>

          {/* Right: Hero illustration */}
          <div className="flex-1 flex justify-center lg:justify-end relative max-w-lg w-full">
            {/* Glow rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-coral-500/10 animate-spin-slow" />
              <div
                className="absolute w-64 h-64 rounded-full border border-gold-400/10 animate-spin-slow"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "15s",
                }}
              />
              <div className="absolute w-96 h-96 rounded-full border border-teal-500/10 animate-spin-slow" />
            </div>

            {/* Main image */}
            <div className="relative z-10 w-full max-w-sm lg:max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-stage ring-4 ring-coral-500/20 hover:ring-coral-500/40 transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="/hero-illustration.png"
                  alt="Les Corazon Singers en spectacle"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                  priority
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stage-dark/60 via-transparent to-transparent" />

                {/* Floating badge on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-dark rounded-2xl px-4 py-3">
                    <p className="text-white font-body font-bold text-sm">
                      🎭 Spectacle vivant de qualité professionnelle
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">
                      Collège Clos Jouvin · Jarrie, Isère
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-400 to-coral-500 rounded-2xl flex items-center justify-center text-4xl shadow-glow-gold animate-float-slow z-20">
                🎤
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-violet-500 rounded-2xl flex items-center justify-center text-3xl shadow-glow-teal animate-float-mid z-20"
                style={{ animationDelay: "1s" }}
              >
                🎶
              </div>
              <div
                className="absolute top-1/3 -left-8 w-14 h-14 bg-gradient-to-br from-violet-500 to-coral-500 rounded-xl flex items-center justify-center text-2xl animate-float-slow z-20"
                style={{ animationDelay: "0.5s" }}
              >
                💃
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-gentle">
        <span className="text-white/40 text-xs font-body tracking-widest uppercase">
          Découvrir
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 overflow-hidden">
        <div className="flex gap-0 animate-marquee whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-white/20 text-xs font-body tracking-widest px-8"
            >
              ✦ CHANT ✦ DANSE ✦ THÉÂTRE ✦ COMÉDIE MUSICALE ✦ SPECTACLE VIVANT
              ✦ CORAZON SINGERS ✦ JARRIE ISÈRE
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
