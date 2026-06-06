"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const pressQuotes = [
  {
    text: "L'autonomie des jeunes artistes est remarquable : aucune direction de chœur, chaque élève est un acteur-chanteur-danseur qui assume parfaitement son rôle et adopte une véritable posture professionnelle.",
    author: "Isabelle Chourry",
    role: "Professeure d'Éducation Musicale, Inspection Académique de Grenoble",
    source: "Inspection Académique de Grenoble",
    year: "2016",
    color: "coral",
  },
  {
    text: "Le résultat final époustouflant suscite une grande émotion et force l'admiration. L'exigence artistique sans faille, la recherche de soin et de perfection sont constantes.",
    author: "Isabelle Chourry",
    role: "Chargée d'Inspection Académique",
    source: "Inspection Académique de Grenoble",
    year: "2016",
    color: "teal",
  },
  {
    text: "Sur scène les collégiens deviennent eux-mêmes... Les collégiens sont enfin eux-mêmes et bien dans leur peau.",
    author: "Journaliste",
    role: "Le Dauphiné Libéré",
    source: "Dauphiné Libéré",
    year: "Juin 2016",
    color: "violet",
  },
  {
    text: "Ce fut 45 artistes amateurs, accompagnés par des musiciens hors pair qui ont offert une heure et demi de bonheur ! La mise en espace contribua fortement au succès : ambiance cabaret, lumières tamisées...",
    author: "Un spectateur",
    role: "Lettre adressée à l'équipe",
    source: "Courrier de spectateurs",
    year: "2018",
    color: "gold",
  },
  {
    text: "Se déplaçant sur scène, dansant, parlant, ils chantent en solo, en duo, en chœur... un gros travail sur la voix ! Et le résultat en valait la chandelle !",
    author: "Journaliste",
    role: "Le Dauphiné Libéré",
    source: "Dauphiné Libéré",
    year: "21 Mai 2018",
    color: "coral",
  },
  {
    text: "La chorale m'a hissée vers le haut et m'a appris à être complètement moi. Ici je suis libérée, je me sens bien.",
    author: "Une choriste",
    role: "Collégienne, Corazon Singers",
    source: "Dauphiné Libéré",
    year: "2016",
    color: "teal",
  },
];

const mediaLogos = [
  { name: "France 3", emoji: "📺", desc: "Reportage 2025" },
  { name: "Dauphiné Libéré", emoji: "📰", desc: "Plusieurs articles" },
  { name: "Inspection Académique", emoji: "🏛️", desc: "Grenoble" },
  { name: "Site officiel Isère", emoji: "🌐", desc: "Éducation musicale" },
];

export function PressSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0e0e22 100%)" }}
      ref={sectionRef}
    >
      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-600/5 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-gold-400/20 text-gold-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Presse & Témoignages
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ce qu&apos;on dit de nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-teal-500 rounded-full mx-auto" />
        </div>

        {/* Media mentions */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {mediaLogos.map((media) => (
            <div
              key={media.name}
              className="glass border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3 hover:border-gold-400/30 transition-colors"
            >
              <span className="text-2xl">{media.emoji}</span>
              <div>
                <p className="text-white font-body font-bold text-sm">
                  {media.name}
                </p>
                <p className="text-white/50 text-xs">{media.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pressQuotes.map((quote, i) => {
            const colorMap = {
              coral: "border-coral-500/30 bg-coral-500/5",
              teal: "border-teal-500/30 bg-teal-500/5",
              violet: "border-violet-500/30 bg-violet-500/5",
              gold: "border-gold-400/30 bg-gold-400/5",
            };
            const textColor = {
              coral: "text-coral-400",
              teal: "text-teal-400",
              violet: "text-violet-400",
              gold: "text-gold-400",
            };
            const iconColor = {
              coral: "text-coral-500/40",
              teal: "text-teal-500/40",
              violet: "text-violet-500/40",
              gold: "text-gold-400/40",
            };
            const c = colorMap[quote.color as keyof typeof colorMap];
            const tc = textColor[quote.color as keyof typeof textColor];
            const ic = iconColor[quote.color as keyof typeof iconColor];

            return (
              <div
                key={i}
                className={`glass border ${c} rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <Quote size={32} className={`${ic} mb-4`} />
                <p className="text-white/80 font-body italic text-base leading-relaxed mb-6">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <div className="flex items-start justify-between mt-auto">
                  <div>
                    <p className="text-white font-body font-bold text-sm">
                      {quote.author}
                    </p>
                    <p className="text-white/50 font-body text-xs mt-0.5">
                      {quote.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-xs font-body font-semibold ${tc} bg-white/5 px-2 py-1 rounded-full`}
                    >
                      {quote.year}
                    </span>
                    <p className={`text-xs ${tc} mt-1 font-body font-semibold`}>
                      {quote.source}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
