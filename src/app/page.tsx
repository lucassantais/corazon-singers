import { HeroSection } from "@/components/sections/HeroSection";
import { NextShowBanner } from "@/components/sections/NextShowBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { ArtsSection } from "@/components/sections/ArtsSection";
import { ShowsSection } from "@/components/sections/ShowsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VideosSection } from "@/components/sections/VideosSection";
import { PressSection } from "@/components/sections/PressSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NextShowBanner />
      <AboutSection />
      <ArtsSection />
      <ShowsSection />
      <GallerySection />
      <VideosSection />
      <PressSection />
      <ContactSection />
    </>
  );
}
