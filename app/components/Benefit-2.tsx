import React from 'react';
import Image from 'next/image';
import { FeaturesData2 } from '../datas';
import { FileText, Receipt, CreditCard } from 'lucide-react';

const WhyUseSpendIn2 = () => {

    return (
        <div className="bg-white md:py-20 py-10 px-6 relative">
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
                {/* Header centré */}
                <div className="md:text-center text-left mb-16">
                    <div className="text-medium-purple text-sm font-semibold mb-4 uppercase tracking-wider">
                        WHY USE SPEND.IN
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Easy, Simple, Affordable
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Features List */}
                    <div>
                        {
                            FeaturesData2.map(
                                (feature, index) => <div key={index} className="flex items-start space-x-4 mb-8">
                                    <div className="bg-medium-purple rounded-xl p-3 flex-shrink-0">
                                        <div className="text-white">
                                            {feature.icon === 'FileText' && <FileText size={24} />}
                                            {feature.icon === 'Receipt' && <Receipt size={24} />}
                                            {feature.icon === 'CreditCard' && <CreditCard size={24} />}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src='/images/history-table.png'
                            alt="history table"
                            width={500}
                            height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUseSpendIn2;