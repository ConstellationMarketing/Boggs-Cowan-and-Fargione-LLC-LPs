import React from "react";

export const StickyCtaSection = (): JSX.Element => {
  return (
    <section className="fixed bottom-0 left-0 right-0 bg-wosnik-dark border-t border-wosnik-accent/20 py-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-center">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px]"
          >
            Schedule Your Consultation
          </button>
          <a
            href="tel:7065355965"
            className="w-full md:w-auto bg-white hover:bg-gray-100 text-wosnik-accent font-inter font-medium text-sm px-8 py-3 rounded-full border border-white transition-all duration-150 uppercase tracking-[2px] text-center"
          >
            Call Now: (706) 535-5965
          </a>
        </div>
      </div>
    </section>
  );
};
