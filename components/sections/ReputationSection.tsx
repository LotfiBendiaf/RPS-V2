import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ReputationSection() {
  return (
    <section className="relative py-20 bg-navy">
            <Image src={"/rps-icon-bg.svg"} alt="RPS Logo Background" fill className="object-cover opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Notre réputation
            </p>
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              Une entreprise connue et recommandée
            </h2>
            <p className="text-warm-400 leading-relaxed mb-8">
              Nous n&apos;utilisons que les meilleurs matériaux et les techniques les plus
              récentes pour obtenir des résultats étonnants qui dépassent vos attentes.
              Nous proposons des options de financement souples et une garantie sur tous
              nos services.
            </p>
            <div>


              <Link href="/travaux" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded shadow-md hover:bg-primary-600 transition-colors duration-300">
                Explorez notre savoir-faire
              </Link>
              
              <div className="flex items-center gap-2 text-white">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#F77F00" color="#F77F00" />
                  ))}
                </div>
                <span className="text-sm text-warm-400">5/5 étoiles</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-100">
            <Image
              src="/Images/image1.jpg"
              alt="Travaux RPS"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
