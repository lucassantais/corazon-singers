"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: "2005",
      title: "Naissance de Clos Jouvin Culture",
      desc: "80 adhérents dès la première année, une dizaine de bénévoles engagés.",
      color: "coral",
    },
    {
      year: "2007",
      title: "Autour du Gospel",
      desc: "Premiers concerts avec le Jarrie's Gospel Choir, 750 spectateurs touchés.",
      color: "gold",
    },
    {
      year: "2010",
      title: "Les Droits de l'Homme",
      desc: "1100 spectateurs à l'Espace des 4 Vents de Champagnier.",
      color: "teal",
    },
    {
      year: "2019",
      title: "Résistances",
      desc: "45 bénévoles mobilisés pour un spectacle époustouflant.",
      color: "violet",
    },
    {
      year: "2024",
      title: "Ensemble",
      desc: "Comédie musicale intergénérationnelle, reportage France 3.",
      color: "coral",
    },
    {
      year: "2025",
      title: "CD \"20 Temps\"",
      desc: "Enregistrement studio et tournée dans l'Isère.",
      color: "gold",
    },
  ];

  return (
    <section
      id="apropos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-stage-dark overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-coral-600/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-600/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-coral-500/20 text-coral-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Notre Histoire
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-gold-400 rounded-full mx-auto" />
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-white/80 font-body leading-relaxed mb-6">
              Depuis{" "}
              <span className="text-coral-400 font-bold">septembre 2002</span>,
              les{" "}
              <span className="text-white font-bold">Corazon Singers</span>{" "}
              proposent des spectacles dont la qualité artistique est largement
              reconnue. Ces projets sont portés par l&apos;association{" "}
              <span className="text-gold-400 font-semibold">Clos Jouvin Culture</span>.
            </p>
            <p className="text-lg text-white/80 font-body leading-relaxed mb-6">
              Chaque année, entre{" "}
              <span className="text-teal-400 font-bold">45 et 60 jeunes</span>{" "}
              de 10 à 20 ans montent sur scène, accompagnés de musiciens et
              techniciens professionnels de la scène grenobloise. Nos spectacles
              s&apos;inscrivent dans le cadre{" "}
              <span className="text-white font-semibold">
                &laquo; SPECTACLE VIVANT &raquo;
              </span>
              .
            </p>
            <p className="text-lg text-white/80 font-body leading-relaxed mb-8">
              L&apos;art devient vecteur d&apos;éducation : chaque élève se
              découvre, s&apos;ouvre aux regards des Autres et gagne en
              confiance. La pratique collective développe la sociabilisation et
              le respect.
            </p>

            {/* Quote */}
            <blockquote className="glass border-l-4 border-coral-500 pl-6 py-4 rounded-r-2xl">
              <p className="text-white/90 font-body italic text-lg leading-relaxed">
                &ldquo;La chorale m&apos;a hissée vers le haut et m&apos;a
                appris à être complètement moi. Ici je suis libérée, je me sens
                bien.&rdquo;
              </p>
              <footer className="mt-2 text-coral-400 font-body font-semibold text-sm">
                — Une choriste, Le Dauphiné Libéré 2016
              </footer>
            </blockquote>
          </div>

          {/* Images collage */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-[500px]">
              {/* Main large photo */}
              <div className="absolute top-0 left-0 w-[65%] h-[60%] rounded-3xl overflow-hidden ring-2 ring-coral-500/30 shadow-stage">
                <Image
                  src="/photo-01.jpg"
                  alt="Corazon Singers en concert"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stage-dark/30 to-transparent" />
              </div>

              {/* Second photo */}
              <div className="absolute top-0 right-0 w-[33%] h-[40%] rounded-2xl overflow-hidden ring-2 ring-gold-400/30 shadow-stage">
                <Image
                  src="/photo-05.jpg"
                  alt="Corazon Singers"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Third photo */}
              <div className="absolute bottom-0 left-0 w-[40%] h-[38%] rounded-2xl overflow-hidden ring-2 ring-teal-500/30 shadow-stage">
                <Image
                  src="/photo-09.jpg"
                  alt="Corazon Singers"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Fourth photo */}
              <div className="absolute bottom-0 right-0 w-[57%] h-[57%] rounded-3xl overflow-hidden ring-2 ring-violet-500/30 shadow-stage">
                <Image
                  src="/scene-01.png"
                  alt="Corazon Singers scène"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stage-dark/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-gold-400 rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                  <span className="text-2xl">🎭</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Notre parcours artistique
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-coral-500/50 via-gold-400/50 to-teal-500/50 hidden lg:block" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((m, i) => {
                const colorClasses = {
                  coral: "from-coral-500/20 to-coral-600/10 border-coral-500/30 text-coral-400",
                  gold: "from-gold-400/20 to-gold-500/10 border-gold-400/30 text-gold-400",
                  teal: "from-teal-500/20 to-teal-600/10 border-teal-500/30 text-teal-400",
                  violet: "from-violet-500/20 to-violet-600/10 border-violet-500/30 text-violet-400",
                };
                const cls = colorClasses[m.color as keyof typeof colorClasses];
                return (
                  <div
                    key={i}
                    className={`group glass bg-gradient-to-br ${cls} rounded-2xl p-5 border transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div
                      className={`text-3xl font-display font-black mb-2 ${cls.split(" ").pop()}`}
                    >
                      {m.year}
                    </div>
                    <h4 className="text-white font-body font-bold text-base mb-2">
                      {m.title}
                    </h4>
                    <p className="text-white/60 font-body text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
