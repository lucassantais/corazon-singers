"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Users, Music, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "adhesion",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(
      formState.subject === "adhesion"
        ? "Demande d'adhésion aux Corazon Singers"
        : formState.subject === "spectacle"
          ? "Réservation / Renseignements spectacle"
          : formState.subject === "partenariat"
            ? "Proposition de partenariat"
            : "Contact Corazon Singers"
    );
    const body = encodeURIComponent(
      `Nom : ${formState.name}\nEmail : ${formState.email}\n\n${formState.message}`
    );
    window.open(
      `mailto:closjouvinculture@orange.fr?subject=${subject}&body=${body}`
    );
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-stage-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-coral-600/8 blur-[200px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-teal-500/20 text-teal-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Contactez-nous
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rejoignez l&apos;Aventure
          </h2>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            Vous souhaitez adhérer, réserver des places ou simplement en savoir
            plus ? Nous serons ravis de vous répondre.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-coral-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Cards */}
            {[
              {
                icon: <Mail size={24} />,
                title: "Email",
                value: "closjouvinculture@orange.fr",
                desc: "Réponse sous 48h",
                color: "coral",
                href: "mailto:closjouvinculture@orange.fr",
              },
              {
                icon: <MapPin size={24} />,
                title: "Adresse",
                value: "227 rue Marcel Paul",
                desc: "38560 Champ-sur-Drac",
                color: "teal",
                href: "https://maps.google.com/?q=227+rue+Marcel+Paul+38560+Champ-sur-Drac",
              },
              {
                icon: <Users size={24} />,
                title: "Association",
                value: "Clos Jouvin Culture",
                desc: "Association loi 1901",
                color: "violet",
                href: null,
              },
              {
                icon: <Music size={24} />,
                title: "Répétitions",
                value: "Chaque semaine",
                desc: "Collège Clos Jouvin – Jarrie",
                color: "gold",
                href: null,
              },
            ].map((item) => {
              const colorBg = {
                coral: "bg-coral-500/10 border-coral-500/30 text-coral-400",
                teal: "bg-teal-500/10 border-teal-500/30 text-teal-400",
                violet: "bg-violet-500/10 border-violet-500/30 text-violet-400",
                gold: "bg-gold-400/10 border-gold-400/30 text-gold-400",
              };
              const c = colorBg[item.color as keyof typeof colorBg];
              const El = item.href ? "a" : "div";
              const props = item.href
                ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <El
                  key={item.title}
                  {...props}
                  className={`flex items-center gap-4 glass border ${c.split(" ").slice(1).join(" ")} rounded-2xl p-5 ${item.href ? "hover:scale-[1.02] cursor-pointer" : ""} transition-all duration-300 hover:shadow-lg`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-body font-semibold tracking-wider uppercase">
                      {item.title}
                    </p>
                    <p className="text-white font-body font-bold text-base mt-0.5">
                      {item.value}
                    </p>
                    <p className="text-white/50 text-sm font-body">{item.desc}</p>
                  </div>
                </El>
              );
            })}

            {/* Join CTA */}
            <div className="glass border border-coral-500/30 bg-coral-500/5 rounded-3xl p-6">
              <h3
                className="text-xl font-display font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                🎭 Rejoindre les Corazon Singers
              </h3>
              <p className="text-white/70 font-body text-sm leading-relaxed mb-4">
                Tu es collégien(ne) au Collège Clos Jouvin et tu veux chanter,
                danser et jouer ? Les Corazon Singers t&apos;accueillent avec
                joie ! Parles-en à ton/ta professeur(e) d&apos;éducation
                musicale ou contacte-nous directement.
              </p>
              <a
                href="mailto:closjouvinculture@orange.fr?subject=Demande%20d'adhésion%20Corazon%20Singers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-body font-bold rounded-full transition-all duration-300 hover:scale-105 shimmer-btn"
              >
                <Mail size={16} />
                Nous contacter par email
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {submitted ? (
              <div className="glass border border-teal-500/30 rounded-3xl p-10 text-center">
                <CheckCircle
                  size={56}
                  className="text-teal-400 mx-auto mb-4"
                />
                <h3
                  className="text-2xl font-display font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message préparé !
                </h3>
                <p className="text-white/70 font-body mb-6">
                  Votre client mail s&apos;est ouvert avec votre message.
                  Envoyez-le pour nous contacter.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 glass border border-white/20 text-white font-body font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <div className="glass border border-white/10 rounded-3xl p-8">
                <h3
                  className="text-2xl font-display font-bold text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Envoyer un message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 font-body text-sm font-semibold mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Prénom Nom"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder-white/30 focus:outline-none focus:border-coral-500/50 focus:bg-white/8 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 font-body text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="votre@email.fr"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder-white/30 focus:outline-none focus:border-coral-500/50 focus:bg-white/8 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 font-body text-sm font-semibold mb-2">
                      Sujet
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body focus:outline-none focus:border-coral-500/50 transition-colors"
                    >
                      <option value="adhesion" className="bg-stage-dark">Adhésion / Rejoindre la chorale</option>
                      <option value="spectacle" className="bg-stage-dark">Réservation / Spectacles</option>
                      <option value="partenariat" className="bg-stage-dark">Partenariat / Collaboration</option>
                      <option value="autre" className="bg-stage-dark">Autre question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/60 font-body text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          message: e.target.value,
                        })
                      }
                      placeholder="Votre message..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-body placeholder-white/30 focus:outline-none focus:border-coral-500/50 focus:bg-white/8 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-400 hover:to-coral-500 text-white font-body font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow shimmer-btn"
                  >
                    <Send size={20} />
                    Envoyer le message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
