'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Search, Bell, MoreHorizontal, TrendingUp, CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const SpendInReplica = () => {
    return (
        <div className="min-h-screen bg-deep-midnight-blue text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <Image
                    src="/images/hero-decoration-left.png"
                    alt="Logo"
                    width={250}
                    height={250}
                    className='left-0 bottom-0 absolute'
                />
                <Image
                    src="/images/hero-decoration-right.png"
                    alt="Logo"
                    width={250}
                    height={250}
                    className='right-0 top-0 absolute'
                />
                  <Image
                    src="/images/decoration-right.png"
                    alt="Logo"
                    width={250}
                    height={250}
                    className='left-0 top-0 absolute'
                />
                  <Image
                    src="/images/decoration-right.png"
                    alt="Logo"
                    width={250}
                    height={250}
                    className='right-0 bottom-0 absolute'
                />

                <div className="relative px-6 pt-20 pb-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        All your business
                        <br />
                        expenses in one place.
                    </h1>

                    <div className="max-w-2xl mx-auto mb-10">
                        <p className="text-slate-400 text-lg mb-2">Your one-stop finance empower platform.</p>
                        <p className="text-slate-400 text-lg">Manage all your business expenses with our supafast app.</p>
                    </div>

                    <div className="flex items-center justify-center space-x-6">
                        <button className="bg-medium-purple hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                            Get a Free Demo
                        </button>
                        <button className="bg-white/10 rounded-full text-light-steel-blue px-6 py-3 hover:text-white font-medium">
                            See Pricing
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <Image
                            src="/images/dashboard.png"
                            alt="Logo"
                            width={1000}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpendInReplica;