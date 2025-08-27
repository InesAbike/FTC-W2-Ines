import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';

const CTA = () => {
    return (
        <div className="bg-secondary-dark-700 font-semibold text-white pt-20 pl-6 relative">
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
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">                    {/* Left Content */}
                    <div className='pb-20'>
                        <div className="text-primary-default-500 text-sm font-semibold mb-4 uppercase tracking-wider">
                            DOWNLOAD NOW!
                        </div>

                        <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                            Start Track Your Business
                            <br />
                            Expenses Today
                        </h2>

                        <p className="text-secondary-light-400 font-light leading-relaxed mb-8 max-w-lg">
                            Are you ready to make your business more organized?
                            <br />
                            Download Spend.In now!
                        </p>
                        <Button>Get a Free Demo</Button>
                    </div>

                    <div className="relative flex items-end justify-end bg-secondary-light-100 h-full w-full rounded-tl-xl pt-20 pl-16">
                        <div className=' min-w-[200px] h-[320px] relative'>
                            <Image
                                src="/images/spending-statistics.png"
                                alt="dashboard"
                                width={500}
                                height={100}
                                className='w-full h-full'
                            />
                            <Image
                                src="/images/spend-by-category.png"
                                alt="dashboard"
                                width={500}
                                height={300}
                                className='max-w-[300px] h-[300px] absolute bottom-0 sm:-left-25 -left-20 z-20'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;