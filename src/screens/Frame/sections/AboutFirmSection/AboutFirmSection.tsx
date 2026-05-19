import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutFirmSection = (): JSX.Element => {
  const paragraphs = [
    "Boggs, Cowan & Fargione Law Firm is a Georgia family law practice dedicated to helping individuals and families navigate some of life's most difficult transitions with clarity, strategy, and dependable legal guidance. Focused on divorce, child custody, child support, and related family law matters, the firm provides personalized representation tailored to the unique needs of every client.",
    "Our approach is built on communication, preparation, and results-driven advocacy. We understand that family law disputes can impact every aspect of your future from your relationship with your children to your financial stability. That is why our team works diligently to provide clear legal direction, responsive support, and practical solutions throughout every stage of your case.",
    "Whether resolving matters through negotiation, mediation, or litigation, Boggs, Cowan & Fargione Law Firm remains committed to protecting what matters most to you. From contested divorces and custody disputes to post-divorce modifications and parental rights matters, we help clients move forward with confidence and peace of mind.",
    "Serving clients throughout Georgia, Boggs, Cowan & Fargione Law Firm combines modern legal strategy with compassionate client service to deliver strong representation when families need it most."
  ];

  const achievements = [
    "Dedicated family law expertise",
    "Strategic representation in divorce matters",
    "Child custody & support guidance",
    "Responsive client communication",
    "Personalized legal solutions"
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-wosnik-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          About Boggs, Cowan & Fargione LLC
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="font-body text-gray-700 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
            >
              <CheckCircle className="w-10 h-10 text-wosnik-dark mb-3" />
              <p className="font-body text-wosnik-dark text-sm font-medium leading-relaxed">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
