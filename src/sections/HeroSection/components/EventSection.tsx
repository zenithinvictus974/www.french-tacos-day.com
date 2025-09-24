import { EventText } from "@/sections/HeroSection/components/EventText";
import { EventImage } from "@/sections/HeroSection/components/EventImage";
import { EventDescription } from "@/sections/HeroSection/components/EventDescription";

export const EventSection = () => {
  return (
    <section className="box-border caret-transparent text-center py-8 md:py-[72px]">
      <EventText />
      <EventImage />
      <EventDescription />
    </section>
  );
};
