import Image from 'next/image';
import React from 'react';
import { FeaturesData1 } from '../datas';



const WhyUseSpendIn1 = () => {
    return (
        <div className="bg-gray-50 py-20 px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="text-medium-purple text-sm font-semibold mb-4 uppercase tracking-wider">
                            WHY USE SPEND.IN
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Easy, Simple,
                            <br />
                            Affordable
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                        </p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        FeaturesData1.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                {feature.image && (
                                    <div className={`mb-6 bg-gray-100 rounded-2xl pt-4 pr-4 ${feature.imageContainerClass}`}>
                                        <Image src={feature.image} alt={feature.title} width={500} height={500} />
                                    </div>
                                )}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyUseSpendIn1;