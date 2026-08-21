import AboutSection from "@/component/AboutSection";
import ContactSection from "@/component/ContactSection";
import CtaSection from "@/component/CtaSection";
import FaqSection from "@/component/FaqSection";
import HeroSection from "@/component/HeroSection";
import GoalSection from "@/component/OurGoalSection";
import ProcessSection from "@/component/ProcessSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GoalSection />
      <ContactSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
