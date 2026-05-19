import React from "react";
import { CheckCircle } from "lucide-react";

export const ThankYou = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>

          <h1 className="font-heading text-gray-900 text-4xl md:text-5xl font-normal mb-6">
            Your Request Has Been Received
          </h1>

          <p className="font-body text-gray-700 text-lg mb-4">
            A member of our intake team will contact you shortly.
          </p>

          <p className="font-body text-gray-600 text-base mb-8">
            Watch for a call from (706) 535-5965 or an email from Boggs, Cowan & Fargione LLC. Our team will review your inquiry and discuss the details of your divorce, child custody, or family law matter.
          </p>

          <div className="bg-wosnik-accent/10 border border-wosnik-accent/30 rounded-lg p-6 mb-8">
            <p className="font-body text-gray-900 font-semibold mb-2">
              Next Steps
            </p>
            <p className="font-body text-gray-600 text-sm">
              We will help you understand your legal options and the next steps available for your case. Once your consultation is confirmed, you will speak directly with an attorney about protecting your rights and moving your case forward.
            </p>
            <a
              href="tel:7065355965"
              className="font-heading text-wosnik-accent text-xl font-semibold hover:opacity-80 transition-opacity inline-block mt-4"
            >
              (706) 535-5965
            </a>
          </div>

          <a
            href="/"
            className="inline-block bg-wosnik-accent hover:bg-wosnik-accent/80 text-wosnik-dark font-inter font-medium text-sm px-8 py-3 rounded-full border border-wosnik-accent transition-all duration-150 uppercase tracking-[2px]"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};
