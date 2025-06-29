// import React from 'react';

// const PricingPlans = () => {
//   return (
//     <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-purple-50">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-1/3 right-0 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
//         <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>
//       </div>

//       <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
//             Simple, transparent pricing
//           </h2>
//           <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
//             Everything you need to showcase your work professionally
//           </p>

//           {/* Toggle switch */}
//           <div className="flex items-center justify-center mt-8">
//             <span className="mr-4 text-lg font-medium text-gray-700">Monthly</span>
//             <label className="relative inline-flex items-center cursor-pointer">
//               <input type="checkbox" className="sr-only peer" />
//               <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
//               <span className="ml-4 text-lg font-medium text-gray-700">Annual (save 20%)</span>
//             </label>
//           </div>
//         </div>

//         {/* Pricing cards */}
//         <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               name: "Starter",
//               price: "$9",
//               period: "/month",
//               description: "Perfect for students and personal projects",
//               features: [
//                 "5 projects",
//                 "Basic AI organization",
//                 "Standard templates",
//                 "500MB storage",
//                 "Custom domain"
//               ],
//               cta: "Get Started",
//               popular: false,
//               color: "text-purple-600"
//             },
//             {
//               name: "Professional",
//               price: "$19",
//               period: "/month",
//               description: "For freelancers and creative professionals",
//               features: [
//                 "Unlimited projects",
//                 "Advanced AI organization",
//                 "Premium templates",
//                 "5GB storage",
//                 "Custom domain + SSL",
//                 "Analytics dashboard",
//                 "Client proofing"
//               ],
//               cta: "Start Free Trial",
//               popular: true,
//               color: "text-pink-600"
//             },
//             {
//               name: "Agency",
//               price: "$49",
//               period: "/month",
//               description: "For teams and creative agencies",
//               features: [
//                 "Unlimited projects",
//                 "Premium AI organization",
//                 "All templates + custom",
//                 "50GB storage",
//                 "Team collaboration",
//                 "Advanced analytics",
//                 "White-label options",
//                 "Priority support"
//               ],
//               cta: "Contact Sales",
//               popular: false,
//               color: "text-indigo-600"
//             }
//           ].map((plan, i) => (
//             <div
//               key={i}
//               className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}
//             >
//               {plan.popular && (
//                 <div className="absolute top-0 right-0 px-4 py-1 text-sm font-bold text-white transform translate-x-2 -translate-y-2 bg-pink-500 rounded-full">
//                   Most Popular
//                 </div>
//               )}
//               <div className="mb-6">
//                 <h3 className={`text-2xl font-bold ${plan.color}`}>{plan.name}</h3>
//                 <div className="flex items-end mt-2">
//                   <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                   <span className="ml-1 text-lg text-gray-500">{plan.period}</span>
//                 </div>
//                 <p className="mt-2 text-gray-600">{plan.description}</p>
//               </div>

//               <ul className="space-y-3">
//                 {plan.features.map((feature, j) => (
//                   <li key={j} className="flex items-start">
//                     <svg className="w-5 h-5 mt-0.5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className={`w-full mt-8 px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
//                 plan.popular
//                   ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:-translate-y-1'
//                   : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
//               }`}>
//                 {plan.cta}
//               </button>

//               {plan.popular && (
//                 <div className="mt-4 text-sm text-center text-gray-500">
//                   <span className="font-medium text-pink-600">30-day free trial</span> included
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Enterprise CTA */}
//         <div className="px-8 py-6 mt-12 text-center bg-white rounded-xl shadow-lg">
//           <h3 className="text-xl font-bold text-gray-900">Need enterprise solutions?</h3>
//           <p className="mt-2 text-gray-600">
//             Custom plans for large teams and educational institutions
//           </p>
//           <button className="px-6 py-2 mt-4 font-medium text-purple-600 transition-colors duration-300 border border-purple-600 rounded-lg hover:bg-purple-50">
//             Contact our sales team
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState, useEffect } from "react";

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [countersActive, setCountersActive] = useState(false);

  // Toggle between monthly/annual pricing
  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  // Counter animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000 && !countersActive) {
        setCountersActive(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [countersActive]);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "$9",
      annualPrice: "$7",
      period: "/month",
      description: "Perfect for students and personal projects",
      features: [
        "5 projects",
        "Basic AI organization",
        "Standard templates",
        "500MB storage",
        "Custom domain",
      ],
      cta: "Get Started",
      popular: false,
      color: "text-purple-600",
    },
    {
      name: "Professional",
      monthlyPrice: "$19",
      annualPrice: "$15",
      period: "/month",
      description: "For freelancers and creative professionals",
      features: [
        "Unlimited projects",
        "Advanced AI organization",
        "Premium templates",
        "5GB storage",
        "Custom domain + SSL",
        "Analytics dashboard",
        "Client proofing",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "text-pink-600",
    },
    {
      name: "Agency",
      monthlyPrice: "$49",
      annualPrice: "$39",
      period: "/month",
      description: "For teams and creative agencies",
      features: [
        "Unlimited projects",
        "Premium AI organization",
        "All templates + custom",
        "50GB storage",
        "Team collaboration",
        "Advanced analytics",
        "White-label options",
        "Priority support",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-purple-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 right-0 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Everything you need to showcase your work professionally
          </p>

          {/* Toggle switch */}
          <div className="flex items-center justify-center mt-8">
            <span
              className={`mr-4 text-lg font-medium ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAnnual}
                onChange={togglePricing}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
              <span
                className={`ml-4 text-lg font-medium ${
                  isAnnual ? "text-gray-900" : "text-gray-500"
                }`}
              >
                Annual (save 20%)
              </span>
            </label>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-pink-500 transform hover:scale-105"
                  : "hover:scale-[1.02]"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 px-4 py-1 text-sm font-bold text-white transform translate-x-2 -translate-y-2 bg-pink-500 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${plan.color}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-lg text-gray-500">
                    {plan.period}
                  </span>
                  {isAnnual && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      {plan.monthlyPrice}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 px-6 py-3 font-medium rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:-translate-y-1"
                    : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                }`}
              >
                {plan.cta}
              </button>

              {plan.popular && (
                <div className="mt-4 text-sm text-center text-gray-500">
                  <span className="font-medium text-pink-600">
                    30-day free trial
                  </span>{" "}
                  included
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="px-8 py-6 mt-12 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-900">
            Need enterprise solutions?
          </h3>
          <p className="mt-2 text-gray-600">
            Custom plans for large teams and educational institutions
          </p>
          <button className="px-6 py-2 mt-4 font-medium text-purple-600 transition-colors duration-300 border border-purple-600 rounded-lg hover:bg-purple-50">
            Contact our sales team
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
