'use client'
import React, { useState, ReactNode, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { HiOutlineArrowDownRight, HiOutlineArrowUpRight } from 'react-icons/hi2';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface Advantage {
  icon: ReactNode;
  iconBg: string;
  text: string;
}

interface TabData {
  title: string;
  advantages: Advantage[];
  image: string;
  amount: string;
  percentage: string;
  icon: ReactNode;
}

interface TabDataMap {
  with: TabData;
  without: TabData;
}

const Productivity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof TabDataMap>('with');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentTitleRef = useRef<HTMLHeadingElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

  // Configuration des données pour chaque onglet
  const tabData: TabDataMap = {
    with: {
      title: "Track Business Expenses until Its Millisecond",
      advantages: [
        {
          icon: <Check size={14} />,
          iconBg: "bg-success-default-500",
          text: "Analyze your business cost easily with group transaction through tagging feature."
        },
        {
          icon: <Check size={14} />,
          iconBg: "bg-success-default-500",
          text: "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment."
        },
        {
          icon: <Check size={14} />,
          iconBg: "bg-success-default-500",
          text: "Arrange your business expenses by date, name, etc., with just one click."
        },
        {
          icon: <Check size={14} />,
          iconBg: "bg-success-default-500",
          text: "Real-time notifications and automated expense categorization."
        }
      ],
      image: "/images/with.png",
      amount: "$85,211.00",
      percentage: "65,1 %",
      icon: <HiOutlineArrowUpRight />
    },
    without: {
      title: "Taking too long to tidy up administrative files makes it unproductive",
      advantages: [
        {
          icon: <X size={14} />,
          iconBg: "bg-error-default-500",
          text: "Complex recording process due to every administrative file in a different place."
        },
        {
          icon: <X size={14} />,
          iconBg: "bg-error-default-500",
          text: "Need more effort to pay manually one by one invoice because there is no payment accommodation."
        },
        {
          icon: <X size={14} />,
          iconBg: "bg-error-default-500",
          text: "Manual data arranging needs a long time because the different months/years are not in the same place."
        }
      ],
      image: "/images/without-spendin.png",
      amount: "$25,780.00",
      percentage: "45,6 %",
      icon: <HiOutlineArrowDownRight />
    }
  };

  const currentData = tabData[activeTab];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(badgeRef.current, {
        y: 30,
        opacity: 0
      });

      gsap.set(titleRef.current, {
        y: 50,
        opacity: 0
      });

      gsap.set(tabsRef.current, {
        y: 30,
        opacity: 0
      });

      gsap.set(contentTitleRef.current, {
        y: 40,
        opacity: 0
      });

      gsap.set(imageCardRef.current, {
        x: 80,
        opacity: 0,
        scale: 0.95
      });

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate header elements
      tl.to(badgeRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, 0)
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, 0.2)
      .to(tabsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 0.4)
      .to(contentTitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 0.6)
      .to(imageCardRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, 0.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animation when tab changes
  useEffect(() => {
    if (advantagesRef.current && contentTitleRef.current && imageCardRef.current) {
      const advantages = advantagesRef.current.children;
      
      // Animate out current content
      const outTl = gsap.timeline();
      
      outTl.to(Array.from(advantages), {
        x: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in"
      })
      .to(contentTitleRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      }, 0)
      .to(imageCardRef.current, {
        scale: 0.95,
        opacity: 0.7,
        duration: 0.3,
        ease: "power2.in"
      }, 0);

      // Animate in new content
      outTl.call(() => {
        // Reset positions for new content
        gsap.set(Array.from(advantages), {
          x: 30,
          opacity: 0
        });
        
        gsap.set(contentTitleRef.current, {
          y: 20,
          opacity: 0
        });
      })
      .to(contentTitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(Array.from(advantages), {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3")
      .to(imageCardRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");
    }
  }, [activeTab]);

  const handleTabChange = (tab: keyof TabDataMap) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tab buttons hover animations
      const tabButtons = tabsRef.current?.querySelectorAll('button');
      tabButtons?.forEach((button: Element) => {
        const buttonElement = button as HTMLButtonElement;
        
        buttonElement.addEventListener('mouseenter', () => {
          if (!buttonElement.classList.contains('bg-primary-default-500')) {
            gsap.to(buttonElement, {
              scale: 1.05,
              y: -2,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });

        buttonElement.addEventListener('mouseleave', () => {
          if (!buttonElement.classList.contains('bg-primary-default-500')) {
            gsap.to(buttonElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });

      // Advantage items hover
      const advantages = advantagesRef.current?.children;
      if (advantages) {
        Array.from(advantages).forEach((advantage: Element) => {
          const advantageElement = advantage as HTMLDivElement;
          const icon = advantageElement.querySelector('[class*="bg-"]');
          
          advantageElement.addEventListener('mouseenter', () => {
            gsap.to(advantageElement, {
              x: 8,
              duration: 0.3,
              ease: "power2.out"
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1.2,
                duration: 0.3,
                ease: "back.out(1.7)"
              });
            }
          });

          advantageElement.addEventListener('mouseleave', () => {
            gsap.to(advantageElement, {
              x: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
              });
            }
          });
        });
      }

      // Subtle floating animation for the amount display
      const amountElement = imageCardRef.current?.querySelector('.text-3xl');
      if (amountElement) {
        gsap.to(amountElement, {
          y: -2,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      }

      // Percentage icon subtle rotation
      const percentageIcon = imageCardRef.current?.querySelector('[class*="Arrow"]');
      if (percentageIcon) {
        gsap.to(percentageIcon, {
          rotation: activeTab === 'with' ? 5 : -5,
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <div ref={containerRef} className="py-20 md:px-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={badgeRef}
          className="text-primary-default-500 text-sm font-semibold mb-4 uppercase tracking-wider"
        >
          INCREASE PRODUCTIVITY
        </div>

        <h2 
          ref={titleRef}
          className="text-secondary-dark-700 text-4xl lg:text-5xl font-bold mb-8 leading-tight"
        >
          Reduce Time in Doing Manual Work
          <br />
          Managing Expenses
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className="">
            {/* Toggle Buttons */}
            <div ref={tabsRef} className="flex items-center sm:justify-start justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex">
                <button
                  onClick={() => handleTabChange('with')}
                  className={`sm:px-6 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'with'
                    ? 'bg-primary-default-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  With Spend.In
                </button>
                <button
                  onClick={() => handleTabChange('without')}
                  className={`sm:px-6 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'without'
                    ? 'bg-primary-default-500 text-white shadow-sm'
                    : 'text-secondary-light-300 hover:text-gray-900'
                    }`}
                >
                  Without Spend.In
                </button>
              </div>
            </div>

            {/* Dynamic Title */}
            <h3 
              ref={contentTitleRef}
              className="text-2xl font-bold text-secondary-dark-700 mb-6"
            >
              {currentData.title}
            </h3>

            {/* Dynamic Advantages List */}
            <div ref={advantagesRef} className="space-y-4">
              {currentData.advantages.map((advantage: Advantage, index: number) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="flex items-start space-x-3 cursor-pointer"
                >
                  <div className={`${advantage.iconBg} text-white rounded-full p-1 mt-0.5 flex-shrink-0 transition-all duration-300`}>
                    {advantage.icon}
                  </div>
                  <p className="text-secondary-dark-700 leading-relaxed">
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Image */}
          <div ref={imageCardRef} className="bg-light-gray rounded-2xl sm:p-8 p-4 max-h-[500px]">
            <div className="relative overflow-hidden flex flex-col gap-2">
              <div className='flex items-center justify-between'>
                <div className='text-blue-sky font-semibold text-lg'> Balance Statistics</div>
                <div className='flex gap-0.5 items-center justify-center'>
                  <span className='w-2 h-2 rounded-full border-2 border-gray-400'></span>
                  <span className='w-2 h-2 rounded-full border-2 border-gray-400'></span>
                  <span className='w-2 h-2 rounded-full border-2 border-gray-400'></span>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='text-[#1a202c] font-bold text-3xl'>{currentData.amount}</div>
                <div className={`flex gap-1 items-center font-bold ${activeTab === 'with' ? 'text-success-dark-700' : 'text-error-default-500'}`}>
                  {currentData.icon}
                  {currentData.percentage}
                </div>
              </div>
              <Image
                src={currentData.image}
                alt={activeTab === 'with' ? 'With Spend.In' : 'Without Spend.In'}
                width={300}
                height={200}
                className="w-full h-[300px]"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><rect width="500" height="500" fill="${activeTab === 'with' ? '%23e0e7ff' : '%23fee2e2'}"/><text x="250" y="250" text-anchor="middle" dominant-baseline="middle" fill="${activeTab === 'with' ? '%236366f1' : '%23dc2626'}" font-size="20" font-family="Arial">${activeTab === 'with' ? 'Dashboard avec Spend.In' : 'Travail manuel sans Spend.In'}</text></svg>`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;