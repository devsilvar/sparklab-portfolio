const PortfolioMagicImporter = () => {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-purple-50">
        {/* Floating tech elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
          <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          {/* Abstract tech grid */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="tech-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Universal Import
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              Bring your work from anywhere – we'll make it portfolio-ready
            </p>
          </div>

          {/* Interactive import visualization */}
          <div className="grid gap-16 mt-20 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    ),
                    title: "Drag & Drop Any Format",
                    description: "PDFs, images, videos – just drop them in",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    ),
                    title: "Import by URL",
                    description: "Paste a link to any article or media",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    ),
                    title: "Auto-Backup Cloud Sync",
                    description: "Everything saved securely in the cloud",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-opacity-15 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${
                            feature.icon.props.className.includes(
                              "text-purple-500"
                            )
                              ? "rgba(168, 85, 247, 0.1)"
                              : feature.icon.props.className.includes(
                                  "text-pink-500"
                                )
                              ? "rgba(236, 72, 153, 0.1)"
                              : "rgba(234, 179, 8, 0.1)"
                          }`,
                        }}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated import preview */}
            <div className="relative">
              <div className="relative h-full overflow-hidden bg-white rounded-2xl shadow-2xl">
                {/* Browser mockup */}
                <div className="absolute top-0 left-0 right-0 flex items-center px-4 py-3 bg-gray-50 rounded-t-2xl">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4 text-xs text-center text-gray-500 truncate">
                    https://yourportfolio.com/import
                  </div>
                </div>

                {/* Animated content */}
                <div className="pt-12 pb-8">
                  <div className="relative h-80">
                    {/* Floating import elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        {/* Base card */}
                        <div className="absolute inset-0 flex items-center justify-center p-6 bg-purple-50 rounded-xl shadow-inner">
                          <div className="text-center">
                            <svg
                              className="w-12 h-12 mx-auto text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <p className="mt-2 text-sm text-purple-600">
                              Drop files here
                            </p>
                          </div>
                        </div>

                        {/* Floating import items */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white p-2 rounded-lg shadow-lg animate-float1">
                          <div className="flex items-center justify-center w-full h-full bg-blue-50 rounded">
                            <svg
                              className="w-8 h-8 text-blue-400"
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
                          </div>
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white p-2 rounded-lg shadow-lg animate-float2">
                          <div className="flex items-center justify-center w-full h-full bg-pink-50 rounded">
                            <svg
                              className="w-8 h-8 text-pink-400"
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
                          </div>
                        </div>

                        <div className="absolute top-1/4 -right-6 w-14 h-14 bg-white p-2 rounded-lg shadow-lg animate-float3">
                          <div className="flex items-center justify-center w-full h-full bg-yellow-50 rounded">
                            <svg
                              className="w-6 h-6 text-yellow-400"
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
                          </div>
                        </div>
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
              Try Importing Now
            </button>
          </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          @keyframes float1 {
            0%,
            100% {
              transform: translateY(0) rotate(-5deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
          @keyframes float2 {
            0%,
            100% {
              transform: translateY(0) rotate(3deg);
            }
            50% {
              transform: translateY(-20px) rotate(-3deg);
            }
          }
          @keyframes float3 {
            0%,
            100% {
              transform: translateY(0) rotate(-2deg);
            }
            50% {
              transform: translateY(-10px) rotate(2deg);
            }
          }
          .animate-float1 {
            animation: float1 6s ease-in-out infinite;
          }
          .animate-float2 {
            animation: float2 7s ease-in-out infinite 1s;
          }
          .animate-float3 {
            animation: float3 5s ease-in-out infinite 0.5s;
          }
        `}</style>
      </section>
    </>
  );
};
export default PortfolioMagicImporter;
