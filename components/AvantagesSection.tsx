"use client";

import { useState } from "react";
import { Users, Headphones, Globe, ChevronDown } from "lucide-react";

const items = [
  {
    Icon: Users,
    title: "Matériaux premium",
    text: "Nous n'utilisons que les meilleurs matériaux et les techniques les plus récentes pour obtenir des résultats étonnants qui dépassent vos attentes.",
  },
  {
    Icon: Headphones,
    title: "Support client H24",
    text: "Nous sommes disponibles et à l'écoute de nos clients à tout moment. Une question, un imprévu ? Nous répondons présents.",
  },
  {
    Icon: Globe,
    title: "Prestation globale",
    text: "Notre but est de dépasser vos attentes en proposant une expertise complète : du devis à la réalisation, en passant par le suivi de chantier.",
  },
];

export default function AvantagesSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-xl overflow-hidden"
        >
          <button
            id={`avantage-trigger-${i}`}
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            aria-controls={`avantage-panel-${i}`}
            className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
              <item.Icon size={17} className="text-amber-600" />
            </div>
            <span className="font-semibold text-navy text-sm flex-1">
              {item.title}
            </span>
            <ChevronDown
              size={18}
              className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div
              id={`avantage-panel-${i}`}
              role="region"
              aria-labelledby={`avantage-trigger-${i}`}
              className="px-5 pt-3 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
            >
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
