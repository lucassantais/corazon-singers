import Image from "next/image";
import { Mail, MapPin, Heart } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Arts", href: "#arts" },
  { label: "Spectacles", href: "#spectacles" },
  { label: "Galerie", href: "#galerie" },
  { label: "Vidéos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573564094971&locale=fr_FR",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/explore/tags/corazonsingers/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "hover:text-[#E4405F]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/results?search_query=Corazon+Singers+Jarrie",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "hover:text-[#FF0000]",
  },
];

const spectacles = [
  "Autour du Gospel (2007–2009)",
  "Les Droits de l'Homme (2010–2012)",
  "L'Équilibre (2016)",
  "Filles & Garçons (2018)",
  "Résistances (2019)",
  "Ensemble (2024–2025)",
];

export function Footer() {
  return (
    <footer className="relative bg-stage-dark border-t border-white/5 overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-coral-600/5 blur-[150px] rounded-full" />

      {/* Pre-footer CTA */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass border border-coral-500/20 rounded-3xl p-8 text-center bg-gradient-to-br from-coral-500/10 to-violet-500/5">
            <div className="text-4xl mb-3">🎭</div>
            <h3
              className="text-2xl sm:text-3xl font-display font-black text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prêt(e) à rejoindre l&apos;aventure ?
            </h3>
            <p className="text-white/70 font-body max-w-xl mx-auto mb-6">
              Tu es collégien(ne) à Jarrie et tu veux monter sur scène ? Les
              portes des Corazon Singers sont ouvertes !
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:closjouvinculture@orange.fr?subject=Adhésion Corazon Singers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-body font-bold rounded-full transition-all duration-300 hover:scale-105 shimmer-btn"
              >
                <Mail size={16} />
                Nous rejoindre
              </a>
              <a
                href="#spectacles"
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/20 hover:border-white/40 text-white font-body font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                Voir nos spectacles
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-coral-500/30">
                <Image src="/logo-bw.png" alt="Logo Corazon Singers" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs text-coral-400 font-body font-semibold tracking-widest uppercase">Les</p>
                <p className="font-display font-bold text-lg text-white leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Corazon Singers
                </p>
              </div>
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed mb-5">
              Chorale artistique du Collège Clos Jouvin à Jarrie. Chant, danse
              et théâtre depuis 2005.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 ${s.color} transition-all duration-300 hover:scale-110 hover:border-white/20`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-body font-bold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-coral-400 font-body text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1"
                  >
                    <span className="text-coral-600 text-xs">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spectacles */}
          <div>
            <h4 className="text-white font-body font-bold text-sm tracking-wider uppercase mb-4">
              Nos Spectacles
            </h4>
            <ul className="space-y-2">
              {spectacles.map((s) => (
                <li key={s}>
                  <span className="text-white/50 font-body text-sm flex items-start gap-1">
                    <span className="text-gold-500 text-xs mt-1 flex-shrink-0">✦</span>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-body font-bold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:closjouvinculture@orange.fr"
                className="flex items-start gap-2 text-white/50 hover:text-coral-400 transition-colors group"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-coral-500" />
                <span className="font-body text-sm">closjouvinculture@orange.fr</span>
              </a>
              <div className="flex items-start gap-2 text-white/50">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-teal-500" />
                <div className="font-body text-sm">
                  <p>Collège Clos Jouvin</p>
                  <p>Jarrie, Isère (38560)</p>
                </div>
              </div>

              {/* Domain */}
              <div className="mt-4 glass border border-white/10 rounded-xl p-3">
                <p className="text-white/40 text-xs font-body">Site officiel</p>
                <p className="text-white/70 font-body font-semibold text-sm">corazonsingers.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-white/30 font-body text-sm">
              © {new Date().getFullYear()} Les Corazon Singers · Association Clos Jouvin Culture · Jarrie, Isère
            </p>
            <p className="flex items-center gap-1.5 text-white/30 font-body text-sm">
              Fait avec <Heart size={14} className="text-coral-500" /> pour la jeunesse artistique
            </p>
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="relative border-t border-white/5 overflow-hidden">
        <div className="flex gap-0 animate-marquee-reverse whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-white/10 text-xs font-body tracking-widest px-8">
              ✦ CHANT ✦ DANSE ✦ THÉÂTRE ✦ COMÉDIE MUSICALE ✦ SPECTACLE VIVANT ✦ CORAZON SINGERS
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
