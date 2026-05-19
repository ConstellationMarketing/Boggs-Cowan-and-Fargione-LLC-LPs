import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Meet the Boggs, Cowan & Fargione Law Firm Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full h-full min-h-[300px]">
            <img
              src="/bcf-attorney.webp"
              alt="Attorney at Boggs, Cowan & Fargione"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Boggs, Cowan & Fargione Law Firm is committed to providing strategic family law representation for individuals and families facing divorce, child custody disputes, child support matters, and other complex domestic issues. The firm focuses on delivering client-centered legal guidance with professionalism, responsiveness, and strong courtroom advocacy when needed.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Our legal team understands the emotional and financial challenges that often come with family law cases. By combining detailed case preparation with a practical, solution-focused approach, we help clients protect their parental rights, financial interests, and long-term stability throughout every stage of the legal process.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              At Boggs, Cowan & Fargione Law Firm, we believe clients should have direct access to clear communication and reliable legal support from the very beginning. Whether your matter can be resolved through negotiation or requires aggressive litigation, our team is prepared to guide you forward with confidence and clarity.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
