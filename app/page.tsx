import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsPreviewSection from "@/components/sections/ProjectsPreviewSection";
import ReputationSection from "@/components/sections/ReputationSection";
import AvantagesSection from "@/components/sections/AvantagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MapSection from "@/components/sections/MapSection";

export const metadata: Metadata = { title: "RPS Reims" };

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <ProjectsPreviewSection />
      <ReputationSection />
      <AvantagesSection />
      <TestimonialsSection />
      <MapSection />
    </main>
  );
}
