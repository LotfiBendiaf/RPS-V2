import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import TravauxSlider from "@/components/TravauxSlider";

export const metadata: Metadata = { title: "Travaux" };

export default function TravauxPage() {
  return (
    <>
      <style>{`
        .container { position: relative; text-align: center; }
        .mySlides { display: none; }
        .cursor { cursor: pointer; }
        .prev, .next {
          cursor: pointer; position: absolute; top: 40%; width: auto;
          padding: 16px; margin-top: -50px; color: var(--thirdColor);
          background-color: rgba(0,0,0,0.5); font-weight: bold; font-size: 20px;
          border-radius: 0 7px 7px 0; user-select: none;
        }
        .prev { left: 0; }
        .next { right: 0; border-radius: 3px 0 0 3px; }
        .prev:hover, .next:hover { background-color: rgba(255,255,255,0.5); }
        .numbertext { color: #f2f2f2; font-size: 12px; padding: 8px 12px; position: absolute; top: 0; }
        .caption-container { text-align: center; padding: 2px 16px; color: white; }
        #caption { color: var(--secondaryColor); }
        .row { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
        .column { float: left; }
        .demo { border-radius: var(--border); opacity: 0.8; }
        .demo:hover, .active { opacity: 1; }
        @media (max-width: 800px) { .row { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 450px) { .row { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      <main className="works-container">
        <h1>Travaux</h1>
        <h2>Travaux de renovation faits sur un sejour</h2>

        <section className="works slide-in from-bottom">
          <div className="image-container" style={{ position: "relative" }}>
            <Image src="/Images/Travaux/before.jpg" alt="Avant" className="image-before slider-image" fill style={{ objectFit: "cover", objectPosition: "left" }} />
            <Image src="/Images/Travaux/after.jpg" alt="Après" className="image-after slider-image" fill style={{ objectFit: "cover", objectPosition: "left" }} />
          </div>
          <div className="before" />
          <span className="after" />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="slider-edit"
            aria-label="Percentage of before photo shown"
          />
          <div className="slider-line" />
          <div className="slider-button" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
              <line x1="16" y1="128" x2="96" y2="128" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
              <polyline points="64 96 96 128 64 160" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
              <line x1="240" y1="128" x2="160" y2="128" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
              <polyline points="192 160 160 128 192 96" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
          </div>
        </section>

        <div className="before-after">
          <p><b>Avant</b> : La photo d&apos;une pièce au mobilier désuet, au papier peint ou à la peinture usés, à l&apos;espace encombré ou exigu.</p>
          <p><b>Après</b> : Une photo de la même pièce avec de nouveaux meubles, de la peinture ou du papier peint frais, et une disposition organisée et spacieuse. La pièce semble lumineuse, accueillante et moderne.</p>
        </div>

        <h2>Quelques unes de nos dernieres realisations</h2>
        <TravauxSlider />
      </main>

      <Script src="/Scripts/slider.js" strategy="afterInteractive" />
    </>
  );
}
