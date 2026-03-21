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
];

export function getProjectImages(folder: string): string[] {
  const dir = path.join(process.cwd(), "public", "Images", "Travaux", folder);
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/Images/Travaux/${folder}/${f}`);
}
