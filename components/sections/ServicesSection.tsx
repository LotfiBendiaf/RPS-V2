import Image from "next/image";
import { MapPin, Globe, Star } from "lucide-react";

const services = [
  { id: "plumber",   name: "Plomberie",         price: "À estimer",              time: "Prestation",    material: "Matériel compris" },
  { id: "soil",      name: "Maçonnerie",         price: "À partir de 15€ / m²",   time: "1h / 10 m²",    material: "Matériaux non compris" },
  { id: "electric",  name: "Électricité",        price: "À estimer",              time: "Selon travaux", material: "Matériaux compris" },
  { id: "carpenter", name: "Menuiserie",         price: "À estimer",              time: "Selon travaux", material: "Matériaux compris" },
  { id: "painting",  name: "Peinture",           price: "~11€ / m²",              time: "1h / 10 m²",    material: "Matériaux non compris" },
  { id: "isolation", name: "Doublage Isolation", price: "À partir de ~50€ / m²", time: "100€ / 15 m²",  material: "Matériaux compris" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Ce que nous offrons
          </p>
          <h2 className="text-3xl sm:text-4xl text-navy">Services présentés</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={`/Images/${s.id}.jpg`}
                alt={s.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-semibold text-lg mb-1">{s.name}</h3>
                <p className="text-primary-400 text-sm font-medium mb-3">{s.price}</p>

                {/* Hover reveal */}
                <div className="max-h-24 sm:max-h-0 sm:group-hover:max-h-24 overflow-hidden transition-all duration-300">
                  <div className="flex flex-col gap-1.5 text-warm-300 text-xs pt-3 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <MapPin size={11} className="text-primary-400" />
                      <span>3 rue Général Micheler, Reims</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={11} className="text-primary-400" />
                      <span>{s.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={11} className="text-primary-400" />
                      <span>{s.material}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
