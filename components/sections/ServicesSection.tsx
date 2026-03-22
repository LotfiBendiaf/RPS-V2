"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  {
    id: "painting",
    name: "Murs & Sols",
    items: [
      "Peintures murales et décoratives",
      "Revêtements muraux",
      "Plâtrerie & cloisons",
      "Faux plafonds",
      "Papiers peints",
      "Revêtements de sols souples",
      "Carrelage",
    ],
  },
  {
    id: "ext",
    name: "Façades",
    items: [
      "Ravalement de façade",
      "Peintures extérieures",
      "Isolation thermique par l'extérieur",
      "Imperméabilisation",
    ],
  },
  {
    id: "carpenter",
    name: "Aménagement",
    items: [
      "Plâtrerie & cloisons",
      "Faux plafonds",
      "Menuiserie intérieure",
      "Pose de parquet",
    ],
  },
  {
    id: "electricity",
    name: "Électricité",
    items: [
      "Installation électrique",
      "Mise aux normes",
      "Tableau électrique",
      "Éclairage & domotique",
      "Prises & interrupteurs",
    ],
  },
  {
    id: "plomberie",
    name: "Plomberie",
    items: [
      "Installation sanitaire",
      "Rénovation salle de bain",
      "Dépannage & réparation",
      "Chauffage & radiateurs",
      "Tuyauterie & canalisations",
    ],
  },
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-10 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Ce que nous offrons
            </p>
            <h2 className="text-2xl sm:text-4xl text-navy">Nos domaines d&apos;intervention</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
          {categories.map((cat, idx) => {
            const isActive = openId === cat.id || hoveredId === cat.id;
            return (
              <ScrollReveal
                key={cat.id}
                direction="up"
                delay={idx * 100}
                className={`col-span-2 ${idx === 3 ? " sm:col-start-2" : ""}`}
              >
              <div
                onClick={() => setOpenId(openId === cat.id ? null : cat.id)}
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md w-full"
              >
                {/* Background image */}
                <Image
                  src={`/Images/${cat.id}.jpg`}
                  alt={cat.name}
                  fill
                  className={`object-cover transition-transform duration-500${isActive ? " scale-105" : ""}`}
                />

                {/* Default overlay — darkens bottom */}
                <div className={`absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-400${isActive ? " opacity-0" : ""}`} />

                {/* Active overlay — full dark cover */}
                <div className={`absolute inset-0 bg-black/70 transition-opacity duration-400${isActive ? " opacity-100" : " opacity-0"}`} />

                {/* Category name — slides up on active */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-400${isActive ? " -translate-y-4" : ""}`}>
                  <h3 className="text-white font-bold text-2xl tracking-wide drop-shadow">
                    {cat.name}
                  </h3>
                  <span className={`block mt-1 h-0.5 bg-primary-400 transition-all duration-300${isActive ? " w-0" : " w-8"}`} />
                </div>

                {/* Services list — revealed on active */}
                <div className={`absolute inset-0 flex flex-col justify-center px-6 transition-opacity duration-400 delay-100${isActive ? " opacity-100" : " opacity-0"}`}>
                  <ul className="flex flex-col gap-3">
                    {cat.items.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-white text-sm"
                        style={{ transitionDelay: `${i * 40 + 150}ms` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
