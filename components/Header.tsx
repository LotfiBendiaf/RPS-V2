"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Building2, Users, Phone, Wrench, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Accueil", Icon: Home },
  { href: "/#services", label: "Services", Icon: Wrench },
  { href: "/travaux", label: "Nos travaux", Icon: Building2 },
  { href: "/apropos", label: "Qui sommes-nous ?", Icon: Users },
];

const mobileLinks = [
  { href: "/#services", label: "Nos services", Icon: Home },
  { href: "/travaux", label: "Nos travaux", Icon: Building2 },
  { href: "/apropos", label: "Qui sommes-nous ?", Icon: Users },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-6 left-0 right-0 z-50 transition-transform duration-300 ${hidden ? "-translate-y-24" : "translate-y-0"}`}>
    <header className="max-w-7xl mx-auto rounded-3xl bg-white backdrop-blur-md shadow-lg">
      <div className="mx-auto px-8 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
            >
              <Icon size={15} className="text-amber-500" />
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + burger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            aria-label="Nous contacter"
            className="hidden md:inline-flex"
          >
            <Button variant={"primary"}>
            Nous contacter
            <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-white border-t border-slate-100 rounded-2xl px-6 py-4 flex flex-col gap-1"
        >
          {mobileLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-amber-600 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Icon size={17} className="text-amber-500" />
              {label}
            </Link>
          ))}
          <div className="border-t border-slate-100 pt-4 mt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              aria-label="Nous contacter"
            >
              <Button variant={"primary"}>
              Nous contacter
              <Phone size={16} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}
