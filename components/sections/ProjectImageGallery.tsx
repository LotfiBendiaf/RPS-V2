"use client";

import { useState } from "react";

export default function ProjectImageGallery({
  cover,
  thumbs,
  title,
}: {
  cover: string;
  thumbs: string[];
  title: string;
}) {
  const [mainImage, setMainImage] = useState(cover);
  const allImages = [cover, ...thumbs];

  return (
    <div>
      {/* Main image */}
      <div className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mainImage} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Thumbnails */}
      {thumbs.length > 0 && (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setMainImage(img)}
              className={`rounded-xl overflow-hidden aspect-square bg-slate-100 ring-2 transition-all ${
                mainImage === img
                  ? "ring-primary-500"
                  : "ring-transparent hover:ring-primary-300"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
