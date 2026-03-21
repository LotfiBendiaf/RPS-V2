import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, Building2, Mail, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy pt-8">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div className="text-white">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Contactez-nous
            </p>
            <h1 className="text-4xl sm:text-5xl mb-5">
              Parlons de votre projet
            </h1>
            <p className="text-slate-400 leading-relaxed mb-10 text-sm">
              Que ce soit pour un devis, une question ou un simple renseignement,
              notre équipe est disponible pour vous accompagner.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Téléphone</div>
                  <div className="text-slate-400 text-sm">
                    +33 780 12 32 95<br />
                    +33 609 23 24 99<br />
                    +33 679 00 02 44
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Building2 size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Adresse</div>
                  <address className="not-italic text-slate-400 text-sm">
                    03 rue Général Micheler<br />
                    51100 Reims, France
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Email</div>
                  <a
                    href="mailto:contact@rps-reims.com"
                    className="text-slate-400 text-sm hover:text-amber-300 transition-colors"
                  >
                    contact@rps-reims.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">Disponibilité</div>
                  <div className="text-slate-400 text-sm">Support client H24 · 7j/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
