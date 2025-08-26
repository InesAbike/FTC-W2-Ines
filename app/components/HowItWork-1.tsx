
import React from 'react';
import Image from 'next/image';
import { StepsData } from '../datas';

const HowItWork1 = () => {

    return (
        <div className="bg-deep-midnight-blue py-20">
            <div className="max-w-7xl mx-auto">
                {/* Header centré */}
                <div className="text-center mb-16">
                    <div className="text-medium-purple text-sm font-light mb-4 uppercase tracking-wider">
                        HOW IT WORKS
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Few Easy Steps and Done
                    </h2>
                    <p className="text-blue-sky text-lg leading-relaxed max-w-2xl mx-auto">
                        In just few easy step, you are all set to manage your business finances.
                        Manage all expenses with Spend.In all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 justify-between mx-auto items-center max-w-6xl">
                    {
                        StepsData.map(
                            (feature, index) => <div key={index} className="relative flex flex-col items-center justify-center space-x-4 mb-8">

                                <div className='flex flex-col items-center justify-center'>
                                    <div className='relative'>
                                        <Image src={feature.image || ""}
                                        alt={feature.title}
                                        width={200}
                                        height={500} />
                                        <div className="text-white text-2xl absolute -left-5 -top-5 flex items-center justify-center rounded-full h-14 w-14 bg-deep-midnight-blue">
                                            <div className="bg-medium-purple rounded-full h-12 w-12 flex items-center justify-center">
                                                {feature.id}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-light text-white mb-2 max-w-42 text-center">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex items-center justify-center space-x-10">
                    <button className="bg-medium-purple hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                        Get a Free Demo
                    </button>
                    <button className="bg-white/10 rounded-full text-light-steel-blue px-6 py-3 hover:text-white font-medium">
                        See Pricing
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWork1;