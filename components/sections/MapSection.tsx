"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";

// Leaflet must be loaded client-side only
const MapEmbed = dynamic(() => import("@/components/LeafletMap"), { ssr: false });

export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-2">
            Où nous trouver
          </p>
          <h2 className="text-3xl sm:text-4xl text-navy">
            Venez nous rendre visite
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Contact info */}
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary-500" />
              </span>
              <div>
                <h3 className="font-semibold text-navy mb-1">Adresse</h3>
                <address className="not-italic text-warm-500 leading-relaxed">
                  03 rue Général Micheler<br />
                  51100 Reims, France
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary-500" />
              </span>
              <div>
                <h3 className="font-semibold text-navy mb-1">Téléphone</h3>
                <div className="text-warm-500 leading-relaxed">
                  <a href="tel:+33780123295" className="hover:text-primary-500 transition-colors block">+33 780 12 32 95</a>
                  <a href="tel:+33609232499" className="hover:text-primary-500 transition-colors block">+33 609 23 24 99</a>
                  <a href="tel:+33679000244" className="hover:text-primary-500 transition-colors block">+33 679 00 02 44</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary-500" />
              </span>
              <div>
                <h3 className="font-semibold text-navy mb-1">Email</h3>
                <a
                  href="mailto:contact@rps-reims.com"
                  className="text-warm-500 hover:text-primary-500 transition-colors"
                >
                  contact@rps-reims.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-11 h-11 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary-500" />
              </span>
              <div>
                <h3 className="font-semibold text-navy mb-1">Horaires</h3>
                <div className="text-warm-500 leading-relaxed">
                  <p>Lundi – Vendredi : 08h – 18h</p>
                  <p>Samedi : 09h – 13h</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded transition-colors w-fit"
            >
              Nous contacter
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[400px]">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
