import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  Home,
  Medal,
  MapPin,
  LayoutGrid,
  Banknote,
  ChevronDown,
  Users,
  Headphones,
  Globe,
  Quote,
  Star,
  CircleArrowRight,
  CircleArrowLeft,
  ChevronUp,
} from "lucide-react";

export const metadata: Metadata = { title: "RPS Reims" };

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="sub-section-1">
          <h1>Profitez de notre expertise en renovation</h1>
          <p>
            Située en coeur de Reims, Renovation Peinture Service : RPS met son
            professionnalisme et son dynamisme à votre service pour la prise en
            charge de vos travaux de rénovation immobilière pour les particuliers
            et les professionnels
          </p>
          <div>
            <Link aria-label="Bouton contact" className="slide-in from-left" href="/contact">
              <button className="btn">Faire un devis ?</button>
            </Link>
            <Link aria-label="Nos travaux" className="slide-in from-right" href="/travaux">
              <button className="btn2">
                <Image src="/Icons/RPS-Icon.png" alt="RPS" width={20} height={20} /> Voir nos derniers travaux
              </button>
            </Link>
          </div>
          <div className="slide-in from-right float elt-1">
            <Home size={20} className="mini-icon" />
            <div>
              <b className="small-text">Renovation / Construction</b>
              <span className="small-text" id="secondaryColor">Au meilleur prix</span>
            </div>
          </div>
          <div className="slide-in from-right float elt-2">
            <Medal size={20} className="mini-icon" />
            <div>
              <b className="small-text">Avis</b>
              <span className="small-text" id="secondaryColor">5 / 5 Étoiles</span>
            </div>
          </div>
          <div className="glass-section slide-in from-bottom">
            <div className="glass-elt">
              <MapPin size={20} />
              <b>Localisation</b>
              <div /><div />
              <p id="disabled">Reims, France</p>
              <ChevronDown size={20} />
            </div>
            <div className="vl" />
            <div className="glass-elt">
              <LayoutGrid size={20} />
              <b>Types</b>
              <div /><div />
              <p id="disabled">Renovation</p>
              <ChevronDown size={20} />
            </div>
            <div className="vl" />
            <div className="glass-elt">
              <Banknote size={20} />
              <b>Prix</b>
              <div /><div />
              <p>~A estimer</p>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
        <div className="sub-section-2" />
      </section>

      <section className="description">
        <Image className="pattern" src="/Images/pattern1.png" alt="Pattern" width={250} height={250} />
        <Image className="slide-in from-left" src="/Images/image1.jpg" alt="Renovation" width={400} height={400} />
        <div className="slide-in from-right">
          <h2 className="gradient-color">Pourquoi nous ?</h2>
          <p className="gradient-color">
            Dans notre entreprise de rénovation, nous nous engageons à fournir
            des services de haute qualité à un prix abordable. Avec des années
            d&apos;expérience et une équipe de professionnels qualifiés, nous avons
            l&apos;expertise nécessaire pour mener à bien tout projet de rénovation,
            petit ou grand. Notre objectif est de dépasser vos attentes en
            offrant un savoir-faire et un service à la clientèle exceptionnels.
            Nous comprenons l&apos;importance de votre maison ou espace à renover,
            et nous travaillons en étroite collaboration avec vous pour donner
            vie à votre vision. Choisissez-nous pour votre prochain projet de
            rénovation et faites l&apos;expérience de la différence.
          </p>
          <div className="stats">
            <div className="stat"><h3>50</h3><p className="small-text">Personnes qualifiés</p></div>
            <div className="stat"><h3>950</h3><p className="small-text">Clients satisfaits</p></div>
            <div className="stat"><h3>+220</h3><p className="small-text">Projets realisés</p></div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Services presentés</h2>
        <span id="secondaryColor">Ce que nous vous offrons pour vos chantiers</span>
        <div>
          {[
            { id: "plumber", name: "Plomberie", price: "À estimer", time: "Prestation", material: "Materiel compris", dir: "left" },
            { id: "soil", name: "Maçonnerie", price: "À partir de 15€ / m²", time: "1Heure / 10m²", material: "Materiaux Non compris", dir: "bottom" },
            { id: "electric", name: "Électricité", price: "A estimer", time: "Selon travaux", material: "Materiaux compris", dir: "right" },
            { id: "carpenter", name: "Menuiserie", price: "A estimer", time: "Selon travaux", material: "Materiaux compris", dir: "left" },
            { id: "painting", name: "Peinture", price: "~11€ / m²", time: "1Heure / 10m²", material: "Materiaux Non compris", dir: "bottom" },
            { id: "isolation", name: "Doublage Isolation", price: "À partir de ~50€ / m²", time: "100€ / 15m²", material: "Materiaux compris", dir: "right" },
          ].map((s) => (
            <div key={s.id} className={`service slide-in from-${s.dir}`} id={s.id}>
              <div className="note" />
              <div className="detail-btn" />
              <div className="details">
                <div className="header">
                  <p>{s.name}</p>
                  <p id="secondaryColor">{s.price}</p>
                </div>
                <div>
                  <MapPin size={16} className="mini-icon" />
                  <span className="small-text">3 rue Général Micheler, Reims</span>
                </div>
                <div>
                  <div><LayoutGrid size={16} className="mini-icon" /> <span className="small-text">A planifier</span></div>
                  <div><Globe size={16} className="mini-icon" /> <span className="small-text">{s.time}</span></div>
                  <div><Star size={16} className="mini-icon" /> <span className="small-text">{s.material}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="entreprise">
        <div className="h-bar" />
        <div className="main">
          <h2>Nous sommes une entreprise connue et recommendée</h2>
          <p>
            Nous n&apos;utilisons que les meilleurs matériaux et les techniques les
            plus récentes pour obtenir des résultats étonnants qui dépassent vos
            attentes. De plus, nous proposons des options de financement souples
            et une garantie sur tous nos services, ce qui vous assure une
            tranquillité d&apos;esprit et une valeur ajoutée. Choisissez-nous pour
            votre prochain projet de rénovation et faites l&apos;expérience de la
            différence.
          </p>
          <Link aria-label="Nos travaux" href="/travaux">
            <button className="btn">Explorez notre savoir-faire</button>
          </Link>
          <div className="float elt-2">
            <Medal size={20} className="mini-icon" />
            <div>
              <b className="small-text">Avis</b>
              <span className="small-text" id="secondaryColor">5 / 5 Étoiles</span>
            </div>
          </div>
        </div>
        <Image id="img1" src="/Images/image1.jpg" alt="Travaux RPS" width={400} height={300} />
        <Image id="img2" src="/Images/wallpaper2.png" alt="RPS" width={400} height={400} />
      </section>

      <section className="avantages">
        <div className="h-bar" />
        <Image className="slide-in from-left" src="/Images/wallpaper3.jpg" alt="RPS Avantages" width={500} height={400} />
        <div className="statements slide-in from-right">
          <h2>RPS la renovation de demain</h2>
          <p>&quot;Une bonne réputation vaut plus que de l&apos;argent.&quot; - <b>Publilius Syrus</b>.</p>
          <div className="element">
            <Users size={20} />
            <b>Materiaux</b>
            <ChevronDown className="toggle-down hidden" size={20} />
            <ChevronUp className="toggle-up" size={20} />
            <div />
            <p className="small-text">Nous n&apos;utilisons que les meilleurs matériaux et les techniques les plus récentes pour obtenir des résultats étonnants.</p>
          </div>
          <div className="element">
            <Headphones size={20} />
            <b>Support client H24</b>
            <ChevronDown className="toggle-down" size={20} />
            <ChevronUp className="toggle-up hidden" size={20} />
            <div />
            <p className="small-text hidden">Nous sommes disponibles et à l&apos;écoute de nos clients à tout moment</p>
          </div>
          <div className="element">
            <Globe size={20} />
            <b>Prestation globale</b>
            <ChevronDown className="toggle-down" size={20} />
            <ChevronUp className="toggle-up hidden" size={20} />
            <div />
            <p className="small-text hidden">Notre but est de dépasser vos attentes en proposant une expertise et un service client exceptionnels.</p>
          </div>
        </div>
      </section>

      <section className="testimonials slide-in from-bottom">
        <h2>Que disent nos clients ?</h2>
        <p className="small-text">Votre satisfaction est notre principal objectif</p>
        <div className="slider">
          {[
            { name: "Dr Rony kobeissi", role: "Local Guide", text: "« Très bonne expérience. La rénovation qu'a réalisé cette équipe est exceptionnelle »" },
            { name: "Sarah Oultaf", role: "", text: "Positive: Punctuality, Responsiveness, Value. Très bon rapport qualité, très professionnel!! Je recommande fortement !" },
            { name: "Léna Petitjean", role: "", text: "« J'ai eu affaire à RPS et a Damien le conducteur de travaux, tout s'est très bien passé, les délais ont été correctement respectés. C'est un très bon rapport qualité prix, je recommande fortement »" },
            { name: "Khalid Haddouch", role: "", text: "Positive: Professionalism, Punctuality, Quality, Value. Je recommande !" },
            { name: "stephane benfares", role: "The new age Inc", text: "Positive: Professionalism. Très sérieux respectueux, aime le goût du travail bien fait, très bon rapport qualité prix." },
            { name: "Maryline ROBERT", role: "", text: "Positive: Professionalism, Punctuality, Quality. Une équipe dispo, ponctuelle et réactive ! Une réalisation au top ! Merci rps !" },
          ].map((t, i) => (
            <div key={i} className="card">
              <Image className="profile" src="/Icons/RPS-Logo.png" alt="Profile" width={70} height={70} />
              <Quote size={30} style={{ margin: "1.5rem auto 0 auto" }} />
              <p className="cutoff-text">{t.text}</p>
              <input aria-label="toggle-button" className="expand-btn" type="checkbox" />
              <div className="rating">
                {[1,2,3,4,5].map((s) => <Star key={s} size={16} className="mini-icon" fill="#ECB365" color="#ECB365" />)}
              </div>
              <h3>{t.name}</h3>
              {t.role && <span className="small-text">{t.role}</span>}
            </div>
          ))}
        </div>
        <CircleArrowRight className="sliderBtn nextBtn" size={40} />
        <CircleArrowLeft className="sliderBtn prevBtn" size={40} />
      </section>

      <Script src="/Scripts/script.js" strategy="afterInteractive" />
    </main>
  );
}
