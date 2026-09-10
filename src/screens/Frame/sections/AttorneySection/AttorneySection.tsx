import React from "react";

export const AttorneySection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#efefef] py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-heading text-wosnik-dark text-3xl md:text-4xl font-normal text-center mb-12">
          Meet the Boggs, Cowan, & Fargione LLC Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="relative w-full md:self-start lg:self-stretch lg:h-full">
            <img
              src="/bcf-team.webp"
              alt="The attorneys of Boggs, Cowan, & Fargione LLC"
              className="w-full h-auto rounded-lg lg:absolute lg:inset-0 lg:h-full lg:object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Boggs, Cowan, & Fargione LLC is committed to providing dedicated family law representation for individuals and families navigating child custody and adoption matters. The firm focuses on delivering personalized legal guidance with professionalism, responsiveness, and strong advocacy tailored to each client's unique circumstances.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              Our legal team understands the emotional and personal challenges that can accompany custody disputes and adoption matters. By combining thorough case preparation with a practical, solution-focused approach, we help clients protect their parental rights, pursue their family goals, and make informed decisions throughout every stage of the legal process.
            </p>

            <p className="font-body text-wosnik-dark text-base leading-relaxed">
              At Boggs, Cowan, & Fargione LLC, we believe clients deserve clear communication and reliable legal support from the beginning. Whether your matter involves establishing custody and parenting arrangements, resolving a custody dispute, or navigating the adoption process, our team is prepared to provide strategic guidance and dedicated representation with confidence and clarity.
            </p>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-wosnik-accent hover:bg-wosnik-accent/80 text-white font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px] whitespace-nowrap inline-block"
              >
                Free Phone Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
