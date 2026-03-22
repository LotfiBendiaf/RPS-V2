"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

export default function CookieConsent() {
  // useSyncExternalStore reads localStorage without calling setState in an effect.
  // getServerSnapshot returns a non-null value so the banner is hidden during SSR.
  const consent = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem("cookie-consent"),
    () => "ssr"
  );

  // dismissed hides the banner immediately after the user clicks,
  // before the next render cycle re-reads localStorage.
  const [dismissed, setDismissed] = useState(false);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setDismissed(true);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setDismissed(true);
  }

  // consent is null when not yet set → show banner
  // "ssr" is the server snapshot → hide during SSR
  if (dismissed || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-lg bg-warm-900 text-white shadow-2xl ring-1 ring-white/10 px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Icon + text */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <span className="text-2xl select-none shrink-0" aria-hidden="true">🍪</span>
          <p className="text-sm leading-relaxed text-warm-100">
            Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser notre trafic.
            En cliquant sur <strong className="text-white">«&nbsp;Accepter&nbsp;»</strong>, vous consentez à leur
            utilisation.{" "}
            <Link
              href="/conditions-regles"
              className="underline underline-offset-2 text-primary-300 hover:text-primary-200 transition-colors"
            >
              En savoir plus
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-warm-200 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primary-500 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-400 transition-colors cursor-pointer"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
