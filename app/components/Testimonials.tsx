"use client"
import React, { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '../datas';

const TestimonialsCarousel: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        skipSnaps: false,
        slidesToScroll: 1,
        breakpoints: {
            '(max-width: 768px)': { slidesToScroll: 1 },
            '(min-width: 769px)': { slidesToScroll: 1 }
        }
    });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="bg-secondary-dark-700 py-20 md:px-16 px-6 relative">
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
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-primary-default-500 text-sm font-semibold mb-4 uppercase tracking-wider">
                        WHAT THEY SAY
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our User Kind Words
                    </h2>
                    <p className="text-secondary-light-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        Here are some testimonials from our user after using Spend.In
                        <br className="hidden sm:block" />
                        to manage their business expenses.
                    </p>
                </div>

                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 md:px-4"
                            >
                                <div className="bg-secondary-default-500/80 rounded-xl p-6 md:p-8 h-full">
                                    <div className='h-52 overflow-hidden text-ellipsis mb-4'>
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                                            {testimonial.title}
                                        </h3>
                                        <p className="text-secondary-light-100 leading-relaxed mb-6 text-sm md:text-base">
                                            {testimonial.content}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                                        <div className="relative">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold text-xs md:text-sm">
                                                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                                                </span>
                                            </div>
                                            {/* Fallback for when image doesn't exist */}
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-full absolute inset-0 object-cover"
                                                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold text-sm md:text-base">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-secondary-light-200 text-xs md:text-sm">
                                                {testimonial.position}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center space-x-4 md:space-x-8 mt-12">
                    {/* Left Button */}
                    <button
                        onClick={scrollPrev}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${!prevBtnDisabled
                            ? 'bg-primary-default-500 hover:bg-primary-default-600 text-white'
                            : 'bg-gray-600 cursor-not-allowed opacity-50 text-gray-400'
                            }`}
                        disabled={prevBtnDisabled}
                    >
                        <ArrowLeft size={20} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={scrollNext}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${!nextBtnDisabled
                            ? 'bg-primary-default-500 hover:bg-primary-default-600 text-white'
                            : 'bg-gray-600 cursor-not-allowed opacity-50 text-gray-400'
                            }`}
                        disabled={nextBtnDisabled}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;