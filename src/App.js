import React from "react";
import HeroSection from "./components/HeroSection";
import ListCompanies from "./components/ListCompanies";
import JobsSection from "./components/JobsSection";
import CompaniesSection from "./components/CompaniesSection";
import AdviceSection from "./components/AdviceSection";
import MentoringSection from "./components/MentoringSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1442px] m-auto h-full flex items-center flex-col">
      <HeroSection />
      <ListCompanies />
      <JobsSection />
      <CompaniesSection />
      <AdviceSection />
      <MentoringSection />
      <Footer />
    </div>
  );
}

export default App;
