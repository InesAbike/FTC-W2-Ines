import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SpendInFooter = () => {
  return (
    <footer className="bg-white py-12 lg:py-16 px-6 font-light">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 md:col-span-2">
          <Link href="#" className="flex items-center space-x-2 z-50 mb-6 relative">
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

          {/* Product Column */}
          <div className="lg:col-span-1">
            <h3 className="text-slate-900 font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Digital Invoice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Reimbursements
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Virtual Assistant
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Artificial Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-slate-900 font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Newsletters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-1">
            <h3 className="text-slate-900 font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Ebook & Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="lg:col-span-1">
            <h3 className="text-slate-900 font-semibold mb-6">Follow Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-purple">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-1">
              <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-400 mx-3">|</span>
              <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-400 mx-3">|</span>
              <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors">
                Cookie Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-600">
              © Picko Lab {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SpendInFooter;