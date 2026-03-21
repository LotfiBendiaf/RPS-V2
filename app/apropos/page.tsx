import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CertifiedBadge from "@/components/CertifiedBadge";
import Logo from "@/components/Logo";

export const metadata: Metadata = { title: "Qui sommes-nous ?" };

export default function AproposPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="/Images/wallpaper2.png"
          alt="RPS Reims"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            À propos de nous
          </p>
          <h1 className="text-4xl sm:text-5xl mb-3">Qui sommes-nous ?</h1>
          <p className="text-slate-300 text-sm max-w-md">
            Experts en rénovation et construction depuis des années au cœur de Reims.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
                            <Logo />

              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Notre histoire
              </p>
              <h2 className="text-3xl text-navy mb-6">
                Une entreprise à votre service
              </h2>
              <div className="flex flex-col gap-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  RPS est une entreprise de construction et de rénovation qui aide les gens à
                  rénover leurs maisons. Nous sommes différents des autres compagnies de
                  rénovation parce que nous fournissons la construction et la rénovation
                  commençant par l&apos;élaboration du cahier des charges en passant par
                  l&apos;estimation à la réalisation.
                </p>
                <p>
                  Nous fournissons diverses solutions de rénovation telles que la rénovation
                  de parties de maison que ce soit en extérieur ou en intérieur, la
                  construction d&apos;une extension ou la reconstruction d&apos;une maison
                  existante, et ce, avec les taux les plus abordables possibles.
                </p>
                <p>
                  Notre équipe de professionnels a une grande expérience des projets dans
                  tout le pays et offre une grande variété de solutions qui vous permettront
                  de choisir ce qui répond le mieux à vos besoins.
                </p>
                <p>
                  Notre mission est d&apos;aider les gens à rénover leurs maisons par la
                  construction et la rénovation. Nous aidons les gens à rénover leur maison
                  en leur fournissant une estimation sans fioritures et des mises à jour en
                  temps réel de la construction.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white uppercase px-6 py-3 rounded transition-colors text-sm mt-8"
              >
                Contactez-nous <ArrowRight size={16} />
              </Link>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-4">
                  Nos valeurs
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Qualité et excellence dans chaque réalisation",
                    "Transparence et honnêteté avec nos clients",
                    "Respect des délais et du budget convenu",
                    "Matériaux premium et techniques modernes",
                    "Accompagnement personnalisé du devis à la livraison",
                    "Garantie sur l'ensemble de nos travaux",
                  ].map((v) => (
                    <div key={v} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 size={17} className="text-amber-500 shrink-0 mt-0.5" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-6 text-white">
                <div className="grid grid-cols-3 gap-6 text-center">
                  {[
                    { v: "50+", l: "Professionnels" },
                    { v: "950", l: "Clients satisfaits" },
                    { v: "+220", l: "Projets réalisés" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-2xl font-bold text-amber-400">{s.v}</div>
                      <div className="text-slate-400 text-xs mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <CertifiedBadge />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
