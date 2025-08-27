
import React from 'react';
import Image from 'next/image';
import { StepsData } from '../datas';
import Button from './Button';

const HowItWork1 = () => {

    return (
        <div className="bg-secondary-dark-700 md:py-20 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header centré */}
                <div className="md:text-center text-left mb-16">
                    <div className="text-primary-default-500 text-sm font-light mb-4 uppercase tracking-wider">
                        HOW IT WORKS
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Few Easy Steps and Done
                    </h2>
                    <p className="text-secondary-light-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        In just few easy step, you are all set to manage your business finances.
                        Manage all expenses with Spend.In all in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between mx-auto items-center max-w-6xl">
                    {
                        StepsData.map(
                            (feature, index) => <div key={index} className="relative flex flex-col items-center justify-center space-x-4 mb-8">

                                <div className='flex flex-col items-center justify-center gap-4'>
                                    <div className='relative'>
                                        <Image src={feature.image || ""}
                                        alt={feature.title}
                                        width={300}
                                        height={600} />
                                        <div className="text-white text-2xl absolute -left-5 -top-5 flex items-center justify-center rounded-full h-20 w-20 bg-secondary-default-500">
                                            <div className="bg-primary-default-500 rounded-full h-18 w-18 flex items-center justify-center">
                                                {feature.id}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-white mb-2 max-w-42 text-center">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center gap-6 max-w-xl mx-auto">
                    <Button>Get a Free Demo</Button>
                    <Button variant="secondary">See Pricing</Button>
                </div>
            </div>
        </div>
    );
};

export default HowItWork1;