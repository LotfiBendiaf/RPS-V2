import type { Metadata } from "next";
import Image from "next/image";
import ProjectsGallery, { type Project } from "@/components/ProjectsGallery";
import { PROJECT_META, getProjectImages } from "@/lib/projects";

export const metadata: Metadata = { title: "Travaux" };

export default function TravauxPage() {
  const projects: Project[] = PROJECT_META.map((p) => {
    const images = getProjectImages(p.folder);
    return { ...p, cover: images[0], images };
  });

  return (
    <main>
      {/* Page header */}
      <section className="relative sm:h-96 overflow-hidden pt-32 pb-10">
        <Image
          src="/Images/rps-image.jpg"
          alt="RPS Reims"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl mb-3">Nos Travaux</h1>
          <p className="text-slate-300 text-sm max-w-md">
            Découvrez nos réalisations — des chantiers de rénovation menés avec soin et
            professionnalisme à Reims et ses environs.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl text-navy mb-2">Nos réalisations récentes</h2>
          <p className="text-slate-500 text-sm mb-8">
            Cliquez sur un projet pour parcourir toutes les photos.
          </p>
          <ProjectsGallery projects={projects} />
        </div>
      </section>
    </main>
  );
}
