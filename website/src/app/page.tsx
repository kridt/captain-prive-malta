import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ExperienceCards } from "@/components/home/ExperienceCards";
import { CaptainSection } from "@/components/home/CaptainSection";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ExperienceCards />
      <CaptainSection />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
