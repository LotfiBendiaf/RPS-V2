"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Home, Building2, Users, Phone } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="logo-header">
        <Link aria-label="Page principale de RPS" href="/">
          <Image
            className="main-icon"
            src="/Icons/RPS-Logo.png"
            alt="Logo RPS"
            width={120}
            height={120}
          />
        </Link>
      </div>

      <ul className="navbar">
        <li className="active">
          <Link aria-label="Page principale de RPS" className="link" href="/">Accueil</Link>
        </li>
        <li>
          <Link aria-label="Services de RPS" className="link" href="/#services">Services</Link>
        </li>
        <li>
          <Link aria-label="Exploration des travaux et chantiers" className="link" href="/travaux">Nos travaux</Link>
        </li>
        <li>
          <Link aria-label="Page a propos" className="link" href="/apropos">Qui sommes nous ?</Link>
        </li>
      </ul>

      <div>
        <Link aria-label="Contactez nous" href="/contact">
          <button className="btn">Nous contacter</button>
        </Link>
      </div>

      <div
        className={`menu-btn${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="menu-btn__burger" />
      </div>

      <div className={`menu${menuOpen ? " open" : " hidden"}`}>
        <ul>
          <li>
            <Home size={20} className="mini-icon" />
            <Link aria-label="Exploration de nos services" className="link" href="/#services">Nos services</Link>
          </li>
          <li>
            <Building2 size={20} className="mini-icon" />
            <Link aria-label="Exploration des travaux et chantiers" className="link" href="/travaux">Nos travaux</Link>
          </li>
          <li>
            <Users size={20} className="mini-icon" />
            <Link aria-label="Page a propos" className="link" href="/apropos">Qui sommes-nous ?</Link>
          </li>
          <li style={{ borderBottom: "2px solid var(--mainColor)" }} />
          <li>
            <Link aria-label="Contactez nous" href="/contact">
              <button className="btn">
                <Phone size={16} />
                Nous contacter
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
