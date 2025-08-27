import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';

const CTA = () => {
    return (
        <div className="bg-deep-midnight-blue font-semibold text-white pt-20 pl-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">                    {/* Left Content */}
                    <div className='pb-20'>
                        <div className="text-purple text-sm font-semibold mb-4 uppercase tracking-wider">
                            DOWNLOAD NOW!
                        </div>

                        <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                            Start Track Your Business
                            <br />
                            Expenses Today
                        </h2>

                        <p className="text-blue-sky font-light leading-relaxed mb-8 max-w-lg">
                            Are you ready to make your business more organized?
                            <br />
                            Download Spend.In now!
                        </p>
                        <Button>Get a Free Demo</Button>
                    </div>

                    <div className="relative flex items-end justify-end bg-[#f2f5f7] h-full w-full rounded-tl-xl pt-20 pl-16">
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