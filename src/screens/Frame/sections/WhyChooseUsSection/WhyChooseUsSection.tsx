import React from "react";
import { Scale, Users, Briefcase, Award } from "lucide-react";

export const WhyChooseUsSection = (): JSX.Element => {
  const features = [
    {
      icon: Scale,
      text: "Child custody and adoption matters can have a lasting impact on you, your children, and your family's future. Boggs, Cowan & Fargione Law Firm provides steady legal guidance and dedicated advocacy to help Georgia families navigate these important legal matters with clarity and confidence."
    },
    {
      icon: Users,
      text: "Our firm is committed to protecting your parental rights and the interests of your family. Whether you are involved in a custody dispute, seeking to establish or modify parenting arrangements, or navigating the adoption process, we work strategically to pursue practical solutions while protecting what matters most."
    },
    {
      icon: Briefcase,
      text: "Boggs, Cowan & Fargione Law Firm understands that every family situation is unique. That is why we take a personalized approach to every case, developing legal strategies tailored to your specific goals, circumstances, and family needs rather than relying on one-size-fits-all solutions."
    },
    {
      icon: Award,
      text: "Throughout your case, our team prioritizes responsive communication, transparency, and thorough preparation. We help you understand the legal process, your available options, and the important considerations involved so you can make informed decisions with confidence."
    }
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-3">
          Why Choose Us
        </h2>
        <p className="font-body text-gray-600 text-center text-lg mb-12">
          Dedicated Family Law Representation Focused on Protecting Your Rights and Your Family's Future
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-wosnik-accent p-6 rounded-lg flex flex-col items-center text-center"
              >
                <IconComponent className="w-12 h-12 text-white mb-4" />
                <p className="font-body text-white text-sm leading-relaxed">
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
