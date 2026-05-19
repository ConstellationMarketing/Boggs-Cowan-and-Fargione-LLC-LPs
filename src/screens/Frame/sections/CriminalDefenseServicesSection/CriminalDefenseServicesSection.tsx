import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const practiceAreas = [
    { title: "Divorce Representation", icon: "→" },
    { title: "Child Custody & Visitation", icon: "→" },
    { title: "Child Support Matters", icon: "→" },
    { title: "Mediation & Settlement", icon: "→" },
    { title: "Property Division", icon: "→" },
    { title: "Parental Rights", icon: "→" },
  ];

  return (
    <section id="practice-areas" className="w-full bg-wosnik-light py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
            Strategic Legal Support for Families & Future Stability
          </h2>
          <p className="font-body text-wosnik-dark/70 text-base max-w-3xl mx-auto mb-8">
            Family law matters can be emotional, complex, and time-sensitive. Our team provides dedicated legal guidance to help clients protect their parental rights, financial interests, and long-term future while navigating difficult transitions with clarity and confidence.
          </p>
          <h3 className="font-heading text-wosnik-dark text-2xl font-normal">
            Services We Provide
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg py-4 px-6"
            >
              <span className="font-body text-wosnik-dark text-base font-medium">{area.title}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-wosnik-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-wosnik-dark text-2xl md:text-3xl font-normal mb-6">
            Schedule Your Free Phone Consultation Today
          </h3>

          <a
            href="tel:7065355965"
            className="inline-block font-heading text-wosnik-dark text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (706) 535-5965
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:7065355965"
              className="bg-wosnik-dark hover:bg-wosnik-dark/90 text-white font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Free consultations available
            </a>

            <p className="font-body text-wosnik-dark text-base">
              Speak directly with our legal team to discuss your divorce, child custody, or family law matter. Get clear answers, trusted guidance, and the information you need to confidently move forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
