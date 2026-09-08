import React from "react";
import { Scale, MapPin, ShieldCheck, Award } from "lucide-react";

export const SpecialtyFocusSection = (): JSX.Element => {
  const practiceAreas = [
    "Child Custody",
    "Adoption",
    "Visitation & Parenting Plans",
    "Parental Rights",
  ];

  const details = [
    {
      icon: MapPin,
      title: "Geographic Areas Served",
      text: "Serving clients throughout Georgia, including Athens-Clarke County, Oconee County, Walton County, and Jackson County.",
    },
    {
      icon: ShieldCheck,
      title: "Legal Focus",
      text: "Dedicated family law representation focused on protecting parental rights, supporting families, and helping clients navigate child custody and adoption matters.",
    },
    {
      icon: Award,
      title: "Unique Value Proposition",
      text: "A modern, client-focused family law firm providing strategic advocacy, responsive communication, personalized legal solutions, and dedicated representation for child custody and adoption matters.",
    },
  ];

  return (
    <section id="specialty-focus" className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Specialty Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-wosnik-light rounded-lg p-8">
            <Scale className="w-10 h-10 text-wosnik-accent mb-4" />
            <h3 className="font-heading text-wosnik-dark text-xl font-normal mb-4">
              Primary Practice Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {practiceAreas.map((area, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-300 rounded-full px-4 py-2 font-body text-wosnik-dark text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <div key={index} className="bg-wosnik-light rounded-lg p-8">
                <IconComponent className="w-10 h-10 text-wosnik-accent mb-4" />
                <h3 className="font-heading text-wosnik-dark text-xl font-normal mb-4">
                  {detail.title}
                </h3>
                <p className="font-body text-wosnik-dark/70 text-base leading-relaxed">
                  {detail.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
