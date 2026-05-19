import React from "react";
import { Scale, Users, Briefcase, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      text: "Family law disputes can place enormous emotional and financial strain on you and your loved ones. Our firm is committed to protecting your interests both inside and outside the courtroom with steady legal guidance and strong advocacy when the stakes are highest."
    },
    {
      icon: Users,
      text: "Boggs, Cowan & Fargione Law Firm understands that every family situation is unique. We take a personalized approach to every case, developing legal strategies tailored to your specific goals and circumstances rather than relying on one-size-fits-all solutions."
    },
    {
      icon: Briefcase,
      text: "From negotiating favorable settlements to litigating complex family law matters, we work strategically to help clients reach practical solutions while safeguarding what matters most to their parental rights, and future stability."
    },
    {
      icon: Award,
      text: "Throughout your case, our team prioritizes responsive communication, transparency, and preparation. We ensure you understand the legal process, your available options, and the potential outcomes at every stage so you can make informed decisions with confidence."
    }
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-3">
          Why Choose Us
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          Dedicated Family Law Representation Focused on Protecting Your Rights and Your Future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-wosnik-accent p-6 rounded-lg flex flex-col items-center text-center"
              >
                <IconComponent className="w-12 h-12 text-wosnik-dark mb-4" />
                <p className="font-body text-wosnik-dark text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
