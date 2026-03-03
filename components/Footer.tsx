import Image from "next/image";
import Link from "next/link";
import { Home, Star, Banknote, Crown, Phone, Building2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-1">
        <div>
          <div className="header">
            <Image className="icon" src="/Icons/RPS-Logo-1.png" alt="RPS icon" width={80} height={40} />
          </div>
          <p>
            <b>RPS est une entreprise de construction qui aide les gens à rénover leurs maisons ou leurs espaces professionnels</b>
          </p>
          <div>
            <Home size={20} className="mini-icon" />
            <Star size={20} className="mini-icon" />
            <Banknote size={20} className="mini-icon" />
            <Crown size={20} className="mini-icon" />
          </div>
        </div>

        <div>
          <span className="bold-text">A propos</span>
          <Link aria-label="Histoire de RPS" className="link" href="#">Notre histoire</Link>
          <Link aria-label="Notre équipe" className="link" href="#">Notre equipe</Link>
          <Link aria-label="Mot du directeur" className="link" href="#">Mot du directeur</Link>
        </div>

        <div>
          <span className="bold-text">Support</span>
          <Link aria-label="FAQ" className="link" href="/faq">FAQ</Link>
          <Link aria-label="Nos services" className="link" href="/#services">Services</Link>
          <Link aria-label="Aide" className="link" href="#">Aide</Link>
        </div>

        <div>
          <span className="bold-text">Contact</span>
          <div className="header">
            <Phone size={20} className="mini-icon" />
            +33 780 12 32 95 &nbsp;+33 609 23 24 99 &nbsp;+33 679 00 02 44
          </div>
          <div className="header">
            <Building2 size={20} className="mini-icon" />
            <address>03 rue Général Micheler 51100, Reims France</address>
          </div>
          <div className="header">
            <Mail size={20} className="mini-icon" />
            <Link aria-label="Contactez nous par email" href="mailto:contact@rps-reims.com">contact@rps-reims.com</Link>
          </div>
          <Link aria-label="Contactez nous" href="/contact">
            <button className="btn">Nous contacter</button>
          </Link>
        </div>
      </div>

      <div className="section-2">
        <Link aria-label="Conditions et Règles" className="small-text link bold-text" href="/conditions-regles">
          Conditions et Règles
        </Link>
        <p className="small-text bold-text">Tout droit reservé, RPS @2025</p>
      </div>
    </footer>
  );
}
