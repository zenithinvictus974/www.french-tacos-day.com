import { PromoText } from "@/sections/HeroSection/components/PromoText";
import { RotatedImage } from "@/sections/HeroSection/components/RotatedImage";

export const PromoSection = () => {
  return (
    <section className="box-border caret-transparent text-center mb-4 py-8 md:mb-8 md:py-[72px]">
      <PromoText />
      <RotatedImage />
    </section>
  );
};
