"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { menuItems, productsItems, companyItems, ctaButtons } from "../constants";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

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

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Ne pas fermer si on clique sur un bouton de dropdown
      if (!target.closest('[data-dropdown]')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <nav className="bg-secondary-default-500 border-b border-white/10 text-white px-6 py-4 relative z-50">
        <div className="mx-auto flex items-center justify-between max-w-7xl">
          <Link href="#" className="flex items-center space-x-2 z-50 relative">
            <Image
              src="/logos/logo-1.svg"
              alt="Logo"
              width={100}
              height={100}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8 text-md font-base">
            {menuItems.map((item, index) => (
              <div key={item.label} className="relative group" onMouseLeave={() => setActiveDropdown(null)}>
                {item.hasDropdown ? (
                  <button
                    data-dropdown
                    onClick={(e: React.MouseEvent) => handleDropdownToggle(e, index)}
                    onMouseEnter={() => setActiveDropdown(index)}
                    className="group relative text-light-gray hover:text-white transition-colors duration-300 flex items-center space-x-1"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                    <div className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="group relative text-light-gray hover:text-white transition-colors duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div
                    className={`
                      absolute top-full left-0 mt-2 w-50 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden
                      transform transition-all duration-300 ease-out origin-top z-50
                      ${activeDropdown === index
                        ? 'opacity-100 scale-100 translate-y-0 visible'
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none invisible'
                      }
                    `}
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className={`
                            block p-2 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200
                            transform hover:scale-[1.02] hover:shadow-sm
                            ${activeDropdown === index
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-2 opacity-0'
                            }
                          `}
                          style={{
                            transitionDelay: activeDropdown === index ? `${dropdownIndex * 50}ms` : '0ms'
                          }}
                        >
                          <div className="font-medium text-gray-900 mb-1">
                            {dropdownItem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
                    ? 'bg-transparent hover:bg-primary-default-500 text-secondary-light-200 hover:text-white shadow-lg'
                    : ' text-white hover:bg-primary-dark-700 bg-primary-default-500'
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
            <div className="relative w-6 h-5">
              <span
                className={`
                  absolute left-0 top-1 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}
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
          fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out overflow-auto
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
            absolute top-0 right-0 w-full h-full bg-secondary-default-500
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
              <div key={item.label}>
                <Link
                  href={item.href || '#'}
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
                {/* Mobile dropdown items */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-white/70 hover:text-white/90 transition-colors duration-200 py-1"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8 items-center px-8 py-24">
            {ctaButtons.map((button, index) => (
              <Link
                key={button.label}
                href={button.href}
                className={`
                  px-6 py-2.5 rounded-full text-sm w-full text-center font-medium transition-all duration-300 transform hover:scale-105
                  ${button.primary
                    ? 'bg-transparent hover:bg-primary-default-500 text-secondary-light-200 hover:text-white shadow-lg'
                    : ' text-white hover:bg-transparent bg-primary-default-500'
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
        </div>
      </div>
    </>
  );
}

export default Navbar;