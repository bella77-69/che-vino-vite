import React, { useState } from "react";
import logo from "../assets/images/logo8.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWineDropdownOpen, setIsWineDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleWineDropdown = () => {
    setIsWineDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-[#000000] dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
        {" "}
        <a href="/" className="flex items-center space-x-4 rtl:space-x-reverse">
          {" "}
          {/* <img
            src={logo}
            className="h-8 md:h-10"
            alt="Flowbite Logo"
            width={100} 
            height={150} 
          /> */}
          <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
          Che Vino
        </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-[#CD0617] rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-[#CD0617] dark:bg-[#CD0617] md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/search"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#CD0617] md:hover:bg-transparent md:border-0 md:text-[#CD0617] md:p-0 dark:text-white md:dark:hover:text-[#CD0617] dark:hover:bg-[#CD0617] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#CD0617] md:hover:bg-transparent md:border-0 md:text-[#CD0617] md:p-0 dark:text-white md:dark:hover:text-[#CD0617] dark:hover:bg-[#CD0617] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-[#CD0617] md:hover:bg-transparent md:border-0 md:text-[#CD0617] md:p-0 dark:text-white md:dark:hover:text-[#CD0617] dark:hover:bg-[#CD0617] dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Reviews
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                type="button"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-[#CD0617] md:hover:bg-transparent md:border-0 md:dark:hover:text-[#CD0617] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-[#CD0617] md:dark:hover:bg-transparent"
                onClick={toggleWineDropdown}
              >
                Wine Generator{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="wineDropdownNavbar"
                className={`${
                  isWineDropdownOpen ? "block" : "hidden"
                } z-10 absolute w-40 divide-y divide-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-[#1A1A1A] dark:focus:ring-gray-600 `}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/wines/red"
                      className="block px-4 py-2 text-white hover:text-[#CD0617]"
                    >
                      Red Wine
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wines/white"
                      className="block px-4 py-2 text-white hover:text-[#CD0617]"
                    >
                      White Wine
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wines/sparkling"
                      className="block px-4 py-2 text-white hover:text-[#CD0617]"
                    >
                      Sparkling Wine
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wines/rose"
                      className="block px-4 py-2 text-white hover:text-[#CD0617]"
                    >
                      Rose Wine
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wines/port"
                      className="block px-4 py-2 text-white hover:text-[#CD0617]"
                    >
                      Port Wine
                    </a>
                  </li>
                  <li>
                    <a
                      href="/wines/dessert"
                      className="block px-4 py-2 text-white hover:text-[#CD0617]"
                    >
                      Dessert Wine
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
