import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReputationSection from "@/components/sections/ReputationSection";
import AvantagesSection from "@/components/sections/AvantagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = { title: "RPS Reims" };

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <ReputationSection />
      <AvantagesSection />
      <TestimonialsSection />
    </main>
  );
}
