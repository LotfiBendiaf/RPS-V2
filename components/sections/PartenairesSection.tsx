import Image from "next/image";

const logos = [
  { src: "/Images/partenaires/ARFO.png",            alt: "ARFO" },
  { src: "/Images/partenaires/BNP-Paribas.png",     alt: "BNP Paribas" },
  { src: "/Images/partenaires/Courlancy.png",        alt: "Courlancy" },
  { src: "/Images/partenaires/Credit-Agricole.png",  alt: "Crédit Agricole" },
  { src: "/Images/partenaires/Demathieu_BARD.png",   alt: "Demathieu & Bard" },
  { src: "/Images/partenaires/Eiffage.png",          alt: "Eiffage" },
  { src: "/Images/partenaires/GTM_HALLE.png",        alt: "GTM Halle" },
  { src: "/Images/partenaires/Plurial.png",          alt: "Plurial" },
  { src: "/Images/partenaires/VINCI.webp",           alt: "Vinci" },
];

// Duplicate for seamless loop
const track = [...logos, ...logos];

export default function PartenairesSection() {
  return (
    <section className="bg-warm-100 py-10 overflow-hidden">
      <p className="text-center text-warm-500 text-xs font-semibold uppercase tracking-widest mb-8">
        Ils nous font confiance
      </p>

      {/* Gradient fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-warm-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-warm-100 to-transparent" />

        <div className="logos-track">
          {track.map((logo, i) => (
            <div
              key={i}
              className="mx-10 flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
