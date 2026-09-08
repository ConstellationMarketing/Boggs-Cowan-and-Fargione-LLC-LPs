import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutUsSection = (): JSX.Element => {
  const highlights = [
    "Dedicated child custody and adoption representation throughout Georgia",
    "Strategic advocacy focused on protecting parental rights and family interests",
    "Personalized legal guidance tailored to your family's unique circumstances",
    "Clear communication and responsive support throughout your case",
    "Phone consultations available to discuss your legal options",
    "Legal support for custody disputes, parenting arrangements, and adoption matters"
  ];

  return (
    <section id="about-us" className="w-full bg-white pt-6 md:pt-8 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          About Boggs, Cowan & Fargione LLC
        </h2>

        <div className="flex flex-col items-center">
          <div className="w-full mb-12 max-w-4xl">
            <img
              src="/bcf-about-us.webp"
              alt="Boggs, Cowan & Fargione Law Firm office in Georgia"
              className="w-full h-auto max-h-[350px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col space-y-6 text-center max-w-3xl mb-12">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Boggs, Cowan & Fargione Law Firm is a Georgia family law practice dedicated to helping individuals and families navigate child custody and adoption matters with clarity, strategy, and dependable legal guidance. Focused on protecting parental rights and supporting growing families, the firm provides personalized representation tailored to the unique needs of every client.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Our approach is built on communication, preparation, and dedicated advocacy. We understand that child custody and adoption matters can have a lasting impact on your family and your child's future. That is why our team works diligently to provide clear legal direction, responsive support, and practical solutions throughout every stage of your case.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Whether you are facing a contested custody matter, seeking to establish or modify parenting arrangements, or navigating the adoption process, Boggs, Cowan & Fargione Law Firm is committed to protecting what matters most to you. We help Georgia families understand their legal options and move forward with confidence.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Serving clients throughout Georgia, Boggs, Cowan & Fargione Law Firm combines strategic legal representation with compassionate client service to provide trusted guidance when families need it most.
            </p>
          </div>

          <div className="w-full">
            <h3 className="font-heading text-wosnik-dark text-2xl font-normal text-center mb-8">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-wosnik-accent rounded-lg p-6 flex flex-col items-center text-center"
                >
                  <CheckCircle className="w-10 h-10 text-white mb-3" />
                  <p className="font-body text-white text-sm font-medium leading-relaxed">
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
