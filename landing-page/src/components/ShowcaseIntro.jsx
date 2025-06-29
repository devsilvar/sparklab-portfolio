import { ShowCaseIntoData } from "../constants/SiteData";

const ShowcaseIntro = () => {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-[#FCF8F1]">
        {/* Floating blob background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              <span className="block">Craft Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Perfect Portfolio
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Everything you need to showcase your work in the most stunning way
            </p>
          </div>

          {/* Interactive feature cards */}
          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {ShowCaseIntoData.map((feature, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Feature content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl text-2xl mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.desc}</p>
                  <div className="mt-4">
                    <button className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated CTA */}
          <div className="px-6 py-5 mt-16 text-center bg-white rounded-2xl shadow-lg sm:px-10 sm:py-8">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Ready to build your masterpiece?
            </h3>
            <p className="max-w-2xl mx-auto mt-3 text-lg text-gray-600">
              Join thousands of creatives already showcasing their best work
            </p>
            <div className="mt-8">
              <button className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg hover:shadow-xl">
                Get Started - It's Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseIntro;
