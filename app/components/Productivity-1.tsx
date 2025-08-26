'use client'
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

const Productivity = () => {
  const [activeTab, setActiveTab] = useState('with');

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-purple-600 text-sm font-semibold mb-4 uppercase tracking-wider">
          INCREASE PRODUCTIVITY
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Reduce Time in Doing Manual Work
          <br />
          Managing Expenses
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className="">
            <div className="flex items-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex">
                <button
                  onClick={() => setActiveTab('with')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'with'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  With Spend.In
                </button>
                <button
                  onClick={() => setActiveTab('without')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'without'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Without Spend.In
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Track Business Expenses until Its Millisecond
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Analyze your business cost easily with group transaction thorugh tagging feature.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                  <Check size={14} className="text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Arrange your business expenses by date, name, etc., with just one click.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/success-stories-1.png"
              alt="Productivity"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;