import { Logo } from "@/sections/Header/components/Logo";
import { ParticipateButton } from "@/sections/Header/components/ParticipateButton";

export const Header = () => {
  return (
    <header className="box-border caret-transparent text-center mb-4 py-8 md:mb-8 md:py-[72px]">
      <Logo />
      <ParticipateButton />
    </header>
  );
};
