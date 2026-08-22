import AboutSection from "@/component/AboutSection";
import ContactSection from "@/component/ContactSection";
import CtaSection from "@/component/CtaSection";
import FaqSection from "@/component/FaqSection";
import HeroSection from "@/component/HeroSection";
import GoalSection from "@/component/OurGoalSection";
import ProcessSection from "@/component/ProcessSection";
import Products from "@/component/ProductSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GoalSection />
      <Products />
      <ContactSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
