import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
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

      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-purple-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">
                PortfolioAI
              </span>
            </div>
            <p className="mt-4 text-black">
              The smartest way to showcase your creative work. Powered by AI to
              make your portfolio stand out.
            </p>
            <div className="flex mt-6 space-x-4">
              {["twitter", "facebook", "instagram", "linkedin", "dribbble"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={`M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z`}
                      />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Footer links */}
          {[
            {
              title: "Product",
              links: [
                "Features",
                "Templates",
                "Pricing",
                "Integrations",
                "Roadmap",
              ],
            },
            {
              title: "Resources",
              links: ["Blog", "Guides", "Webinars", "Community", "Help Center"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Partners", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "Cookie Policy", "GDPR"],
            },
          ].map((column, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-black hover:text-gray-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="pt-10 mt-10 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-black">
              &copy; {new Date().getFullYear()} PortfolioAI. All rights
              reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <a
                href="#"
                className="text-sm text-black hover:hover:text-gray-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-black hover:hover:text-gray-400"
              >
                Terms of Service
              </a>
              <a href="#" className="text-sm text-black hover:text-gray-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
