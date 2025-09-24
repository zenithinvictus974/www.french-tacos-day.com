import { Header } from "@/sections/Header";
import { PromoSection } from "@/sections/HeroSection/components/PromoSection";
import { EventSection } from "@/sections/HeroSection/components/EventSection";

export const HeroSection = () => {
  return (
    <section className="bg-scroll bg-[url('https://www.french-tacos-day.com/background.gif')] bg-no-repeat bg-cover box-border caret-transparent min-h-[1000px] w-full bg-center px-4 md:bg-fixed md:px-0">
      <Header />
      <PromoSection />
      <EventSection />
    </section>
  );
};
