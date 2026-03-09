import React from "react";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import ReviewsTeaser from "@/components/home/ReviewsTeaser";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ServicesPreview />
      <ReviewsTeaser />
      <CTASection />
    </div>
  );
}