'use client'
import React, { useState, ReactNode } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { HiOutlineArrowDownRight, HiOutlineArrowUpRight } from 'react-icons/hi2';

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

const Productivity = () => {
  const [activeTab, setActiveTab] = useState<keyof TabDataMap>('with');

  // Configuration des données pour chaque onglet
  const tabData: TabDataMap = {
    with: {
      title: "Track Business Expenses until Its Millisecond",
      advantages: [
        {
          icon: <Check size={14} className="text-green-600" />,
          iconBg: "bg-green-100",
          text: "Analyze your business cost easily with group transaction through tagging feature."
        },
        {
          icon: <Check size={14} className="text-green-600" />,
          iconBg: "bg-green-100",
          text: "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment."
        },
        {
          icon: <Check size={14} className="text-green-600" />,
          iconBg: "bg-green-100",
          text: "Arrange your business expenses by date, name, etc., with just one click."
        },
        {
          icon: <Check size={14} className="text-green-600" />,
          iconBg: "bg-green-100",
          text: "Real-time notifications and automated expense categorization."
        }
      ],
      image: "/images/with.png",
      amount: "$85,211.00",
      percentage: "65,1 %",
      icon:<HiOutlineArrowUpRight />
    },
    without: {
      title: "Manual Work Challenges Without Automation",
      advantages: [
        {
          icon: <X size={14} className="text-red-600" />,
          iconBg: "bg-red-100",
          text: "Time-consuming manual data entry and expense categorization."
        },
        {
          icon: <X size={14} className="text-red-600" />,
          iconBg: "bg-red-100",
          text: "Higher risk of human errors and missed transactions."
        },
        {
          icon: <X size={14} className="text-red-600" />,
          iconBg: "bg-red-100",
          text: "Difficulty in tracking multiple payment methods and reconciliation."
        },
        {
          icon: <X size={14} className="text-red-600" />,
          iconBg: "bg-red-100",
          text: "Delayed reporting and lack of real-time financial insights."
        }
      ],
      image: "/images/without-spendin.png",
      amount: "$25,780.00",
      percentage: "45,6 %",
      icon:<HiOutlineArrowDownRight />
    }
  };

  const currentData = tabData[activeTab];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-medium-purple text-sm font-semibold mb-4 uppercase tracking-wider">
          INCREASE PRODUCTIVITY
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          Reduce Time in Doing Manual Work
          <br />
          Managing Expenses
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className="">
            {/* Toggle Buttons */}
            <div className="flex items-center sm:justify-start justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex">
                <button
                  onClick={() => setActiveTab('with')}
                  className={`sm:px-6 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'with'
                    ? 'bg-purple text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  With Spend.In
                </button>
                <button
                  onClick={() => setActiveTab('without')}
                  className={`sm:px-6 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'without'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Without Spend.In
                </button>
              </div>
            </div>

            {/* Dynamic Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6 transition-all duration-500">
              {currentData.title}
            </h3>

            {/* Dynamic Advantages List */}
            <div className="space-y-4">
              {currentData.advantages.map((advantage: Advantage, index: number) => (
                <div
                  key={`${activeTab}-${index}`}
                  className="flex items-start space-x-3 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className={`${advantage.iconBg} rounded-full p-1 mt-0.5 flex-shrink-0 transition-all duration-300`}>
                    {advantage.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Image */}
          <div className="bg-light-gray rounded-2xl sm:p-8 p-4 max-h-[500px]">
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
                <div className={`flex gap-1 items-center font-bold ${activeTab === 'with' ? 'text-[#659611]' : 'text-[#db2518]'}`}>{currentData.icon}
                  {currentData.percentage}</div>
              </div>
              <Image
                src={currentData.image}
                alt={activeTab === 'with' ? 'With Spend.In' : 'Without Spend.In'}
                width={300}
                height={200}
                className="transition-all duration-500 transform hover:scale-105 w-full h-[300px]"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><rect width="500" height="500" fill="${activeTab === 'with' ? '%23e0e7ff' : '%23fee2e2'}"/><text x="250" y="250" text-anchor="middle" dominant-baseline="middle" fill="${activeTab === 'with' ? '%236366f1' : '%23dc2626'}" font-size="20" font-family="Arial">${activeTab === 'with' ? 'Dashboard avec Spend.In' : 'Travail manuel sans Spend.In'}</text></svg>`;
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Productivity;