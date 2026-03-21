import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import TravauxSlider from "@/components/TravauxSlider";

export const metadata: Metadata = { title: "Travaux" };

export default function TravauxPage() {
  return (
    <>
      {/* Inline styles for TravauxSlider (DOM-manipulated gallery) */}
      <style>{`
        .container { position: relative; text-align: center; }
        .mySlides { display: none; }
        .cursor { cursor: pointer; }
        .prev, .next {
          cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%);
          width: auto; padding: 14px 18px; color: #d97706;
          background-color: rgba(13,27,62,0.7); font-weight: bold; font-size: 18px;
          border-radius: 8px; user-select: none; transition: background 0.2s;
          border: 0; line-height: 1;
        }
        .prev { left: 8px; }
        .next { right: 8px; }
        .prev:hover, .next:hover { background-color: rgba(13,27,62,0.95); }
        .numbertext { color: #fff; font-size: 11px; padding: 6px 10px; position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.4); border-radius: 4px; }
        .caption-container { padding: 8px 16px; }
        #caption { color: #d97706; font-size: 13px; }
        .row { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.75rem; margin-top: 1rem; }
        .demo { border-radius: 0.75rem; opacity: 0.65; transition: opacity 0.2s; }
        .demo:hover, .demo.active { opacity: 1; }
        @media (max-width: 800px) { .row { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 450px) { .row { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <main>
        {/* Page header */}
        <div className="bg-navy py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl text-white mb-2">Nos Travaux</h1>
            <p className="text-slate-400 text-sm max-w-2xl">
              Travaux de rénovation réalisés sur un séjour
            </p>
          </div>
        </div>

        {/* Before / After slider */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-navy mb-2">
              Avant / Après
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Glissez le curseur pour comparer l&apos;état avant et après rénovation.
            </p>

            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "500px" }}
            >
              <Image
                src="/Images/Travaux/before.jpg"
                alt="Avant"
                className="image-before"
                fill
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
              <Image
                src="/Images/Travaux/after.jpg"
                alt="Après"
                className="image-after"
                fill
                style={{ objectFit: "cover", objectPosition: "left" }}
              />

              {/* Before / After labels */}
              <div
                style={{
                  position: "absolute", top: "0.75rem", left: "0.75rem",
                  background: "rgba(13,27,62,0.8)", color: "white",
                  fontSize: "0.7rem", fontWeight: 600,
                  padding: "0.25rem 0.75rem", borderRadius: "0.375rem", zIndex: 5,
                }}
              >
                AVANT
              </div>
              <div
                style={{
                  position: "absolute", top: "0.75rem", right: "0.75rem",
                  background: "rgba(217,119,6,0.9)", color: "white",
                  fontSize: "0.7rem", fontWeight: 600,
                  padding: "0.25rem 0.75rem", borderRadius: "0.375rem", zIndex: 5,
                }}
              >
                APRÈS
              </div>

              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="slider-edit"
                aria-label="Pourcentage de l'image avant"
              />
              <div className="slider-line" />
              <div className="slider-button" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none" />
                  <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <line x1="16" y1="128" x2="96" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <polyline points="64 96 96 128 64 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <line x1="240" y1="128" x2="160" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                  <polyline points="192 160 160 128 192 96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                </svg>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-50 rounded-xl px-5 py-4 text-sm text-slate-600">
                <span className="font-semibold text-navy">Avant :</span> Pièce au mobilier
                désuet, papier peint usé, espace encombré.
              </div>
              <div className="bg-amber-50 rounded-xl px-5 py-4 text-sm text-slate-600">
                <span className="font-semibold text-amber-600">Après :</span> Pièce lumineuse
                avec de nouveaux meubles, peinture fraîche et disposition spacieuse.
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-navy mb-8">
              Quelques-unes de nos dernières réalisations
            </h2>
            <TravauxSlider />
          </div>
        </section>
      </main>

      <Script src="/Scripts/slider.js" strategy="afterInteractive" />
    </>
  );
}
