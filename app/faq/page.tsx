import type { Metadata } from "next";
import { MessageCircleQuestion } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Quels services votre entreprise de rénovation offre-t-elle ?",
    r: "Notre entreprise de rénovation offre un large éventail de services, notamment la rénovation de cuisines et de salles de bains, la pose de revêtements de sol, la peinture, les travaux d'électricité et de plomberie, etc.",
  },
  {
    q: "Comment puis-je obtenir un devis pour mon projet de rénovation ?",
    r: "Contactez-nous sur notre site Web ou appelez-nous directement pour planifier une consultation. Nous évaluerons vos besoins et vous fournirons un devis détaillé pour votre projet.",
  },
  {
    q: "Travaillez-vous avec un architecte ou un designer ?",
    r: "Oui, nous travaillons avec des architectes et des designers afin de garantir que votre projet de rénovation soit réalisé conformément à vos spécifications.",
  },
  {
    q: "Combien de temps prend un projet de rénovation typique ?",
    r: "Le calendrier d'un projet de rénovation dépend de la taille et de la complexité du projet. Nous vous fournirons un calendrier détaillé de votre projet au cours du processus de consultation.",
  },
  {
    q: "Combien coûte un projet de rénovation typique ?",
    r: "Le coût d'un projet de rénovation varie en fonction de l'ampleur des travaux, des matériaux utilisés et d'autres facteurs. Nous vous fournirons un devis détaillé au cours du processus de consultation.",
  },
  {
    q: "Vos ouvriers sont-ils assurés et autorisés ?",
    r: "Oui, tous nos travailleurs sont entièrement assurés et autorisés à effectuer des travaux de rénovation.",
  },
  {
    q: "Offrez-vous des options de financement pour vos services ?",
    r: "Oui, nous offrons des options de financement à nos clients pour les aider à rendre leurs projets de rénovation plus abordables.",
  },
  {
    q: "Offrez-vous une garantie pour vos services ?",
    r: "Oui, nous offrons une garantie pour tous nos services afin d'assurer votre entière satisfaction.",
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Header band */}
      <div className="bg-navy py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 mb-5">
            <MessageCircleQuestion size={24} className="text-amber-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl text-white mb-3">Questions Fréquentes</h1>
          <p className="text-slate-400 text-sm">
            Tout ce que vous devez savoir sur nos services et notre fonctionnement.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}
