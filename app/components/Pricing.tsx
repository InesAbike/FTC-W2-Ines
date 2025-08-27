'use client'
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import { pricingPlans } from '../datas';
import Button from './Button';
import { RiHeartsFill } from 'react-icons/ri';
import { BiSolidCrown } from 'react-icons/bi';
import { IoFlash } from 'react-icons/io5';
const PricingSection = () => {
    const [billingType, setBillingType] = useState('yearly');

    return (
        <div className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl lg:text-5xl font-bold text-secondary-dark-700 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-secondary-light-400 text-lg">
                        Choose a plan that suits your business needs
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center flex-col gap-8 mb-16 max-w-2xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <span className={`text-lg font-medium ${billingType === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <div className="relative">
                            <button
                                onClick={() => setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly')}
                                className="w-14 h-7 text-secondary-dark-700 bg-primary-default-500 rounded-full flex items-center transition-all duration-300"
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${billingType === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                                    }`}></div>
                            </button>
                        </div>

                        <div className="flex items-center fspace-x-2">
                            <span className={`text-lg font-medium ${billingType === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                                Yearly
                            </span>
                        </div>
                    </div>
                    <div className="bg-primary-light-100 text-secondary-default-500 relative px-2 py-1 rounded-full text-xs font-medium">
                        <span>Save 65%</span>
                        <Image
                            src="/images/arrow-bottom.png"
                            alt="With Spend.In"
                            width={50}
                            height={50}
                            className='absolute -top-8 -right-20 transform -translate-x-1/2'
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div key={plan.id} className="rounded-xl  p-8 relative bg-[#f2f5f7]">

                            <div className="mb-6">
                                <div className='flex items-center justify-between'>
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="text-2xl text-primary-default-500">
                                            {plan.icon === 'RiHeartsFill' && <RiHeartsFill size={24} />}
                                            {plan.icon === 'BiSolidCrown' && <BiSolidCrown size={24} />}
                                            {plan.icon === 'IoFlash' && <IoFlash size={24} />}
                                        </span>
                                        <h3 className="text-2xl font-bold text-secondary-dark-700">{plan.name}</h3>
                                    </div>

                                    {(plan.name) === 'Pro' && (
                                        <div className="text-center text-white text-sm p-1 px-3 bg-secondary-default-500 rounded-full">
                                            Popular
                                        </div>
                                    )}
                                </div>
                                <p className="text-secondary-light-400">{plan.subtitle}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-4xl font-bold text-secondary-dark-700">
                                        ${billingType === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="text-secondary-light-400">/month</span>
                                </div>
                            </div>

                            <p className="text-secondary-default-500 mb-8 leading-relaxed">
                                {plan.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className={`rounded-full text-white p-1 flex-shrink-0 ${feature.included
                                            ? 'bg-success-default-500'
                                            : 'bg-secondary-light-400'
                                            }`}>
                                            {feature.included ? (
                                                <Check size={14} />
                                            ) : (
                                                <X size={14} />
                                            )}
                                        </div>
                                        <span className={`${feature.included
                                            ? 'text-secondary-dark-700'
                                            : 'text-secondary-light-400'
                                            }`}>
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full">{plan.buttonText}</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;