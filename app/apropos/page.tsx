import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Layers,
  PaintBucket,
  BadgeCheck,
  Leaf,
  Users,
  GraduationCap,
  Star,
  Heart,
  Eye,
  UserCheck,
} from "lucide-react";
import CertifiedBadge from "@/components/CertifiedBadge";
import Logo from "@/components/Logo";

export const metadata: Metadata = { title: "Qui sommes-nous ?" };

export default function AproposPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative sm:h-96 overflow-hidden pt-32 pb-10">
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
      <section className="py-10 px-6">
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
                  L&apos;entreprise RPS est le résultat de valeurs transmises au fil des années.
                  Chaque membre de l&apos;entreprise a ainsi apporté sa pierre à l&apos;édifice
                  pour donner une image à l&apos;échelle de la région avec l&apos;expérience
                  acquise durant son parcours professionnel.
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
                    { icon: UserCheck, label: "Satisfaction clients" },
                    { icon: Star,      label: "Professionnalisme" },
                    { icon: Heart,     label: "Fierté & passion" },
                    { icon: Eye,       label: "Vision à long terme" },
                    { icon: Users,     label: "Fidéliser les clients" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-start gap-3 text-sm text-slate-700">
                      <Icon size={17} className="text-amber-500 shrink-0 mt-0.5" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy rounded-2xl p-6 text-white">
                <div className="grid grid-cols-2 gap-6 text-center">
                  {[
                    { v: "50", l: "Collaborateurs" },
                    { v: "150+", l: "Clients réguliers" },
                    { v: "100+", l: "Chantiers / an" },
                    { v: "700", l: "Visites / mois" },
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

      {/* Timeline */}
      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
            Historique
          </p>
          <h2 className="text-3xl text-navy mb-12 text-center">Notre parcours</h2>
          <div className="relative">
            {/* vertical line */}
            <div className="flex flex-col gap-8">
              {[
                {
                  year: "2019",
                  events: ["Création de l'entreprise RPS — activité Peinture Sols Souples"],
                },
                {
                  year: "2020",
                  events: [
                    "Lancement dans la rénovation des logements de bailleurs sociaux",
                    "Diversification avec le développement des activités de peinture en bâtiment industriel",
                  ],
                },
                {
                  year: "2021",
                  events: [
                    "Développement de l'entreprise — lauréat de plusieurs appels d'offres : Logement, Bâtiments ERP & Industrie, Parkings",
                  ],
                },
                {
                  year: "2022",
                  events: ["Création d'une nouvelle filiale RPS / SELEOR"],
                },
                {
                  year: "2023",
                  events: ["Élargissement du rayon d'intervention à l'échelle nationale"],
                },
              ].map(({ year, events }) => (
                <div key={year} className="flex gap-6 items-start">
                  {/* year badge */}
                  <div className="w-32 shrink-0 flex justify-end pr-4">
                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {year}
                    </span>
                  </div>
                  {/* dot */}
                  <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-100 shrink-0 mt-0.5" />
                  {/* content */}
                  <div className="flex flex-col gap-1.5 pb-2">
                    {events.map((e) => (
                      <p key={e} className="text-slate-600 text-sm leading-relaxed">
                        {e}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domaines de compétence */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
            Expertise
          </p>
          <h2 className="text-3xl text-navy mb-10 text-center">Domaines de compétence</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Peinture Industrielle */}
            <div className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
                <Factory size={22} className="text-amber-600" />
              </div>
              <h3 className="text-navy font-semibold">Peinture Industrielle</h3>
              <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                {[
                  "Décapage par projection d'abrasif ultra haute pression",
                  "Traitement anticorrosion",
                  "Protection des bétons",
                  "Peintures industrielles",
                  "Peintures anti-graffitis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Revêtements Spéciaux */}
            <div className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
                <Layers size={22} className="text-amber-600" />
              </div>
              <h3 className="text-navy font-semibold">Revêtements Spéciaux</h3>
              <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                {[
                  "Étanchéité & imperméabilisation",
                  "Résines & peintures de sol",
                  "Intumescent ou ignifuge",
                  "Composites céramiques",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Finition & Aménagement */}
            <div className="bg-slate-50 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
                <PaintBucket size={22} className="text-amber-600" />
              </div>
              <h3 className="text-navy font-semibold">Finition & Aménagement</h3>
              <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                {[
                  "Ravalement de façade & peintures extérieures",
                  "Isolation thermique par l'extérieur (ITE)",
                  "Imperméabilisation des façades",
                  "Peintures murales & décoratives",
                  "Revêtements muraux & papiers peints",
                  "Revêtements de sols souples et durs",
                  "Plâtrerie, cloisons, faux plafonds",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & RSE */}
      <section className="py-14 px-6 bg-navy text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Qualifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck size={24} className="text-amber-400 shrink-0" />
              <h2 className="text-2xl">Qualifications</h2>
            </div>
            <ul className="flex flex-col gap-2 text-slate-300 text-sm">
              {[
                "QUALIBAT — Reconnu Grenelle de l'Environnement",
                "Plaques de plâtre (technicité courante)",
                "Peinture et ravalement (technicité courante)",
                "Revêtements textiles en dalle et collés",
                "Revêtements résilient PVC (technicité courante)",
                "Formation amiante SS4 (prévention du risque amiante)",
                "Diplôme d'architecte (chargé d'affaires)",
                "Diplôme d'ingénieur CESI (conducteur de travaux)",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <GraduationCap size={15} className="text-amber-400 shrink-0 mt-0.5" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          {/* RSE */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Leaf size={24} className="text-amber-400 shrink-0" />
              <h2 className="text-2xl">Engagements RSE</h2>
            </div>
            <div className="flex flex-col gap-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Plus de 80 % de nos peintures sont développées en phase aqueuse, avec une
                large palette de produits certifiés NF Environnement et Ecolabel, réduisant
                les émissions de COV nocifs pour la santé et l&apos;environnement.
              </p>
              <p>
                Nous proposons une gamme de peintures dépolluantes qui détruit jusqu&apos;à
                80 % des polluants intérieurs dès 24 h.
              </p>
              <p>
                RPS s&apos;engage également dans l&apos;insertion professionnelle : accueil
                d&apos;apprentis, de stagiaires, recours à l&apos;intérim et à des acteurs
                de l&apos;économie sociale et solidaire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
