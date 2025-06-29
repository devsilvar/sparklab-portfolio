import React from "react";
import PortfolioMagicImporter from "../components/PortfolioMagicImporter";
import SmartOrganization from "../components/SmartOrganization";
import TestimonialsStats from "../components/TestimonialsStats";
import PricingPlans from "../components/PricingPlans";
import ShowcaseIntro from "../components/ShowcaseIntro";

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* SVG Blob Background (replaces CSS blobs) */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="blob1" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="blob2" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="blob3" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M300,-50C360,30 420,130 380,190C340,250 200,270 120,250C40,230 20,170 30,110C40,50 80,-10 120,-30C160,-50 200,-30 300,-50Z"
              fill="url(#blob1)"
              className="opacity-70 mix-blend-multiply animate-blob"
              style={{ transformOrigin: "50% 50%" }}
            />
            <path
              d="M800,100C860,180 820,280 760,310C700,340 620,300 540,250C460,200 380,140 400,80C420,20 540,-40 600,10C660,60 740,120 800,100Z"
              fill="url(#blob2)"
              className="opacity-70 mix-blend-multiply animate-blob animation-delay-2000"
              style={{ transformOrigin: "60% 40%" }}
            />
            <path
              d="M500,600C560,680 520,780 460,810C400,840 320,800 240,750C160,700 80,640 100,580C120,520 240,460 300,510C360,560 440,620 500,600Z"
              fill="url(#blob3)"
              className="opacity-70 mix-blend-multiply animate-blob animation-delay-4000"
              style={{ transformOrigin: "40% 60%" }}
            />
          </svg>
        </div>

        {/*  */}
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-20 h-20 md:w-40 md:h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-24 h-24 md:w-60 md:h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-16 h-16 md:w-50 md:h-50 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/*  */}

        <div className="relative z-10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-16 lg:py-28">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-purple-800 bg-purple-100 rounded-full animate-bounce">
                  ✨ Stand out from the crowd
                </div>

                <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="block">Your Story,</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    Beautifully Told
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                  Create a stunning portfolio in minutes that showcases your
                  unique talents and gets you noticed.
                </p>

                <div className="flex flex-col mt-10 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
                  <button className="px-6 py-3 text-base font-bold text-white transition-all duration-300 transform bg-purple-600 rounded-lg sm:px-8 sm:py-4 sm:text-lg hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg hover:shadow-xl">
                    Start Building - It's Free
                  </button>
                  <button className="px-6 py-3 text-base font-bold text-purple-700 transition-all duration-300 transform bg-white border-2 border-purple-200 rounded-lg sm:px-8 sm:py-4 sm:text-lg hover:border-purple-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-100 shadow-lg hover:shadow-xl">
                    See Examples
                  </button>
                </div>

                <div className="flex items-center justify-center mt-12 space-x-6 lg:justify-start">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <img
                        key={item}
                        className="w-8 h-8 border-2 border-white rounded-full sm:w-10 sm:h-10"
                        src={`https://randomuser.me/api/portraits/${
                          item % 2 === 0 ? "women" : "men"
                        }/${item + 20}.jpg`}
                        alt="Happy user"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>
                      Join{" "}
                      <span className="font-bold text-purple-600">10,000+</span>{" "}
                      creatives
                    </p>
                    <p className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      4.9/5 from 2,000+ reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Portfolio Mockup */}
                <div className="relative w-full overflow-hidden bg-white rounded-2xl shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 flex items-center px-4 py-3 bg-gray-50">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <img
                    className="w-full mt-6 sm:mt-8"
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt="Portfolio example on laptop"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      Sarah Johnson
                    </h3>
                    <p className="text-purple-200 text-sm sm:text-base">
                      UX Designer & Illustrator
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <ShowcaseIntro />
      {/*  */}

      <PortfolioMagicImporter />

      {/*  */}
      <SmartOrganization />

      {/*  */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#FCF8F1] to-white">
        {/* Floating background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              <span className="block">Inspiring</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Portfolio Examples
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
              See how creatives are using our platform to showcase their best
              work
            </p>
          </div>

          {/* Interactive gallery */}
          <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Morgan",
                title: "3D Artist",
                image:
                  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                tags: ["3D Art", "Animation"],
              },
              {
                name: "Jordan Lee",
                title: "UX Designer",
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                tags: ["Mobile Apps", "Web Design"],
              },
              {
                name: "Taylor Smith",
                title: "Photographer",
                image:
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                tags: ["Portrait", "Commercial"],
              },
              {
                name: "Casey Chen",
                title: "Illustrator",
                image:
                  "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                tags: ["Digital Art", "Character Design"],
              },
              {
                name: "Riley Jones",
                title: "Architect",
                image:
                  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                tags: ["3D Renders", "Interiors"],
              },
              {
                name: "Morgan Blake",
                title: "Product Designer",
                image:
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                tags: ["Industrial", "Furniture"],
              },
            ].map((portfolio, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <img
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    src={portfolio.image}
                    alt={`${portfolio.name}'s portfolio`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      {portfolio.name}
                    </h3>
                    <p className="text-purple-200">{portfolio.title}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {portfolio.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs text-purple-100 bg-purple-600/50 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="self-start mt-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 text-lg font-bold text-purple-600 transition-all duration-300 transform bg-white border-2 border-purple-200 rounded-lg hover:border-purple-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-100 shadow-lg hover:shadow-xl">
              Browse All Portfolios
            </button>
          </div>
        </div>
      </section>

      {/*  */}

      {/*  */}
      <TestimonialsStats />

      {/*  */}
      <PricingPlans />
    </>
  );
};

export default Home;
