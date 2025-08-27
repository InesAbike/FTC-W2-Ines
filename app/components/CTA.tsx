import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const CTA = () => {
    return (
        <div className="bg-deep-midnight-blue font-semibold text-white pt-20 pl-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">                    {/* Left Content */}
                    <div>
                        <div className="text-purple text-sm font-semibold mb-4 uppercase tracking-wider">
                            DOWNLOAD NOW!
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Start Track Your Business
                            <br />
                            Expenses Today
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                            Are you ready to make your business more organized?
                            <br />
                            Download Spend.In now!
                        </p>

                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Get a Free Demo
                        </button>
                    </div>

                    <div className="relative flex items-end justify-end bg-[#f2f5f7] h-full w-full rounded-tl-xl pt-20">
                        <Image
                            src="/images/spend-by-category.png"
                            alt="dashboard"
                            width={500}
                            height={300}
                            className='max-w-[300px] h-[300px] absolute bottom-0 left-8 z-20'
                        />
                        <div className='max-w-[400px] h-[320px]'>
                            <Image
                                src="/images/spending-statistics.png"
                                alt="dashboard"
                                width={400}
                                height={100}
                                className='w-full h-full'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;