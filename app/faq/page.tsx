import type { Metadata } from "next";
import { MessageCircleQuestion } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Quels sont les domaines d'intervention de RPS ?",
    r: "RPS intervient dans trois grands domaines : la peinture industrielle (décapage, anticorrosion, peintures anti-graffitis), les revêtements spéciaux (étanchéité, résines de sol, ignifuge, composites céramiques) et la finition & aménagement du bâtiment (ravalement de façade, ITE, peintures murales, revêtements de sols souples et durs, plâtrerie, faux plafonds).",
  },
  {
    q: "Dans quelles zones géographiques intervenez-vous ?",
    r: "RPS est implanté dans le Grand Est et répond aux besoins locaux depuis Reims. Depuis 2023, notre rayon d'intervention s'est élargi à l'échelle nationale pour répondre à des projets d'envergure partout en France.",
  },
  {
    q: "Comment obtenir un devis pour mon projet ?",
    r: "Contactez-nous via notre formulaire en ligne ou appelez-nous directement au 06 09 23 24 99. Nous évaluerons vos besoins et vous fournirons un devis détaillé et sans engagement.",
  },
  {
    q: "RPS travaille-t-il pour les bailleurs sociaux et les marchés publics ?",
    r: "Oui. Depuis 2020 RPS est actif dans la rénovation de logements de bailleurs sociaux et est lauréat de plusieurs appels d'offres publics couvrant logements, bâtiments ERP, industrie et parkings.",
  },
  {
    q: "Quelles qualifications et certifications RPS possède-t-il ?",
    r: "RPS est qualifié QUALIBAT et reconnu Grenelle de l'Environnement, avec des qualifications spécifiques en peinture & ravalement, revêtements PVC, textiles collés, plaques de plâtre et isolation thermique/acoustique. Nos compagnons disposent également de la formation amiante SS4.",
  },
  {
    q: "Vos équipes sont-elles assurées ?",
    r: "Oui, l'ensemble de nos collaborateurs (plus de 50 professionnels pluridisciplinaires) sont assurés et habilités pour les travaux qu'ils réalisent. Une démarche Sécurité & Environnement rigoureuse est déployée sur tous nos chantiers.",
  },
  {
    q: "RPS utilise-t-il des produits respectueux de l'environnement ?",
    r: "Oui. Plus de 80 % de nos peintures sont en phase aqueuse, avec des produits certifiés NF Environnement ou Ecolabel réduisant les émissions de COV. Nous proposons également des peintures dépolluantes qui détruisent jusqu'à 80 % des polluants intérieurs dès 24 h.",
  },
  {
    q: "Combien de chantiers RPS réalise-t-il par an ?",
    r: "Nos équipes sont en charge de plus de 100 chantiers par an, pour plus de 150 clients réguliers, en dehors des particuliers qui complètent notre activité en constante augmentation.",
  },
  {
    q: "RPS dispose-t-il d'un chargé d'affaires qualifié ?",
    r: "Oui. Notre chargé d'affaires est diplômé architecte, notre conducteur de travaux est ingénieur CESI, et notre assistant conducteur de travaux est titulaire d'un Master Génie Civil, garantissant un suivi technique rigoureux de chaque projet.",
  },
  {
    q: "Comment RPS s'engage-t-il dans la formation et l'insertion professionnelle ?",
    r: "RPS accueille des apprentis, des stagiaires (dont des jeunes issus du Service Militaire Volontaire), recourt à l'intérim et collabore avec des acteurs de l'économie sociale et solidaire. Notre politique de formation vise le développement et le maintien des compétences de tous nos salariés.",
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* Header band */}
      <div className="bg-navy py-32 px-6">
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
