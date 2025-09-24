import { StepsSection } from "@/sections/ParticipationSection/components/StepsSection";
import { FloatingImages } from "@/sections/ParticipationSection/components/FloatingImages";

export const ParticipationContent = () => {
  return (
    <div className="relative items-center bg-[url('https://www.french-tacos-day.com/ftd-assets/ftd-texturegras.png')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col py-8 md:py-0">
      <StepsSection />
      <FloatingImages
        src="https://cdn.prod.website-files.com/64ba1f9dc11e6662d2c9738b/68d3a2d4b7119333264c0d87_cadeau%202.png"
        variant="static max-w-[337.5px] min-h-[auto] min-w-[auto] z-20 right-auto bottom-auto md:absolute md:max-w-6xl md:min-h-0 md:min-w-0 md:w-96 md:right-20 md:bottom-0"
      />
      <FloatingImages
        src="https://c.animaapp.com/mfxmfzp8WHj4Hi/assets/ftd-border-bottom.png"
        variant="max-w-full"
      />
    </div>
  );
};
