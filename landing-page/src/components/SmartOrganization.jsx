import React from "react";

const SmartOrganization = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Floating AI nodes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-pink-400 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-yellow-400 rounded-full filter blur-3xl opacity-10"></div>

        {/* Circuit pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 Q10 15 20 20 T40 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <path
                d="M20 0 Q15 10 20 20 T20 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.7"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              AI-Powered Organization
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Your content automatically sorted, tagged, and laid out beautifully
          </p>
        </div>

        {/* AI Process Visualization */}
        <div className="grid gap-16 mt-20 lg:grid-cols-2">
          {/* Left column - Process steps */}
          <div className="flex flex-col justify-center space-y-10">
            {[
              {
                icon: "🔍",
                title: "Smart Scanning",
                description:
                  "AI analyzes your content's type, subject, and key elements",
              },
              {
                icon: "🏷️",
                title: "Auto-Tagging",
                description: "Relevant tags applied for perfect organization",
              },
              {
                icon: "🎨",
                title: "Layout Magic",
                description:
                  "Content arranged in visually stunning compositions",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 mr-6 text-3xl bg-purple-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Interactive demo */}
          <div className="relative">
            <div className="relative h-full overflow-hidden bg-white rounded-2xl shadow-2xl">
              {/* Browser frame */}
              <div className="absolute top-0 left-0 right-0 flex items-center px-4 py-3 bg-gray-50 rounded-t-2xl">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4 text-xs text-center text-gray-500 truncate">
                  yourportfolio.com/dashboard
                </div>
              </div>

              {/* AI Organization Demo */}
              <div className="pt-12 pb-8 px-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-900">Recently Added</h3>
                  <div className="px-3 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
                    AI Organized
                  </div>
                </div>

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "3D Art",
                    "UX Design",
                    "Photography",
                    "Branding",
                    "Illustration",
                    "Mobile Apps",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${
                        i % 3 === 0
                          ? "bg-purple-100 text-purple-600"
                          : i % 3 === 1
                          ? "bg-pink-100 text-pink-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content Grid Preview */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { type: "image", color: "bg-blue-100" },
                    { type: "pdf", color: "bg-pink-100" },
                    { type: "video", color: "bg-purple-100" },
                    { type: "article", color: "bg-yellow-100" },
                    { type: "image", color: "bg-green-100" },
                    { type: "project", color: "bg-indigo-100" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg ${item.color} flex items-center justify-center text-gray-400 relative overflow-hidden group`}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-2 text-xs text-center text-white bg-black bg-opacity-50 truncate">
                        {item.type.toUpperCase()}
                      </div>
                      {item.type === "image" && (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {item.type === "pdf" && (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {item.type === "video" && (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 10l4.553-2.276A1 1 0 01221 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {item.type === "article" && (
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                {/* AI Suggestion */}
                <div className="p-4 mt-6 bg-purple-50 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        AI Suggestion
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Create a "3D Art" collection to showcase these works
                        together
                      </p>
                      <button className="mt-2 text-sm font-medium text-purple-600 hover:text-purple-700">
                        Apply Suggestion →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg hover:shadow-xl">
            Experience Smart Organization
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmartOrganization;
