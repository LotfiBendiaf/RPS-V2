import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";

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
    <section className="relative py-16">
      <Image src={"/rps-icon-bg.svg"} alt="RPS Logo Background" fill className="object-cover opacity-30" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-110">
            <Image
              src="/Images/image1.jpg"
              alt="Équipe RPS en travaux"
              fill
              className="object-cover"
            />
          </div>
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
                          {/* Certified badge */}
        <div className="hidden lg:block animate-bounce-slow">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/20 text-white flex items-center gap-3 shadow-xl">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shrink-0 ring-2 ring-primary-300/40">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-primary-950 font-semibold mb-0.5">Certifié</div>
              <div className="font-bold text-sm leading-tight text-primary-950">Rénovation Tous Corps<br />d&apos;États</div>
            </div>
            <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow">
              Certifié
            </span>
          </div>
        </div>
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
        </div>
      </div>

    </section>
  );
}
