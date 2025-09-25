import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HiddenElement } from "@/components/HiddenElement";
import { MainContent } from "@/sections/MainContent";
import { RouteAnnouncer } from "@/components/RouteAnnouncer";
import { RulesPage } from "@/pages/RulesPage";

export const App = () => {
  return (
    <Router>
      <body className="text-neutral-900 text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-figtree">
        <HiddenElement />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/reglement" element={<RulesPage />} />
        </Routes>
        <RouteAnnouncer />
      </body>
    </Router>
  );
};
