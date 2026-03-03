import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Qui sommes nous ?" };

export default function AproposPage() {
  return (
    <main className="apropos">
      <Image src="/Images/wallpaper2.png" alt="Background Image" width={600} height={400} />
      <div className="text-section">
        <h2>Qui sommes nous ?</h2>
        <p>
          RPS est une entreprise de construction et de rénovation qui aide les
          gens à rénover leurs maisons. Nous sommes différents des autres
          compagnies de rénovation parce que nous fournissons la construction et
          la rénovation commençant par l&apos;elaboration du cahier des charges en
          passant par l&apos;estimation à la réalisation.
          <br />
          RPS est une entreprise qui sert les gens qui veulent rénover leurs
          maisons, bureaux et espaces exterieurs.
          <br />
          Nous fournissons diverses solutions de renovation telles que la
          renovation de parties de maison que se soit en exterieur ou en
          interieur, la construction d&apos;une extension ou la reconstruction
          d&apos;une maison existante, et ce, avec les taux les plus abordables
          possibles.
          <br />
          Nous sommes conscients que si vous avez besoin de travaux de
          rénovation ou de construction, cela peut être accablant. Nous
          comprenons qu&apos;il existe de nombreuses entreprises, mais nous sommes
          fiers d&apos;être en mesure de fournir des résultats rapidement et à un
          prix abordable.
          <br />
          Notre équipe de professionnels a une grande expérience des projets
          dans tout le pays et offre une grande variété de solutions qui vous
          permettront de choisir ce qui répond le mieux à vos besoins. Si vous
          souhaitez obtenir plus d&apos;informations sur RPS, n&apos;hésitez pas à nous
          contacter dès aujourd&apos;hui !
          <br />
          Notre mission est d&apos;aider les gens à rénover leurs maisons par la
          construction et la rénovation. Nous fournissons la construction et la
          rénovation commençant par des termes de références et d&apos;estimation à
          la réalisation. Nous aidons les gens à rénover leur maison en leur
          fournissant une estimation sans fioritures et des mises à jour en
          temps réel de la construction.
        </p>
      </div>
    </main>
  );
}
