import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="contact">
      <div className="gradient">
        <ContactForm />
      </div>
    </main>
  );
}
