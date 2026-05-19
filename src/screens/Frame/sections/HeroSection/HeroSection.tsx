import React from "react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] bg-wosnik-dark">
      {/* Navigation Bar */}
      <div className="relative w-full bg-wosnik-dark border-b border-wosnik-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex justify-center md:justify-start">
            <img
              src="/bcf-logo.png"
              alt="Boggs, Cowan & Fargione Logo"
              className="w-[200px] h-[43px] md:w-[300px] md:h-[65px] lg:w-[400px] lg:h-[86px] object-contain filter brightness-0 invert"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-1 border-2 border-wosnik-accent rounded px-4 py-2 md:px-8 md:py-4 w-full md:min-w-[280px]">
            <p className="font-body text-wosnik-accent text-xs md:text-sm uppercase tracking-wider font-semibold">Call 24/7</p>
            <a
              href="tel:7065355965"
              className="font-body text-white hover:text-wosnik-accent transition-colors text-base md:text-lg font-semibold"
            >
              (706) 535-5965
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4">
          Divorce & Child Custody Representation in Georgia
        </h1>

        <h2 className="font-body text-wosnik-accent text-xl md:text-2xl font-semibold mb-6">
          Protecting Your Rights, Your Children, and Your Future With Strategic Family Law Guidance
        </h2>

        <p className="font-body text-white text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Whether you are facing divorce, a custody dispute, or a complex family law matter, Boggs, Cowan & Fargione Law Firm provides professional representation with clear communication and dedicated advocacy. We help Georgia families move forward with confidence through every stage of the legal process.
        </p>

        <button
          className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-12 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] inline-block"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Schedule Your Consultation
        </button>
      </div>
    </section>
  );
};
