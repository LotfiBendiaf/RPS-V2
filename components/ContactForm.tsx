"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/lib/actions";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const initialState: ContactState = {};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContact, initialState);

  return (
    <form
      action={formAction}
      className="w-full bg-white rounded-2xl shadow-xl p-5 sm:p-8"
    >
      <h2 className="text-2xl text-navy mb-1">Nous contacter</h2>
      <p className="text-slate-500 text-sm mb-7">
        Remplissez le formulaire et nous vous répondrons rapidement.
      </p>

      {state.success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-6">
          ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
        </div>
      )}
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-6">
          {state.error}
        </div>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Nom
          </label>
          <input
            id="name"
            required
            type="text"
            name="nom"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-slate-700">
            Sujet
          </label>
          <input
            id="subject"
            required
            type="text"
            name="sujet"
            placeholder="Exemple : Faire un devis"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            E-Mail
          </label>
          <input
            id="email"
            required
            type="email"
            name="email"
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            required
            name="message"
            rows={5}
            className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
variant={"primary"}
        >
          {isPending ? "Envoi en cours…" : "Envoyer le message"}
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
