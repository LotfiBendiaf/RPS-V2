import fs from "fs";
import path from "path";

export type ProjectMeta = {
  id: number;
  folder: string;
  title: string;
  category: string;
  description: string;
};

export const PROJECT_META: ProjectMeta[] = [
  {
    id: 1,
    folder: "project1",
    title: "Rénovation Séjour",
    category: "Peinture intérieure",
    description:
      "Rénovation complète d'un séjour : peinture des murs, finitions soignées et mise en valeur de l'espace.",
  },
  {
    id: 2,
    folder: "project2",
    title: "Chantier de rénovation",
    category: "Rénovation complète",
    description:
      "Travaux de rénovation intérieure complets, incluant peinture, plâtrerie et finitions.",
  },
  {
    id: 4,
    folder: "project4",
    title: "Construction UFR STAPS – Locaux d'enseignement mutualisés",
    category: "Chantier universitaire",
    description:
      "Construction d'un bâtiment destiné à accueillir l'UFR STAPS et des locaux d'enseignement mutualisés.",
  },
  {
    id: 3,
    folder: "project3",
    title: "Extension – Restructuration du Pôle Agro-Sciences URCA",
    category: "Chantier universitaire",
    description:
      "Extension – Restructuration du Pôle Agro-Sciences, Environnement, Biotechnologies et Bioéconomie, Sciences du Numérique de l'Université de Reims Champagne-Ardenne (URCA) à Reims.",
  },
];

export function getProjectImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "Images", "Travaux", folder);
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/Images/Travaux/${folder}/${f}`);
}
