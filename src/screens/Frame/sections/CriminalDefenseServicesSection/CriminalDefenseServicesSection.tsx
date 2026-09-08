import React from "react";

export const CriminalDefenseServicesSection = (): JSX.Element => {
  const practiceAreas = [
    {
      title: "Child Custody Representation",
      description:
        "Dedicated advocacy for custody disputes, helping parents protect their parental rights and pursue arrangements that support their child's best interests.",
    },
    {
      title: "Child Visitation & Parenting Time",
      description:
        "Legal guidance for establishing, modifying, and enforcing parenting time and visitation arrangements while protecting meaningful parent-child relationships.",
    },
    {
      title: "Adoption Representation",
      description:
        "Comprehensive legal support for families navigating the adoption process, including stepparent adoption, from understanding legal requirements to completing the necessary steps for a successful adoption.",
    },
    {
      title: "Stepparent Adoption",
      description:
        "Personalized legal guidance for stepparents seeking to legally adopt a spouse's child, helping families navigate the required legal process and protect their family's future.",
    },
  ];

  return (
    <section id="practice-areas" className="w-full bg-wosnik-light py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal mb-4">
            Dedicated Legal Support for Child Custody & Adoption
          </h2>
          <p className="font-body text-wosnik-dark/70 text-base max-w-3xl mx-auto mb-8">
            Child custody and adoption matters can have a lasting impact on your family and your child's future. Our team provides dedicated legal guidance to help Georgia families understand their options, protect their rights, and navigate the legal process with clarity and confidence.
          </p>
          <h3 className="font-heading text-wosnik-dark text-2xl font-normal">
            Services We Provide
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg py-6 px-6"
            >
              <h4 className="font-body text-wosnik-dark text-base font-semibold mb-2">{area.title}</h4>
              <p className="font-body text-wosnik-dark/70 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-wosnik-accent rounded-lg p-12 text-center">
          <h3 className="font-heading text-white text-2xl md:text-3xl font-normal mb-6">
            Free Phone Consultation
          </h3>

          <a
            href="tel:7065355965"
            className="inline-block font-heading text-white text-2xl md:text-3xl font-semibold hover:opacity-80 transition-opacity mb-8"
          >
            (706) 535-5965
          </a>

          <div className="flex flex-col items-center gap-4">
            <a
              href="tel:7065355965"
              className="bg-white hover:bg-gray-100 text-wosnik-accent font-inter font-medium text-sm px-8 py-3 rounded-full transition-all duration-150 uppercase tracking-[2px] inline-block"
            >
              Free Phone Consultation
            </a>

            <p className="font-body text-white text-base">
              Speak directly with our legal team to discuss your child custody or adoption matter. Get clear answers, trusted guidance, and dedicated legal support to protect your family and confidently move forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
