import React from "react";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { CriminalDefenseServicesSection } from "./sections/CriminalDefenseServicesSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { AttorneySection } from "./sections/AttorneySection";
import { StickyCtaSection } from "./sections/StickyCtaSection/StickyCtaSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-full bg-wosnik-light pb-24">
      <div className="flex flex-col">
        <HeroSection />
        <CriminalDefenseServicesSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <AttorneySection />
        <ContactSection />
        <FooterSection />
      </div>
      <StickyCtaSection />
    </div>
  );
};
