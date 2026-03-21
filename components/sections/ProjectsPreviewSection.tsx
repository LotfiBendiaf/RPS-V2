import Link from "next/link";
import { PROJECT_META, getProjectImages } from "@/lib/projects";
import Image from "next/image";

export default function ProjectsPreviewSection() {
  const projects = PROJECT_META.map((p) => {
    const images = getProjectImages(p.folder);
    return { ...p, cover: images[0], thumbs: images.slice(1, 5) };
  });

  return (
    <section className="relative py-20 px-6 bg-white">
            <Image src={"/rps-icon-bg.svg"} alt="RPS Logo Background" fill className="object-cover opacity-30 z-0" />

      <div className="relative z-1 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-primary-500 text-xs font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl text-navy mb-4">Nos réalisations</h2>
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm font-medium"
                >
                  Voir toutes les photos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image side */}
              <div>
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnails */}
                {project.thumbs.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {project.thumbs.map((img, ii) => (
                      <div
                        key={ii}
                        className="rounded-xl overflow-hidden aspect-square bg-slate-100"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
