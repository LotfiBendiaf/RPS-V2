"use server";

import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  success?: boolean;
  error?: string;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nom = (formData.get("nom") as string)?.trim();
  const sujet = (formData.get("sujet") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!nom || !sujet || !email || !message) {
    return { error: "Tous les champs sont obligatoires." };
  }

  try {
    await prisma.message.create({ data: { nom, sujet, email, message } });

    await resend.emails.send({
      from: "RPS Contact <onboarding@resend.dev>",
      to: "contact@rps-reims.com",
      subject: `[RPS Contact] ${sujet}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Contact error:", err);
    return { error: "Une erreur est survenue. Veuillez réessayer." };
  }
}
