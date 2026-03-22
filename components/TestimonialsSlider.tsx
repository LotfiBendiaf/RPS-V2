"use client";

import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Icon from "./Icon";

const testimonials = [
  {
    name: "Frédérique Digues",
    role: "",
    text: "Nous avons fait appel à RPS pour des travaux de peinture : il s'agissait d'enduire un mur en stuc intérieur datant des années 70. Nous avons été entièrement satisfaits du résultat. Les travaux ont été réalisés dans les délais et le rendu est parfait.",
  },
  {
    name: "AbdelWahid Benzerrouk",
    role: "",
    text: "Je suis extrêmement satisfait des travaux réalisés. L'équipe a fait preuve de professionnalisme, de ponctualité et de souci du détail tout au long du chantier. La qualité de la peinture et des finitions est impeccable.",
  },
  {
    name: "Sdra Sadou",
    role: "",
    text: "Une entreprise très professionnelle, à l'écoute de mes besoins dès le premier contact. Je ne peux que recommander cette entreprise pour les revêtements de sol et la peinture.",
  },
  {
    name: "Dr Rony Kobeissi",
    role: "Local Guide",
    text: "Très bonne expérience. La rénovation qu'a réalisé cette équipe est exceptionnelle.",
  },
  {
    name: "Sarah Oultaf",
    role: "",
    text: "Très bon rapport qualité, très professionnel !! Je recommande fortement !",
  },
  {
    name: "Léna Petitjean",
    role: "",
    text: "J'ai eu affaire à RPS et à Damien le conducteur de travaux, tout s'est très bien passé, les délais ont été correctement respectés. C'est un très bon rapport qualité prix, je recommande fortement.",
  },
  {
    name: "A Vignon",
    role: "Local Guide",
    text: "Très professionnel ! Réactif, fiable et un travail soigné !",
  },
  {
    name: "Stéphane Benfares",
    role: "",
    text: "Très sérieux, respectueux, aime le goût du travail bien fait et toujours de bon conseil. Excellent rapport qualité prix, je recommande vivement !",
  },
  {
    name: "Maryline Robert",
    role: "Local Guide",
    text: "Une équipe disponible, ponctuelle et réactive ! Une réalisation au top ! Merci RPS !",
  },
  {
    name: "Khalid Haddouch",
    role: "Local Guide",
    text: "Je recommande ! Professionnalisme, ponctualité, qualité et valeur au rendez-vous.",
  },
];

export default function TestimonialsSlider() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {visible.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col"
          >
            <Quote size={22} className="text-amber-400 mb-4" />
            <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={13} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Icon />
              <div>
                <div className="font-semibold text-navy text-sm">{t.name}</div>
                {t.role && (
                  <div className="text-slate-400 text-xs">{t.role}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-navy hover:text-white hover:border-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === page ? "w-6 bg-amber-500" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-navy hover:text-white hover:border-navy disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
