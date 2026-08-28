import AboutSection from "@/component/AboutSection";
import BuildTheProductSection from "@/component/BuildTheProductSection";
import ContactSection from "@/component/ContactSection";
import CtaBannerSection from "@/component/CtaBannerSection";
import CtaSection from "@/component/CtaSection";
import FaqSection from "@/component/FaqSection";
import FeaturesRibbon from "@/component/FeaturesRibbon";
import GoBeyondBlankSection from "@/component/GoBeyondBlankSection";
import HeroSection from "@/component/HeroSection";
import GoalSection from "@/component/OurGoalSection";
import ProcessSection from "@/component/ProcessSection";
import Products from "@/component/ProductSection";
import TrustFeaturesSection from "@/component/TrustFeaturesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesRibbon />
      <GoBeyondBlankSection />
      {/* <AboutSection /> */}
      <Products />
      {/* <GoalSection /> */}
      <BuildTheProductSection />
      {/* <ContactSection /> */}
      <ProcessSection />
      <TrustFeaturesSection />
      <CtaBannerSection />
      {/* <FaqSection /> */}
      <CtaSection />
    </>
  );
}
