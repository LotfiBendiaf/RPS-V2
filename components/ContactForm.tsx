"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/lib/actions";

const initialState: ContactState = {};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContact, initialState);

  return (
    <form action={formAction} id="contact-form" className="slide-in from-left">
      <h2 className="bold-text">Nous contacter ?</h2>

      {state.success && (
        <p style={{ color: "#4caf50", marginBottom: "1rem" }}>
          ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
        </p>
      )}
      {state.error && (
        <p style={{ color: "#f44336", marginBottom: "1rem" }}>
          {state.error}
        </p>
      )}

      <label htmlFor="name">Nom</label>
      <input id="name" className="input-field" required type="text" name="nom" />

      <label htmlFor="subject">Sujet</label>
      <input id="subject" className="input-field" required type="text" name="sujet" placeholder="Exemple : Faire un devis" />

      <label htmlFor="email">E-Mail</label>
      <input id="email" className="input-field" required type="email" name="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" className="input-field" required name="message" />

      <button className="btn" id="submit-btn" type="submit" disabled={isPending}>
        {isPending ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}
