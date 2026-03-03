import type { Metadata } from "next";
import { MessageCircleQuestion, ChevronDown, ChevronUp } from "lucide-react";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Quels services votre entreprise de rénovation offre-t-elle ?",
    r: "Notre entreprise de rénovation offre un large éventail de services, notamment la rénovation de cuisines et de salles de bains, la pose de revêtements de sol, la peinture, les travaux d'électricité et de plomberie, etc.",
    open: true,
  },
  {
    q: "Comment puis-je obtenir un devis pour mon projet de rénovation ?",
    r: "Contactez-nous sur notre site Web ou appelez-nous directement pour planifier une consultation. Nous évaluerons vos besoins et vous fournirons un devis détaillé pour votre projet.",
    open: false,
  },
  {
    q: "Travaillez-vous avec un architecte ou un designer ?",
    r: "Oui, nous travaillons avec des architectes et des designers afin de garantir que votre projet de rénovation soit réalisé conformément à vos spécifications.",
    open: false,
  },
  {
    q: "Combien de temps prend un projet de rénovation typique ?",
    r: "Le calendrier d'un projet de rénovation dépend de la taille et de la complexité du projet. Nous vous fournirons un calendrier détaillé de votre projet au cours du processus de consultation.",
    open: false,
  },
  {
    q: "Combien coûte un projet de rénovation typique ?",
    r: "Le coût d'un projet de rénovation varie en fonction de l'ampleur des travaux, des matériaux utilisés et d'autres facteurs. Nous vous fournirons un devis détaillé au cours du processus de consultation.",
    open: false,
  },
  {
    q: "Vos ouvriers sont-ils assurés et autorisés ?",
    r: "Oui, tous nos travailleurs sont entièrement assurés et autorisés à effectuer des travaux de rénovation.",
    open: false,
  },
  {
    q: "Offrez-vous des options de financement pour vos services ?",
    r: "Oui, nous offrons des options de financement à nos clients pour les aider à rendre leurs projets de rénovation plus abordables.",
    open: false,
  },
  {
    q: "Offrez-vous une garantie pour vos services ?",
    r: "Oui, nous offrons une garantie pour tous nos services afin d'assurer votre entière satisfaction.",
    open: false,
  },
];

export default function FAQPage() {
  return (
    <main className="FAQ-page">
      <div className="statements">
        <h2>Questions Fréquemment Posées</h2>
        {faqs.map((item, i) => (
          <div key={i} className="element">
            <MessageCircleQuestion size={20} />
            <b>Q : {item.q}</b>
            <ChevronDown className={`toggle-down${item.open ? " hidden" : ""}`} size={20} />
            <ChevronUp className={`toggle-up${item.open ? "" : " hidden"}`} size={20} />
            <div />
            <p className={`small-text${item.open ? "" : " hidden"}`}>R : {item.r}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
