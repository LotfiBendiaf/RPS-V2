import { Users } from "lucide-react";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section className="py-10 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">
            <Users size={14} className="inline mr-1.5" />
            Avis clients
          </p>
          <h2 className="text-3xl sm:text-4xl text-navy mb-3">
            Que disent nos clients ?
          </h2>
          <p className="text-warm-500 text-sm">
            Votre satisfaction est notre principal objectif
          </p>
        </div>
        <TestimonialsSlider />
      </div>
    </section>
  );
}
