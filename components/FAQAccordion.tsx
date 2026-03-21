"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  r: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-xl overflow-hidden"
        >
          <button
            id={`faq-trigger-${i}`}
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-medium text-navy text-sm leading-snug">
              {item.q}
            </span>
            <ChevronDown
              size={18}
              className={`text-amber-500 shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className="px-5 pt-0 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
            >
              {item.r}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
