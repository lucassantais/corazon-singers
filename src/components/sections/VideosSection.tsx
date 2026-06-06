"use client";

import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ", // placeholder - to be replaced with actual IDs
    title: "Ensemble - Comédie Musicale 2025",
    description:
      "3 et 4 juin 2025 à L'Oriel de Varces. La dernière grande production des Corazon Singers.",
    thumbnail: "/cd-ensemble.jpg",
    year: "2025",
    type: "Comédie Musicale",
    color: "teal",
    realEmbed: false,
    youtubeSearch: "Corazon Singers Ensemble 2025",
  },
  {
    id: "RqH66mNFBLM",
    title: "Ensemble sur les Chemins de nos Vies",
    description:
      "Mai et Juin 2024 à la Salle Navarre de Champ-sur-Drac. 3 représentations sold out.",
    thumbnail: "/scene-01.png",
    year: "2024",
    type: "Comédie Musicale",
    color: "violet",
    realEmbed: false,
    youtubeSearch: "Corazon Singers 2024",
  },
  {
    id: "FjNdYp2R9mw",
    title: "Résistances - Le Spectacle",
    description:
      "Le spectacle époustouflant de 2019. 45 bénévoles, des décors et costumes somptueux.",
    thumbnail: "/cd-resistances.jpg",
    year: "2019",
    type: "Comédie Musicale",
    color: "coral",
    realEmbed: false,
    youtubeSearch: "Corazon Singers Résistances 2019",
  },
  {
    id: "mGnkfd6gAp8",
    title: "Autour du Gospel - Concert",
    description:
      "Le concert fondateur avec le Jarrie's Gospel Choir. 750 spectateurs enchantés.",
    thumbnail: "/autour-du-gospel.png",
    year: "2008",
    type: "Concert",
    color: "gold",
    realEmbed: false,
    youtubeSearch: "Corazon Singers Gospel Jarrie",
  },
];

const colorMap = {
  coral: { badge: "bg-coral-500/20 text-coral-300", play: "bg-coral-500 hover:bg-coral-400", text: "text-coral-400" },
  teal: { badge: "bg-teal-500/20 text-teal-300", play: "bg-teal-500 hover:bg-teal-400", text: "text-teal-400" },
  violet: { badge: "bg-violet-500/20 text-violet-300", play: "bg-violet-500 hover:bg-violet-400", text: "text-violet-400" },
  gold: { badge: "bg-gold-400/20 text-gold-300", play: "bg-gold-400 hover:bg-gold-300", text: "text-gold-400" },
};

export function VideosSection() {
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
      id="videos"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-stage-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-coral-600/5 blur-[200px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-coral-500/20 text-coral-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Vidéos
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Revivez nos spectacles
          </h2>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            Retrouvez nos spectacles en vidéo et plongez dans l&apos;univers
            des Corazon Singers.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-coral-500 to-violet-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, i) => {
            const c = colorMap[video.color as keyof typeof colorMap];
            return (
              <div
                key={i}
                className={`group glass border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-stage ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-stage-mid overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-stage-dark/60 group-hover:bg-stage-dark/40 transition-colors duration-300" />

                  {/* Play button */}
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.youtubeSearch)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Voir ${video.title}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${c.play} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110`}
                    >
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </a>

                  {/* Year badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-body font-bold backdrop-blur-sm ${c.badge}`}
                    >
                      {video.year} · {video.type}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3
                    className="text-xl font-display font-bold text-white mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {video.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.youtubeSearch)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-body font-semibold ${c.text} hover:opacity-80 transition-opacity`}
                  >
                    <ExternalLink size={14} />
                    Rechercher sur YouTube
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* YouTube CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">▶️</div>
            <h3
              className="text-2xl font-display font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Plus de vidéos sur YouTube
            </h3>
            <p className="text-white/60 font-body mb-6">
              Retrouvez l&apos;intégralité de nos captations vidéo, reportages
              et extraits de spectacles sur notre chaîne YouTube.
            </p>
            <a
              href="https://www.youtube.com/results?search_query=Corazon+Singers+Jarrie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF0000] hover:bg-[#cc0000] text-white font-body font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <polygon points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" fill="white" />
              </svg>
              Voir notre chaîne YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
