import Image from "next/image";
import AvantagesContent from "@/components/AvantagesSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function AvantagesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden h-105">
              <Image
                src="/Images/wallpaper3.jpg"
                alt="RPS avantages"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <p className="text-primary-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Nos engagements
              </p>
              <h2 className="text-3xl sm:text-4xl text-navy mb-3">
                RPS, la rénovation de demain
              </h2>
              <p className="text-warm-500 text-sm italic mb-8">
                &ldquo;Une bonne réputation vaut plus que de l&apos;argent.&rdquo;{" "}
                <span className="not-italic font-medium text-warm-700">— Publilius Syrus</span>
              </p>
              <AvantagesContent />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
