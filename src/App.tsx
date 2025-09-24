import { HiddenElement } from "@/components/HiddenElement";
import { MainContent } from "@/sections/MainContent";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";

export const App = () => {
  return (
    <body className="text-neutral-900 text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-figtree">
      <HiddenElement />
      <MainContent />
      <RouteAnnouncer />
    </body>
  );
};
