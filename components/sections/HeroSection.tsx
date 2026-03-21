"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileInput, Medal, Star } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "50+",  label: "Professionnels qualifiés" },
  { value: "950",  label: "Clients satisfaits" },
  { value: "+220", label: "Projets réalisés" },
];

const slides = [

  { src: "/Images/wallpaper3.jpg", alt: "Rénovation intérieure" },
  { src: "/Images/painting.jpg",   alt: "Peinture" },
  { src: "/Images/carpenter.jpg",  alt: "Menuiserie" },
  { src: "/Images/electric.jpg",   alt: "Électricité" },
  { src: "/Images/plumber.jpg",    alt: "Plomberie" },
  { src: "/Images/isolation.jpg",  alt: "Isolation" },
  { src: "/Images/ext.jpg",        alt: "Façade extérieure" },
  { src: "/Images/soil.jpg",       alt: "Sols" },
  { src: "/Images/image1.jpg",     alt: "Rénovation" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Carousel backgrounds */}
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      <div className="inset-0 absolute bg-linear-to-r from-black to-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Entreprise de rénovation Tous Corps d&apos;État (TCE) basée à Reims
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
            DONNEZ UNE NOUVELLE VIE À VOS ESPACES AVEC NOS EXPERTS EN RÉNOVATION
          </h1>

          <p className="text-primary-50 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Située au cœur de Reims, <span className="font-semibold text-primary-300">RPS</span> met son expertise et son dynamisme au service de tous vos projets de rénovation.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/contact"
              aria-label="Faire un devis"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded transition-colors text-sm uppercase"
            >
              Faire un devis <FileInput size={16} />
            </Link>
            <Link
              href="/travaux"
              aria-label="Voir nos travaux"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded border border-white/20 transition-colors backdrop-blur-sm text-sm uppercase"
            >
              
              Voir nos travaux <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-sm">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-primary-400">{s.value}</div>
                <div className="text-warm-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white min-w-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                <Medal size={17} />
              </div>
              <div>
                <div className="font-semibold text-sm">Évaluation clients</div>
                <div className="flex gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} fill="#F77F00" color="#F77F00" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-warm-300 text-xs">5/5 étoiles · +100 avis vérifiés</p>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-primary-400 w-5" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
