"use client";

import Image from "next/image";
import { useEffect } from "react";

const slides = [
  { src: "/Images/Travaux/im1.JPG", label: "Travaux faits : Image 1" },
  { src: "/Images/Travaux/im2.JPG", label: "Travaux faits : Image 2" },
  { src: "/Images/Travaux/im4.JPG", label: "Travaux faits : Image 3" },
  { src: "/Images/Travaux/im5.JPG", label: "Travaux faits : Image 4" },
  { src: "/Images/Travaux/im7.JPG", label: "Travaux faits : Image 5" },
  { src: "/Images/Travaux/im8.JPG", label: "Travaux faits : Image 6" },
];

declare global {
  interface Window {
    plusSlides?: (n: number) => void;
    currentSlide?: (n: number) => void;
    showSlides?: (n: number) => void;
  }
}

export default function TravauxSlider() {
  useEffect(() => {
    let slideIndex = 1;

    function showSlides(n: number) {
      const allSlides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("demo");
      const captionText = document.getElementById("caption");
      if (n > allSlides.length) slideIndex = 1;
      if (n < 1) slideIndex = allSlides.length;
      for (let i = 0; i < allSlides.length; i++) (allSlides[i] as HTMLElement).style.display = "none";
      for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
      (allSlides[slideIndex - 1] as HTMLElement).style.display = "block";
      dots[slideIndex - 1].className += " active";
      if (captionText) captionText.innerHTML = (dots[slideIndex - 1] as HTMLImageElement).alt ?? "";
    }

    window.plusSlides = (n: number) => { showSlides((slideIndex += n)); };
    window.currentSlide = (n: number) => { showSlides((slideIndex = n)); };

    showSlides(slideIndex);
  }, []);

  return (
    <div className="container">
      {slides.map((slide, i) => (
        <div key={i} className="mySlides">
          <div className="numbertext">{i + 1} / {slides.length}</div>
          <Image src={slide.src} alt="Travaux faits" width={800} height={450} style={{ maxHeight: 450, borderRadius: "var(--border)" }} />
        </div>
      ))}

      <a aria-label="Previous" className="prev" onClick={() => window.plusSlides?.(-1)}>&#10094;</a>
      <a aria-label="Next" className="next" onClick={() => window.plusSlides?.(1)}>&#10095;</a>

      <div className="caption-container">
        <p id="caption" />
      </div>

      <div className="row">
        {slides.map((slide, i) => (
          <div key={i} className="column">
            <Image
              className="demo cursor"
              src={slide.src}
              width={200}
              height={150}
              style={{ width: "100%" }}
              onClick={() => window.currentSlide?.(i + 1)}
              alt={slide.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
