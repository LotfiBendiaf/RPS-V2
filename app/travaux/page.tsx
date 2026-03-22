import type { Metadata } from "next";
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
      <div className="bg-navy py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl text-white mb-2">Nos Travaux</h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Découvrez nos réalisations — des chantiers de rénovation menés avec soin et
            professionnalisme à Reims et ses environs.
          </p>
        </div>
      </div>

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
