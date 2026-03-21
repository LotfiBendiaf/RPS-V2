import Image from "next/image";
import Link from "next/link";
import { Phone, Building2, Mail, Home, Star, Banknote, Crown, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/rps-logo1-light.svg"
              alt="RPS"
              width={80}
              height={40}
              className="mb-5 h-16 w-auto"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              RPS est une entreprise de construction qui aide les gens à rénover leurs
              maisons ou leurs espaces professionnels.
            </p>
            <div className="flex gap-2">
              {[Home, Star, Banknote, Crown].map((Icon, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <Icon size={14} />
                </span>
              ))}
            </div>
          </div>

          {/* À propos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              À propos
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Notre histoire", href: "/apropos" },
                { label: "Notre équipe", href: "/apropos" },
                { label: "Mot du directeur", href: "/apropos" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/faq" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                FAQ
              </Link>
              <Link href="/#services" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                Aide
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <span>
                  +33 780 12 32 95<br />
                  +33 609 23 24 99<br />
                  +33 679 00 02 44
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <address className="not-italic">
                  03 rue Général Micheler<br />51100 Reims, France
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-amber-500 shrink-0" />
                <Link
                  href="mailto:contact@rps-reims.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  contact@rps-reims.com
                </Link>
              </div>
          <Link
            href="/contact"
            aria-label="Nous contacter"
            className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm px-5 py-2.5 rounded transition-colors uppercase w-fit"
          >
            Nous contacter
            <ArrowRight size={16} />
          </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <Link
            href="/conditions-regles"
            className="hover:text-amber-400 transition-colors"
          >
            Conditions et Règles
          </Link>
          <p>© {year} RPS — Tous droits réservés</p>
          <Link
            href="https://www.deevdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            Conception par Deev Digital
            <Image src="/DeeV-Digital-Icon.svg" alt="Deev Digital Logo" width={16} height={16} className="inline-block ml-1 bg-white p-0.5 rounded-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
