import Link from "next/link";
import { PROJECT_META, getProjectImages } from "@/lib/projects";
import Image from "next/image";
import ProjectImageGallery from "./ProjectImageGallery";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function ProjectsPreviewSection() {
  const projects = PROJECT_META.map((p) => {
    const images = getProjectImages(p.folder);
    return { ...p, cover: images[0], thumbs: images.slice(1, 4) };
  });

  return (
    <section className="relative py-10 px-6 bg-white">
            <Image src={"/rps-icon-bg.svg"} alt="RPS Logo Background" fill className="object-cover opacity-30 z-0" />

      <div className="relative z-1 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary-500 text-xs font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-4xl text-navy mb-4">Nos réalisations</h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Des chantiers menés avec soin, du premier coup de pinceau jusqu&apos;aux
            finitions — voici quelques exemples de notre travail.
          </p>
        </div>

        {/* One block per project */}
        <div className="space-y-24">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl] *:lg:[direction:ltr]" : ""
              }`}
            >
              {/* Text side */}
              <div>
                <span className="text-primary-500 text-xs font-semibold uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-2xl text-navy mt-2 mb-4">{project.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{project.description}</p>
                <Link
                  href="/travaux"
                >
                  <Button variant={"primary"}>

                  Voir toutes les photos
                  <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Image side */}
              <ProjectImageGallery cover={project.cover} thumbs={project.thumbs} title={project.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
