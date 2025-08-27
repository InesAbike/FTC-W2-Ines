'use client'
import React from 'react';
import Image from 'next/image';
import Button from './Button';

const SpendIn = () => {
    return (
        <div className="bg-deep-midnight-blue text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <Image
                    src="/images/hero-decoration-left.png"
                    alt="decoration"
                    width={200}
                    height={200}
                    className='left-0 sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] bottom-0 absolute'
                />
                <Image
                    src="/images/hero-decoration-right.png"
                    alt="decoration"
                    width={200}
                    height={200}
                    className='right-0 top-0 sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] absolute'
                />
                <Image
                    src="/images/decoration-left.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='left-0 top-0 absolute'
                />
                <Image
                    src="/images/decoration-right.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='right-0 bottom-0 absolute'
                />

                <div className="relative px-6 pt-20 pb-12 text-center">
                    <h1 className="text-4xl md:text-5xl max-w-xl mx-auto font-bold mb-6 md:text-center text-left leading-tight">
                        All your business expenses in one place.
                    </h1>

                    <div className="max-w-2xl mx-auto mb-10">
                        <p className="text-slate-400 text-lg mb-2">Your one-stop finance empower platform.</p>
                        <p className="text-slate-400 text-lg">Manage all your business expenses with our supafast app.</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 grid-cols-1 items-center justify-center max-w-xl mx-auto">
                        <Button>Get a Free Demo</Button>
                        <Button variant="secondary">See Pricing</Button>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center sm:pt-16 pt-12 px-6'>
                        <Image
                            src="/images/dashboard.png"
                            alt="Logo"
                            width={1000}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpendIn;