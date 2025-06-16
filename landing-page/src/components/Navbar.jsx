import { NavLink } from "react-router-dom";
import { MenuItems } from "../constants/SiteData";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" title="" className="flex font-bold">
                BrandLogo
              </NavLink>
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {/* Menu icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <ul className="flex space-x-10">
                {MenuItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <NavLink
              href="#"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              Join Now
            </NavLink>
          </div>

          {/* Mobile Nav */}
          {isOpen && (
            <div className="lg:hidden mt-4 space-y-2">
              {MenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block text-base text-black px-4 py-2 rounded hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="block text-center mt-2 px-4 py-2 bg-black text-white rounded-full hover:bg-yellow-300 hover:text-black transition-all"
              >
                Join Now
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
