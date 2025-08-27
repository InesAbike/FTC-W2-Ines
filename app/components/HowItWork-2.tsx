import React from 'react';
import Image from 'next/image';
const HowItWorks2 = () => {

    return (
        <div className="bg-secondary-dark-700 py-10 md:py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                   
                    <div className="order-2 lg:order-1">
                        <Image src="/images/how-it-work-img.png"
                            alt="How it work"
                            width={500}
                            height={500}
                            className='h-full lg:w-[500px] w-full'
                        />
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="text-primary-default-500 text-sm font-light mb-4 uppercase tracking-wider">
                            HOW IT WORKS
                        </div>

                        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Few Easy Steps and Done
                        </h2>

                        <p className="text-secondary-light-300 text-lg leading-relaxed mb-8">
                            In just few easy step, you are all set to manage your business finances. Manage all your expenses with Spend.In all in one place.
                        </p>

                        
                        <div className="bg-secondary-default-500/80 sm:p-8 p-4 rounded-md flex items-center gap-4">
                            <div className="flex items-center flex-col">
                                <div className="bg-primary-default-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    1
                                </div>
                                <div className='w-0.5 h-10 bg-primary-default-500'></div>
                                <div className="bg-primary-default-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    2
                                </div>
                                <div className='flex flex-col items-center justify-center gap-1'>
                                    <span className='w-0.5 h-1 bg-white'></span>
                                    <span className='w-0.5 h-2 bg-white'></span>
                                    <span className='w-0.5 h-2 bg-white'></span>
                                </div>
                                <div className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    3
                                </div>
                            </div>
                            <div className="flex items-start flex-col justify-center sm:gap-10 gap-4">
                                <span className="text-white text-lg">Register your Spend.In account.</span>
                                <span className="text-white text-lg">Fill in the list of your business expenses.</span>
                                <span className="text-white text-lg">Done, let&apos;s continue the work.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks2;