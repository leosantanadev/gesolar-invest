import { AboutUsSection } from "../components/AboutUsSection";
import { FAQSection } from "../components/FAQSection";
import { FeatureSection } from "../components/FeatureSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { HowWeWorkSection } from "../components/HowWeWorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutUsSection />
      <HowWeWorkSection />
      <FAQSection />
    </>
  );
}
