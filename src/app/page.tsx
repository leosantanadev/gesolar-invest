import { AboutUsSection } from "../components/AboutUsSection";
import { CasesSection } from "../components/CasesSection";
import { FAQSection } from "../components/FAQSection";
import { FeatureSection } from "../components/FeatureSection";
import { HeroSectionWithImage } from "../components/HeroSection/HeroSectionWithImage";
import { HowWeWorkSection } from "../components/HowWeWorkSection";
import { PrincingSection } from "../components/PrincingSection";
import { StatsSection } from "../components/StatsSection";
import { BsWhatsapp } from "react-icons/bs";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSectionWithImage />
      <FeatureSection />
      <AboutUsSection />
      <StatsSection />
      <HowWeWorkSection />
      <PrincingSection />
      <CasesSection />
      <Footer />
      {/* <FAQSection /> */}

      <div className="fixed inset-x-0 bottom-0 flex items-center justify-center m-4">
        <a href='https://w.app/DeG5rn' target='_blank' className="flex items-center justify-center gap-4 bg-primaryOrange-500 px-6 py-2 text-zinc-50 font-semibold rounded-full">
          Quero Investir <BsWhatsapp className="text-xl"/>
        </a>
      </div>
    </>
  );
}
