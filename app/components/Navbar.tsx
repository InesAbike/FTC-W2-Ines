// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Products", href: "#features" },
    { label: "Benefit", href: "#pricing" },
    { label: "How it works", href: "#about" },
    { label: "Pricing", href: "#about" },
    { label: "Company", href: "#about" },
  ];

  const ctaButtons = [
    {
      label: "Login",
      href: "#",
      primary: true
    },
    {
      label: "Get Demo",
      href: "#",
      primary: false
    }
  ];

  return (
    <>
      <nav className="bg-deep-midnight-blue border-b border-white/10 text-white px-6 py-4 relative z-50">
        <div className="mx-auto flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 z-50 relative">
            <Image
              src="/logos/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8 text-md font-base">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-light-gray hover:text-white transition-colors duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {ctaButtons.map((button, index) => (
              <Link
                key={button.label}
                href={button.href}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
                  ${button.primary
                    ? 'bg-transparent hover:bg-medium-purple text-light-steel-blue hover:text-white shadow-lg'
                    : ' text-white hover:bg-transparent bg-medium-purple'
                  }
                `}
                style={{
                  animationDelay: `${(index + 3) * 100}ms`
                }}
              >
                {button.label}
              </Link>
            ))}
          </div>

          <button
            className="rounded-lg lg:hidden relative z-50 w-11 h-11 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`
                  absolute left-0 top-1 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}
                `}
              />
              <span
                className={`
                  absolute left-0 top-3 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
                `}
              />
              <span
                className={`
                  absolute left-0 top-5 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}
                `}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay avec animation fluide */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out
          ${isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          }
        `}
      >
        <div
          className={`
            absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`
            absolute top-0 right-0 w-full h-full bg-deep-midnight-blue
            transform transition-all duration-500 ease-out shadow-2xl flex flex-col justify-between
            ${isOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-full opacity-0'
            }
          `}
        >
          {/* Menu items */}
          <div className="pt-24 px-8 space-y-6">
            {menuItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block text-xl font-light text-white/90 hover:text-white transition-all duration-300
                  transform hover:translate-x-2 hover:scale-105
                  ${isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                  }
                `}
                style={{
                  transitionDelay: isOpen ? `${(index + 1) * 100}ms` : '0ms'
                }}
              >
                <span className="relative">
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </span>
              </Link>
            ))}
          </div>
          <div className="px-8 pb-8 w-full">
            <Link
              href="#"
              className="border w-full border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm hover:border-indigo-black px-6 py-2.5 text-center rounded-full text-sm font-medium transition-colors duration-300 relative overflow-hidden group inline-block"
            >
              <span className="relative z-10">Talk to an expert</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;