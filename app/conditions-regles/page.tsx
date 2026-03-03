import type { Metadata } from "next";

export const metadata: Metadata = { title: "Conditions et Règles" };

const sections = [
  { title: "1. Conditions d'utilisation :", text: "L'utilisation de notre site est soumise à l'acceptation des présentes conditions. Vous devez avoir au moins 18 ans pour utiliser nos services." },
  { title: "2. Services proposés :", text: "Nos services de rénovation incluent la rénovation de cuisines, salles de bains, et la peinture intérieure et extérieure. Consultez nos descriptions détaillées pour plus d'informations." },
  { title: "3. Tarification et Devis :", text: "Les prix indiqués sur le site sont des estimations. Pour un devis précis, veuillez remplir notre formulaire de demande en ligne." },
  { title: "4. Conditions de paiement :", text: "Nous acceptons les paiements par carte de crédit et virement bancaire. Un dépôt de 30 % est requis pour confirmer votre réservation." },
  { title: "5. Planification et Délais :", text: "Nos services de rénovation incluent la rénovation de cuisines, salles de bains, et la peinture intérieure et extérieure. Consultez nos descriptions détaillées pour plus d'informations." },
  { title: "6. Annulation et Report :", text: "Les annulations doivent être signalées 72 heures avant la date prévue. Des frais d'annulation de 15 % peuvent s'appliquer." },
  { title: "7. Accès au Site et Sécurité :", text: "L'accès au site de construction est strictement contrôlé. Les visiteurs doivent porter un équipement de sécurité." },
  { title: "8. Propriété Intellectuelle :", text: "Tous les plans et conceptions créés par notre équipe demeurent notre propriété intellectuelle, sauf accord contraire." },
  { title: "9. Matériaux et Normes de Qualité :", text: "Nous utilisons des matériaux de qualité supérieure conformes aux normes en vigueur. Nous privilégions les options respectueuses de l'environnement." },
  { title: "10. Politique de Confidentialité :", text: "Vos informations personnelles sont utilisées uniquement pour le traitement des commandes et ne seront jamais vendues à des tiers." },
  { title: "11. Assurance et Responsabilité :", text: "Notre entreprise est couverte par une assurance responsabilité civile. Le client est responsable des dommages causés par sa négligence." },
  { title: "12. Garanties et Engagements :", text: "Nous offrons une garantie d'un an sur tous nos travaux de rénovation. Des conditions s'appliquent, veuillez consulter notre page de garantie pour plus de détails." },
  { title: "13. Responsabilités du Client :", text: "Le client est responsable de préparer le site avant le début des travaux, y compris le déplacement d'objets fragiles." },
  { title: "14. Résolution des Litiges :", text: "En cas de litige, les parties s'engagent à tenter une médiation avant d'entamer des procédures judiciaires. La loi française s'applique." },
  { title: "15. Retours d'Expérience et Témoignages :", text: "Les clients fournissant des témoignages bénéficieront d'une réduction de 10 % sur leur prochain projet. Consultez notre page de témoignages pour plus d'informations." },
  { title: "16. Code de Conduite :", text: "Notre équipe s'engage à maintenir un haut niveau de professionnalisme. Tout comportement contraire à notre code de conduite peut entraîner des sanctions." },
  { title: "17. Procédures d'Urgence :", text: "En cas d'urgence sur le site, suivez nos procédures d'évacuation d'urgence affichées à des endroits stratégiques." },
];

export default function ConditionsPage() {
  return (
    <div style={{ paddingInline: "clamp(1rem, 10vw, 10rem)" }}>
      <h1>RPS : Conditions et Règles</h1>
      {sections.map((s, i) => (
        <div key={i}>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
