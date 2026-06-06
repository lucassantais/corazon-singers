"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const photos = [
  { src: "/photo-01.jpg", alt: "Concert Corazon Singers", span: "col-span-2 row-span-2" },
  { src: "/photo-02.jpg", alt: "Sur scène", span: "" },
  { src: "/photo-03.jpg", alt: "Choristes en action", span: "" },
  { src: "/photo-04.jpg", alt: "Performance", span: "" },
  { src: "/photo-05.jpg", alt: "Corazon Singers", span: "col-span-2" },
  { src: "/photo-06.jpg", alt: "Spectacle vivant", span: "" },
  { src: "/photo-07.jpg", alt: "Corazon Singers scène", span: "" },
  { src: "/scene-01.png", alt: "Représentation", span: "" },
  { src: "/scene-02.png", alt: "Danse et chant", span: "" },
  { src: "/photo-09.jpg", alt: "Corazon Singers concert", span: "col-span-2" },
  { src: "/scene-04.png", alt: "Mise en scène", span: "" },
  { src: "/photo-10.jpg", alt: "Spectacle", span: "" },
  { src: "/photo-11.jpg", alt: "Performance artistique", span: "" },
  { src: "/photo-12.jpg", alt: "Concert", span: "" },
  { src: "/photo-15.jpg", alt: "Scène", span: "" },
  { src: "/scene-06.png", alt: "Théâtre", span: "col-span-2" },
  { src: "/photo-16.jpg", alt: "Concert", span: "" },
  { src: "/photo-17.jpg", alt: "Spectacle Corazon", span: "" },
  { src: "/photo-19.jpg", alt: "Sur scène", span: "" },
  { src: "/photo-20.jpg", alt: "Corazon Singers", span: "" },
  { src: "/photo-recente.jpg", alt: "Récente photo", span: "col-span-2 row-span-2" },
  { src: "/scene-07.png", alt: "Performance", span: "" },
  { src: "/scene-08.png", alt: "Spectacle", span: "" },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null)
        setLightbox((lightbox + 1) % photos.length);
      if (e.key === "ArrowLeft" && lightbox !== null)
        setLightbox((lightbox - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <section
      id="galerie"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #100d20 100%)" }}
    >
      {/* BG decorations */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[400px] -translate-x-1/2 bg-teal-600/5 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-gold-400/20 text-gold-400 text-sm font-body font-semibold tracking-widest uppercase mb-4">
            Galerie Photos
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Moments Inoubliables
          </h2>
          <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
            Deux décennies de spectacles, de répétitions et de magie sur scène.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-coral-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Masonry gallery */}
        <div
          className={`columns-2 sm:columns-3 lg:columns-4 gap-3 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative break-inside-avoid mb-3 group cursor-pointer overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 30}ms` }}
              onClick={() => setLightbox(i)}
            >
              <div className={`relative overflow-hidden rounded-2xl ${
                i % 7 === 0 ? "aspect-square" :
                i % 7 === 3 ? "aspect-[3/4]" :
                i % 7 === 5 ? "aspect-[4/3]" :
                "aspect-[3/4]"
              }`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stage-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-body text-xs font-semibold">{photo.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[85vh]">
              <Image
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full">
            <span className="text-white/70 font-body text-sm">
              {lightbox + 1} / {photos.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
