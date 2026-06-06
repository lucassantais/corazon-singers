"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const arts = [
  {
    id: "chant",
    emoji: "🎤",
    title: "Chant",
    subtitle: "Voix & Harmonie",
    description:
      "Au cœur de l'expérience Corazon Singers, le chant réunit les jeunes artistes dans une harmonie collective unique. Des voix de solistes aux chœurs puissants, en passant par des duos émouvants — chaque membre développe ses capacités vocales avec des musiciens professionnels.",
    color: "coral",
    gradient: "from-coral-600/30 via-coral-500/10 to-transparent",
    border: "border-coral-500/30",
    accent: "text-coral-400",
    glow: "shadow-glow",
    image: "/photo-02.jpg",
    details: [
      "Travail vocal individuel et collectif",
      "Solos, duos et polyphonies",
      "Répertoire varié : gospel, pop, classique",
      "Encadrement par des professionnels",
    ],
  },
  {
    id: "danse",
    emoji: "💃",
    title: "Danse",
    subtitle: "Mouvement & Expression",
    description:
      "La danse transforme chaque performance en véritable tableau vivant. Chorégraphies contemporaines, mouvements expressifs et énergie scénique : les Corazon Singers bougent comme des professionnels, alliant technique et émotion dans chaque déplacement.",
    color: "teal",
    gradient: "from-teal-600/30 via-teal-500/10 to-transparent",
    border: "border-teal-500/30",
    accent: "text-teal-400",
    glow: "shadow-glow-teal",
    image: "/scene-02.png",
    details: [
      "Chorégraphies créées pour chaque spectacle",
      "Styles variés : contemporain, jazz, hip-hop",
      "Synchronisation avec la musique",
      "Expression corporelle et gestuelle",
    ],
  },
  {
    id: "theatre",
    emoji: "🎭",
    title: "Théâtre",
    subtitle: "Jeu & Authenticité",
    description:
      "Le théâtre donne une dimension narrative et émotionnelle à chaque spectacle. Textes déclamés, mises en scène soignées, jeux de masques et d'identité — les jeunes artistes explorent des thèmes profonds comme la tolérance, la liberté et le rapport à l'autre.",
    color: "violet",
    gradient: "from-violet-600/30 via-violet-500/10 to-transparent",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    glow: "shadow-glow-violet",
    image: "/scene-05.png",
    details: [
      "Textes écrits par des auteurs confirmés",
      "Mises en scène par des professionnels",
      "Travail sur les émotions et l'expression",
      "Thèmes citoyens et humanistes",
    ],
  },
  {
    id: "comedie",
    emoji: "🌟",
    title: "Comédie Musicale",
    subtitle: "Magie & Grand Spectacle",
    description:
      "La synthèse absolue : chant, danse et théâtre fusionnent pour créer des comédies musicales époustouflantes. De \"Autour du Gospel\" à \"Ensemble\", chaque production est un spectacle total qui captive des milliers de spectateurs à guichet fermé.",
    color: "gold",
    gradient: "from-gold-500/30 via-gold-400/10 to-transparent",
    border: "border-gold-400/30",
    accent: "text-gold-400",
    glow: "shadow-glow-gold",
    image: "/scene-03.png",
    details: [
      "Spectacles complets de 1h30",
      "Jeux de lumières et décors professionnels",
      "Costumes et maquillages élaborés",
      "Souvent joué à guichet fermé",
    ],
  },
];

export function ArtsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeArt, setActiveArt] = useState(0);

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

  const current = arts[activeArt];

  return (
    <section
      id="arts"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a1a 0%, #0f0f24 50%, #0a0a1a 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-1000 ${
            current.color === "coral"
              ? "bg-coral-600/10"
              : current.color === "teal"
                ? "bg-teal-600/10"
                : current.color === "violet"
                  ? "bg-violet-600/10"
                  : "bg-gold-500/8"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-teal-500/20 text-teal-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Nos Disciplines
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Les Arts de la Scène
          </h2>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            Une formation artistique complète qui transforme les collégiens en
            véritables artistes pluridisciplinaires.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-violet-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Tab selector */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {arts.map((art, i) => (
            <button
              key={art.id}
              onClick={() => setActiveArt(i)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-all duration-300 hover:scale-105 ${
                activeArt === i
                  ? `bg-gradient-to-r ${
                      art.color === "coral"
                        ? "from-coral-500 to-coral-600 shadow-glow"
                        : art.color === "teal"
                          ? "from-teal-500 to-teal-600 shadow-glow-teal"
                          : art.color === "violet"
                            ? "from-violet-500 to-violet-600 shadow-glow-violet"
                            : "from-gold-400 to-gold-500 shadow-glow-gold"
                    } text-white`
                  : "glass border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              <span className="text-xl">{art.emoji}</span>
              {art.title}
            </button>
          ))}
        </div>

        {/* Active art display */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div
                className={`relative rounded-3xl overflow-hidden aspect-[4/3] ring-2 ${current.border} shadow-stage transition-all duration-500`}
              >
                <Image
                  src={current.image}
                  alt={`${current.title} - Corazon Singers`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${current.gradient}`}
                />
                {/* Label overlay */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`glass-dark px-4 py-2 rounded-xl border ${current.border}`}
                  >
                    <span className="text-2xl mr-2">{current.emoji}</span>
                    <span
                      className={`font-body font-bold text-sm ${current.accent}`}
                    >
                      {current.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h3
                  className={`text-4xl sm:text-5xl font-display font-black mb-2 ${current.accent}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {current.title}
                </h3>
                <p
                  className={`font-accent text-lg ${current.accent}/80`}
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  {current.subtitle}
                </p>
              </div>

              <p className="text-white/80 font-body text-lg leading-relaxed">
                {current.description}
              </p>

              <ul className="space-y-3">
                {current.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                        current.color === "coral"
                          ? "bg-coral-500/20 text-coral-400"
                          : current.color === "teal"
                            ? "bg-teal-500/20 text-teal-400"
                            : current.color === "violet"
                              ? "bg-violet-500/20 text-violet-400"
                              : "bg-gold-400/20 text-gold-400"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="text-white/70 font-body">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
