import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/ecosystem/Hero";
import EcosystemFlow from "./components/ecosystem/EcosystemFlow";
import WhatWeDo from "./components/ecosystem/WhatWeDo";
import AcademyPreview from "./components/academy/AcademyPreview";
import InsightsPreview from "./components/insights/InsightsPreview";
import CommunityCta from "./components/community/CommunityCta";

function Home() {
  return (
    <>
      <Hero />
      <EcosystemFlow />
      <WhatWeDo />
      <AcademyPreview />
      <InsightsPreview />
      <CommunityCta />
    </>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
