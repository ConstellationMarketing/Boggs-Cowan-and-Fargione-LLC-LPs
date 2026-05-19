import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Trusted family law representation for divorce and child custody matters in Georgia",
    "Strategic advocacy focused on protecting parental rights and financial stability",
    "Personalized legal guidance tailored to your family's unique situation",
    "Clear communication and responsive client support throughout your case",
    "Free phone consultations available to discuss your legal options"
  ];

  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          About Us
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full mb-12 max-w-4xl">
            <img
              src="/image (15).png"
              alt="Team"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex flex-col space-y-6 text-center max-w-3xl mb-12">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Boggs, Cowan & Fargione Law Firm is a Georgia family law practice dedicated to helping individuals and families navigate some of life's most difficult transitions with clarity, strategy, and dependable legal guidance. Focused on divorce, child custody, child support, and related family law matters, the firm provides personalized representation tailored to the unique needs of every client.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Our approach is built on communication, preparation, and results-driven advocacy. We understand that family law disputes can impact every aspect of your future from your relationship with your children to your financial stability. That is why our team works diligently to provide clear legal direction, responsive support, and practical solutions throughout every stage of your case.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Whether resolving matters through negotiation, mediation, or litigation, Boggs, Cowan & Fargione Law Firm remains committed to protecting what matters most to you. From contested divorces and custody disputes to post-divorce modifications and parental rights matters, we help clients move forward with confidence and peace of mind.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Serving clients throughout Georgia, Boggs, Cowan & Fargione Law Firm combines modern legal strategy with compassionate client service to deliver strong representation when families need it most.
            </p>
          </div>

          <div className="w-full">
            <h3 className="font-heading text-wosnik-dark text-2xl font-normal text-center mb-8">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <CheckCircle className="w-10 h-10 text-wosnik-dark mb-3" />
                  <p className="font-body text-wosnik-dark text-sm font-medium leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
