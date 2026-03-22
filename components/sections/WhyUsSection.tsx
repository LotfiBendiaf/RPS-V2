import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CertifiedBadge from "@/components/CertifiedBadge";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "50+",  label: "Professionnels qualifiés" },
  { value: "950",  label: "Clients satisfaits" },
  { value: "+220", label: "Projets réalisés" },
];

const checkpoints = [
  "Devis gratuit et sans engagement",
  "Équipe certifiée et assurée",
  "Respect des délais et du budget",
  "Satisfaction client garantie",
];

export default function WhyUsSection() {
  return (
    <section className="relative py-10">
      <Image src={"/rps-icon-bg.svg"} alt="RPS Logo Background" fill className="object-cover opacity-30 z-0" />
      <div className="relative z-1 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden h-110">
              <Image
                src="/Images/rps-image.jpg"
                alt="Équipe RPS en travaux"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
          <div>
            <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Notre expertise
            </p>
            <h2 className="text-3xl sm:text-4xl text-navy mb-6">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-warm-600 leading-relaxed mb-8">
              Dans notre entreprise de rénovation, nous nous engageons à fournir des
              services de haute qualité à un prix abordable. Avec des années d&apos;expérience
              et une équipe de professionnels qualifiés, nous avons l&apos;expertise nécessaire
              pour mener à bien tout projet de rénovation, petit ou grand.
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-3 mb-10">
                {checkpoints.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-warm-700">
                    <CheckCircle2 size={17} className="text-primary-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <CertifiedBadge />
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warm-100">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-navy mb-1">{s.value}</div>
                  <div className="text-warm-500 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>

    </section>
  );
}
