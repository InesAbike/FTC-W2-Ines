import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "../constants";


const SpendInFooter = () => {
  return (
    <footer className="bg-white py-12 lg:py-16 md:px-16 px-6 font-light">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 col-span-2">
            <Link
              href="#"
              className="flex items-center space-x-2 z-50 mb-6 relative"
            >
              <Image
                src="/logos/logo-2.svg"
                alt="Logo"
                width={150}
                height={150}
                className="transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Data visualization, and expense management for your business.
            </p>
          </div>

          {/* Dynamic Footer Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-secondary-default-500 font-semibold mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-secondary-light-400 hover:text-secondary-default-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-secondary-default-500/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex md:flex-row flex-col md:gap-4 gap-8 md:items-center items-start space-x-1 font-bold">
              <a
                href="#"
                className="text-secondary-default-500 hover:text-secondary-dark-900 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400 mx-3 hidden md:block">|</span>
              <a
                href="#"
                className="text-secondary-default-500 hover:text-secondary-dark-900 transition-colors"
              >
                Terms & Conditions
              </a>
              <span className="text-gray-400 mx-3 hidden md:block">|</span>
              <a
                href="#"
                className="text-secondary-default-500 hover:text-secondary-dark-900 transition-colors"
              >
                Cookie Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="text-secondary-light-400">
              © Picko Lab {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SpendInFooter;
