import React from "react";

const TestimonialsStats = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-16 h-16 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-0 w-24 h-24 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

        {/* Geometric pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="geometric"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
              <path d="M0 0 L40 40" stroke="currentColor" strokeWidth="0.5" />
              <path d="M40 0 L0 40" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Loved by creatives worldwide
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Join thousands of professionals who transformed their portfolios
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "10,000+",
              label: "Portfolios Created",
              color: "text-purple-600",
            },
            {
              number: "4.9/5",
              label: "Average Rating",
              color: "text-pink-600",
            },
            {
              number: "2.5M+",
              label: "Monthly Impressions",
              color: "text-yellow-600",
            },
            { number: "40+", label: "Countries", color: "text-indigo-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`text-5xl font-bold ${stat.color}`}>
                <span
                  className="counter"
                  data-target={stat.number.replace("+", "").replace("/5", "")}
                >
                  0
                </span>
                {stat.number.includes("/5")
                  ? "/5"
                  : stat.number.includes("+")
                  ? "+"
                  : ""}
              </div>
              <p className="mt-2 text-lg font-medium text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Video testimonial */}
            <div className="relative overflow-hidden bg-gray-900 rounded-2xl shadow-2xl">
              <div className="relative aspect-w-16 aspect-h-9">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
                  <button className="flex items-center justify-center w-20 h-20 text-white transition-transform duration-300 transform bg-white bg-opacity-25 rounded-full hover:scale-110">
                    <svg
                      className="w-8 h-8 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  "Changed my career trajectory"
                </h3>
                <p className="mt-2 text-purple-200">
                  The AI organization helped me showcase my work in ways I never
                  imagined.
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah J."
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Sarah J.</p>
                    <p className="text-sm text-purple-300">
                      UX Designer at Meta
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text testimonials */}
            <div className="space-y-6">
              {[
                {
                  quote:
                    "Got my dream job within 2 weeks of using this portfolio. The automatic layout made my work look professional instantly.",
                  author: "Michael T.",
                  role: "3D Artist at Pixar",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  quote:
                    "As a photographer, the automatic tagging saved me countless hours. Now clients find exactly what they're looking for.",
                  author: "Emma L.",
                  role: "Freelance Photographer",
                  avatar: "https://randomuser.me/api/portraits/women/63.jpg",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                    </div>
                    <div>
                      <blockquote>
                        <p className="text-gray-700">"{testimonial.quote}"</p>
                      </blockquote>
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mt-20">
          <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              {
                name: "Google",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              },
              {
                name: "Adobe",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg",
              },
              {
                name: "Netflix",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              },
              {
                name: "Airbnb",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
              },
              {
                name: "Spotify",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
              },
              {
                name: "Pinterest",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
              },
            ].map((company, i) => (
              <div
                key={i}
                className="flex items-center justify-center col-span-1"
              >
                <img
                  className="h-8 max-h-8 filter grayscale hover:grayscale-0 transition-all duration-300"
                  src={company.logo}
                  alt={company.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
