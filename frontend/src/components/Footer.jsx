import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-[#000000] text-white pt-8">
      <div className="container mx-auto py-8 px-4 md:px-0  border-t pt-4 w-10/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="dark:hover:text-[#CD0617]">
                  Home
                </a>
              </li>
              <li>
                <a href="/search" className="dark:hover:text-[#CD0617]">
                  Search
                </a>
              </li>
              <li>
                <a href="/contact" className="dark:hover:text-[#CD0617]">
                  Contact
                </a>
              </li>
              <li>
                <a href="/reviews" className="dark:hover:text-[#CD0617]">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Wine Generator</h3>
            <ul>
              <li>
                <a href="/wines/red" className="dark:hover:text-[#CD0617]">
                  Red Wine
                </a>
              </li>
              <li>
                <a href="/wines/white" className="dark:hover:text-[#CD0617]">
                  White Wine
                </a>
              </li>
              <li>
                <a
                  href="/wines/sparkling"
                  className="dark:hover:text-[#CD0617]"
                >
                  Sparkling Wine
                </a>
              </li>
              <li>
                <a href="/wines/port" className="dark:hover:text-[#CD0617]">
                  Port Wine
                </a>
              </li>
              <li>
                <a href="/wines/rose" className="dark:hover:text-[#CD0617]">
                  Rose Wine
                </a>
              </li>
              <li>
                <a href="/wines/dessert" className="dark:hover:text-[#CD0617]">
                  Dessert Wine
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <ul>
              <li>
                <a
                  href="https://facebook.com"
                  className="dark:hover:text-[#CD0617]"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="dark:hover:text-[#CD0617]"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="dark:hover:text-[#CD0617]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="dark:hover:text-[#CD0617]">
              Email: chevino@gmail.com
            </p>
            <p className="dark:hover:text-[#CD0617]">Phone: +1 123 456 7890</p>
          </div>
        </div>

        <div className="mt-8 border-t p-0 pt-4 text-center text-sm w-full">
          <p>&copy; 2023 Che Vino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;