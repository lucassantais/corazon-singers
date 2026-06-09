"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const upcomingShow = {
  year: "2026",
  title: "Une histoire de Sherlock",
  type: "Comédie Musicale",
  theme: "Mystère & Aventure",
  description:
    "1888. Londres se réveille. Un tueur en série frappe pour la troisième fois. Seul point commun : un signe mystérieux peint en rouge. L'Inspecteur Lestrade demande à Sherlock Holmes son aide... 40 artistes sur scène (8 à 20 ans), adultes amateurs et intermittents grenoblois.",
  audience: null,
  image: "/image-comedie-musicale-2026.png",
  cd: null,
  color: "violet",
  venues: ["Théâtre Navarre · Champ-sur-Drac"],
  dates: ["Vendredi 12 juin 2026 · 20h", "Samedi 13 juin 2026 · 20h"],
  ticketUrl: "https://www.helloasso.com/associations/closjouvinculture",
  isUpcoming: true,
};

const shows = [
  {
    year: "2002–2006",
    title: "Thobiko",
    type: "Concert",
    theme: "Liberté & Tolérance",
    description:
      "60 jeunes de la Villeneuve et de Jarrie se rencontrent, se côtoient et abordent les questions de liberté et de tolérance. Ensemble, ils abordent le sujet du monothéisme dans le monde d'aujourd'hui.",
    audience: null,
    image: "/thobiko.jpg",
    cd: "/cd-thobiko.jpg",
    color: "teal",
    venues: ["Jarrie & Villeneuve"],
  },
  {
    year: "2007–2009",
    title: "Autour du Gospel",
    type: "Concert",
    theme: "Lutte contre le Racisme & Tolérance",
    description:
      "Lutte contre le Racisme, l'Exclusion et apologie de la Tolérance. Sur scène, 2 chœurs : Les Corazon Singers (une cinquantaine de jeunes) et le Jarrie's Gospel Choir (une trentaine d'adultes).",
    audience: "750",
    image: "/autour-du-gospel.png",
    cd: "/cd-2008-2009.jpg",
    color: "gold",
    venues: ["Église Notre-Dame-de-Commiers", "Eybens"],
  },
  {
    year: "2010–2012",
    title: "Les Droits de l'Homme",
    type: "Concert",
    theme: "Liberté & Égalité des droits",
    description:
      "Travail autour de la Déclaration Universelle des Droits de l'Homme. Respect des différences, tolérance et égalité comme thèmes centraux.",
    audience: "1100",
    image: "/photo-13.jpg",
    cd: null,
    color: "teal",
    venues: ["Espace des 4 Vents – Champagnier"],
  },
  {
    year: "2013–2015",
    title: "Les Rêves",
    type: "Spectacle",
    theme: "Respect, Égalité & Espoir",
    description:
      "La notion de Respect, d'Égalité entre les Hommes, notion d'Avenir et d'Accomplissement de chacun, afin que tout Homme puisse avoir l'Espoir de connaître une vie meilleure.",
    audience: null,
    image: "/scene-07.png",
    cd: null,
    color: "violet",
    venues: ["Salle culturelle de Jarrie"],
  },
  {
    year: "2016–2018",
    title: "L'Équilibre & Filles et Garçons",
    type: "Spectacle",
    theme: "Liberté d'être soi · Amour & Amitié",
    description:
      "Entre solos, danses, masques et couleurs : un spectacle sur la liberté, la démocratie et le bonheur d'être pleinement soi. Salué par l'Inspection Académique de Grenoble.",
    audience: "1500",
    image: "/photo-equilibre-filles.jpg",
    cd: "/cd-fille-garcon.jpg",
    color: "coral",
    venues: ["Salle culturelle de Jarrie", "Salle des Fêtes de Jarrie"],
    quote:
      "\"L'autonomie des jeunes artistes est remarquable.\" — Inspection Académique de Grenoble",
  },
  {
    year: "2018",
    title: "Parcelles d'Amour",
    type: "Spectacle",
    theme: "Amour & Respect",
    description:
      "L'Amour, vecteur de Tolérance et d'Ouverture à l'Autre. Il est une énergie qui émane de notre être et dépasse la relation duelle. Il correspond au RESPECT que l'on porte au Monde : à tous les êtres vivants, à tous les Hommes.",
    audience: null,
    image: "/photo-parcelles-amour.jpg",
    cd: null,
    color: "gold",
    venues: ["Salle des Fêtes de Jarrie"],
  },
  {
    year: "2019–2021",
    title: "Résister pour Exister Ensemble",
    type: "Comédie Musicale",
    theme: "Résistance & Liberté de pensée",
    description:
      "Face à l'influence des GAFAM et des algorithmes, préserver son esprit critique est essentiel pour rester libre. Construire son bonheur, c'est apprendre à penser par soi-même et privilégier l'authenticité.",
    audience: "800",
    image: "/photo-17.jpg",
    cd: "/cd-resistances.jpg",
    color: "violet",
    venues: ["Salle des Fêtes d'Échirolles"],
  },
  {
    year: "2022",
    title: "Fils ou Filles d'Immigrés",
    type: "Spectacle",
    theme: "Tolérance & Diversité des Cultures",
    description:
      "Amener chacun à parler de soi et de s'ouvrir à l'Altérité. Aborder la notion de Tolérance et de l'Acceptation de la différence. Autour de l'Immigration italienne notamment, mais aussi de la diversité des Cultures, de la question de nos origines.",
    audience: null,
    image: "/photo-21.jpg",
    cd: null,
    color: "teal",
    venues: ["Salle culturelle de Jarrie"],
  },
  {
    year: "2024–2025",
    title: "Ensemble",
    type: "Comédie Musicale",
    theme: "Relations Intergénérationnelles",
    description:
      "Entre parole des jeunes et celle des anciens, comment aborder les difficultés de compréhension qui peuvent exister entre les générations ? Quels sont les possibles rapprochements ? Comment construire un monde plus inclusif.",
    audience: "1200",
    image: "/cd-ensemble.jpg",
    cd: "/cd-ensemble.jpg",
    color: "coral",
    venues: [
      "L'Oriel – Varces",
      "Prisme de Seyssins",
      "CSC Malraux – Jarrie",
    ],
    isLatest: true,
  },
];

export function ShowsSection() {
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
      id="spectacles"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-stage-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-coral-600/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-violet-500/20 text-violet-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Nos Productions
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Spectacles & Concerts
          </h2>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            20 ans de créations artistiques, des milliers de spectateurs émus.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-coral-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Upcoming show highlight */}
        <div
          className={`mb-12 transition-all duration-1000 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative glass border border-violet-500/40 rounded-3xl overflow-hidden hover:border-violet-500/70 transition-all duration-300 hover:shadow-glow-violet">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-transparent to-coral-600/10" />

            <div className="relative flex flex-col lg:flex-row gap-0">
              {/* Image */}
              <div className="relative lg:w-80 h-56 lg:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={upcomingShow.image}
                  alt={upcomingShow.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stage-dark/60 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-stage-dark/60 to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-center gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-body font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {upcomingShow.type}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-bold bg-coral-500 text-white animate-pulse">
                    ★ À venir
                  </span>
                </div>

                <div>
                  <h3
                    className="text-3xl sm:text-4xl font-display font-black text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {upcomingShow.title}
                  </h3>
                  <p className="text-violet-400 font-body font-semibold">{upcomingShow.theme}</p>
                </div>

                <p className="text-white/60 font-body text-sm leading-relaxed max-w-xl">
                  {upcomingShow.description}
                </p>

                {/* Dates */}
                <div className="flex flex-wrap gap-3">
                  {upcomingShow.dates.map((d, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 glass border border-violet-500/20 rounded-xl text-white/80 font-body text-sm font-semibold"
                    >
                      🗓 {d}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2 text-white/50 font-body text-sm">
                    📍 {upcomingShow.venues[0]}
                  </span>
                  <a
                    href={upcomingShow.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-coral-500 hover:from-violet-400 hover:to-coral-400 text-white font-body font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow shimmer-btn"
                  >
                    🎟 Réserver mes places
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past shows title */}
        <h3 className="text-white/50 font-body font-semibold text-sm tracking-widest uppercase mb-6 text-center">
          — Productions passées —
        </h3>

        {/* Shows grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {shows.map((show, i) => {
            const colorMap = {
              coral: {
                badge: "bg-coral-500/20 text-coral-300 border-coral-500/30",
                border: "border-coral-500/30 hover:border-coral-500/60",
                glow: "hover:shadow-glow",
                text: "text-coral-400",
                bar: "bg-coral-500",
              },
              gold: {
                badge: "bg-gold-400/20 text-gold-300 border-gold-400/30",
                border: "border-gold-400/30 hover:border-gold-400/60",
                glow: "hover:shadow-glow-gold",
                text: "text-gold-400",
                bar: "bg-gold-400",
              },
              teal: {
                badge: "bg-teal-500/20 text-teal-300 border-teal-500/30",
                border: "border-teal-500/30 hover:border-teal-500/60",
                glow: "hover:shadow-glow-teal",
                text: "text-teal-400",
                bar: "bg-teal-500",
              },
              violet: {
                badge: "bg-violet-500/20 text-violet-300 border-violet-500/30",
                border: "border-violet-500/30 hover:border-violet-500/60",
                glow: "hover:shadow-glow-violet",
                text: "text-violet-400",
                bar: "bg-violet-500",
              },
            };
            const c = colorMap[show.color as keyof typeof colorMap];

            return (
              <div
                key={i}
                className={`group glass border ${c.border} ${c.glow} rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={show.image}
                    alt={show.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stage-dark via-stage-dark/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-body font-bold border backdrop-blur-sm ${c.badge}`}
                    >
                      {show.type}
                    </span>
                    {show.isLatest && (
                      <span className="px-3 py-1 rounded-full text-xs font-body font-bold bg-coral-500 text-white animate-pulse">
                        ★ Dernière production
                      </span>
                    )}
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-3 right-3">
                    <span className={`text-2xl font-display font-black ${c.text}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {show.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3
                      className="text-xl font-display font-bold text-white group-hover:text-white/90 transition-colors"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {show.title}
                    </h3>
                    <p className={`text-sm font-body font-semibold ${c.text} mt-0.5`}>
                      {show.theme}
                    </p>
                  </div>

                  <p className="text-white/60 font-body text-sm leading-relaxed line-clamp-3">
                    {show.description}
                  </p>

                  {show.quote && (
                    <blockquote className="text-white/50 font-body italic text-xs border-l-2 border-white/20 pl-3">
                      {show.quote}
                    </blockquote>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-white/40 font-body text-xs">
                        👥
                      </span>
                      <span className={`font-body font-bold text-sm ${c.text}`}>
                        ~{show.audience} spectateurs
                      </span>
                    </div>
                    {show.cd && (
                      <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded overflow-hidden">
                          <Image
                            src={show.cd}
                            alt={`CD ${show.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-white/40 font-body text-xs">CD</span>
                      </div>
                    )}
                  </div>

                  {/* Venues */}
                  <div className="flex flex-wrap gap-1">
                    {show.venues.slice(0, 2).map((v, j) => (
                      <span
                        key={j}
                        className="text-xs text-white/40 font-body bg-white/5 rounded-full px-2 py-0.5"
                      >
                        📍 {v}
                      </span>
                    ))}
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
