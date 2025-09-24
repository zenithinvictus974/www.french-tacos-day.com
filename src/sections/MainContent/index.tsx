import { HeroSection } from "@/sections/HeroSection";
import { ParticipationSection } from "@/sections/ParticipationSection";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent">
      <HeroSection />
      <ParticipationSection />
    </div>
  );
};
