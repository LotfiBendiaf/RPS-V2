import Image from "next/image";

const categories = [
  {
    id: "painting",
    name: "Murs & Sols",
    items: [
      "Peintures murales et décoratives",
      "Revêtements muraux",
      "Plâtrerie & cloisons",
      "Faux plafonds",
      "Papiers peints",
      "Revêtements de sols souples",
      "Carrelage",
    ],
  },
  {
    id: "ext",
    name: "Façades",
    items: [
      "Ravalement de façade",
      "Peintures extérieures",
      "Isolation thermique par l'extérieur",
      "Imperméabilisation",
    ],
  },
  {
    id: "carpenter",
    name: "Aménagement",
    items: [
      "Plâtrerie & cloisons",
      "Faux plafonds",
      "Menuiserie intérieure",
      "Pose de parquet",
    ],
  },
  {
    id: "electricity",
    name: "Électricité",
    items: [
      "Installation électrique",
      "Mise aux normes",
      "Tableau électrique",
      "Éclairage & domotique",
      "Prises & interrupteurs",
    ],
  },
  {
    id: "plomberie",
    name: "Plomberie",
    items: [
      "Installation sanitaire",
      "Rénovation salle de bain",
      "Dépannage & réparation",
      "Chauffage & radiateurs",
      "Tuyauterie & canalisations",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Ce que nous offrons
          </p>
          <h2 className="text-3xl sm:text-4xl text-navy">Nos domaines d&apos;intervention</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`relative h-96 rounded-2xl col-span-2 overflow-hidden group cursor-pointer shadow-md sm:col-span-2${
                idx === 3 ? " sm:col-start-2" : ""
              }`}
            >
              {/* Background image */}
              <Image
                src={`/Images/${cat.id}.jpg`}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Default overlay — darkens bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-400 group-hover:opacity-0" />

              {/* Hover overlay — full dark cover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Category name — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 group-hover:-translate-y-4 transition-transform duration-400">
                <h3 className="text-white font-bold text-2xl tracking-wide drop-shadow">
                  {cat.name}
                </h3>
                <span className="block mt-1 w-8 h-0.5 bg-primary-400 group-hover:w-0 transition-all duration-300" />
              </div>

              {/* Services list — revealed on hover */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
                <ul className="flex flex-col gap-3">
                  {cat.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white text-sm"
                      style={{ transitionDelay: `${i * 40 + 150}ms` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
