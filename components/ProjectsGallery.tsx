"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  cover: string;
  images: string[];
};

type LightboxState = { projectIndex: number; imageIndex: number } | null;

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const total = projects[lb.projectIndex].images.length;
      return { ...lb, imageIndex: (lb.imageIndex - 1 + total) % total };
    });
  }, [projects]);

  const next = useCallback(() => {
    setLightbox((lb) => {
      if (!lb) return lb;
      const total = projects[lb.projectIndex].images.length;
      return { ...lb, imageIndex: (lb.imageIndex + 1) % total };
    });
  }, [projects]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, pi) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setLightbox({ projectIndex: pi, imageIndex: 0 })}
            className="group text-left rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Cover image */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Photo count badge */}
              <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                {project.images.length} photos
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-500 px-5 py-2 rounded-full">
                  Voir le projet →
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <span className="inline-block text-xs font-semibold text-primary-500 uppercase tracking-widest mb-2">
                {project.category}
              </span>
              <h3 className="text-navy text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={close}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-4 py-3 text-white shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">{projects[lightbox.projectIndex].title}</span>
              <span className="text-slate-400 text-xs">
                {lightbox.imageIndex + 1} / {projects[lightbox.projectIndex].images.length}
              </span>
            </div>
            <button
              type="button"
              onClick={close}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Image + arrows */}
          <div
            className="flex-1 relative flex items-center justify-center min-h-0 px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 sm:left-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 shrink-0"
              aria-label="Précédent"
            >
              <ChevronLeft size={22} />
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={projects[lightbox.projectIndex].images[lightbox.imageIndex]}
              src={projects[lightbox.projectIndex].images[lightbox.imageIndex]}
              alt={`${projects[lightbox.projectIndex].title} — photo ${lightbox.imageIndex + 1}`}
              className="max-h-full max-w-full object-contain"
              style={{ maxHeight: "calc(100vh - 140px)" }}
            />

            <button
              type="button"
              onClick={next}
              className="absolute right-2 sm:right-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10 shrink-0"
              aria-label="Suivant"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex gap-2 px-4 py-3 overflow-x-auto shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {projects[lightbox.projectIndex].images.map((img, ii) => (
              <button
                key={ii}
                type="button"
                onClick={() => setLightbox({ ...lightbox, imageIndex: ii })}
                className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  ii === lightbox.imageIndex
                    ? "border-primary-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
                aria-label={`Photo ${ii + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
