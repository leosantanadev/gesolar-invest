import { AboutUsSection } from "../components/AboutUsSection";
import { CasesSection } from "../components/CasesSection";
import { FAQSection } from "../components/FAQSection";
import { FeatureSection } from "../components/FeatureSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { HowWeWorkSection } from "../components/HowWeWorkSection";
import { PrincingSection } from "../components/PrincingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutUsSection />
      <HowWeWorkSection />
      {/* <PrincingSection /> */}
      <FAQSection />
    </>
  );
}
