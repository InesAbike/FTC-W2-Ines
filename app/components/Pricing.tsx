'use client'
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingSection = () => {
  const [billingType, setBillingType] = useState('yearly');

  // Tableau de données pour les plans
  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      icon: '💳',
      iconColor: 'text-purple-500',
      subtitle: 'Perfect plan to get started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'A free plan grants you access to some cool features of Spend.In.',
      features: [
        { name: 'Sync accross device', included: true },
        { name: '5 workspace', included: true },
        { name: 'Collaborate with 5 user', included: true },
        { name: 'Sharing permission', included: false },
        { name: 'Admin tools', included: false },
        { name: '100+ integrations', included: false }
      ],
      buttonText: 'Get Your Free Plan',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      cardStyle: 'bg-gray-50 border-gray-200'
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: '✅',
      iconColor: 'text-purple-500',
      subtitle: 'Perfect plan for professionals!',
      monthlyPrice: 12,
      yearlyPrice: 12,
      description: 'For professional only! Start arranging your expenses with our best templates.',
      isPopular: true,
      features: [
        { name: 'Everything in Free Plan', included: true },
        { name: 'Unlimited workspace', included: true },
        { name: 'Collaborative workspace', included: true },
        { name: 'Sharing permission', included: true },
        { name: 'Admin tools', included: true },
        { name: '100+ integrations', included: true }
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      cardStyle: 'bg-white border-purple-200'
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      icon: '⚡',
      iconColor: 'text-purple-500',
      subtitle: 'Best suits for great company!',
      monthlyPrice: 33,
      yearlyPrice: 33,
      description: 'If you a finance manager at big company, this plan is a perfect match.',
      features: [
        { name: 'Everything in Pro Plan', included: true },
        { name: 'Daily performance reports', included: true },
        { name: 'Dedicated assistant', included: true },
        { name: 'Artificial intelligence', included: true },
        { name: 'Marketing tools & automations', included: true },
        { name: 'Advanced security', included: true }
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      cardStyle: 'bg-white border-gray-200'
    }
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg">
            Choose a plan that suits your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center space-x-4">
            <span className={`text-lg font-medium ${billingType === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            
            <div className="relative">
              <button
                onClick={() => setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-7 bg-purple-600 rounded-full flex items-center transition-all duration-300"
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  billingType === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}></div>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className={`text-lg font-medium ${billingType === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                Save 65%
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`rounded-2xl border-2 p-8 relative ${plan.cardStyle}`}>
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`text-2xl ${plan.iconColor}`}>{plan.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                <p className="text-gray-600">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingType === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`rounded-full p-1 flex-shrink-0 ${
                      feature.included 
                        ? 'bg-green-100' 
                        : 'bg-gray-100'
                    }`}>
                      {feature.included ? (
                        <Check size={14} className="text-green-600" />
                      ) : (
                        <X size={14} className="text-gray-400" />
                      )}
                    </div>
                    <span className={`${
                      feature.included 
                        ? 'text-gray-900' 
                        : 'text-gray-500'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;