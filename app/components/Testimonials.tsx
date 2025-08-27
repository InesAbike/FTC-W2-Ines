"use client"
import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const carouselRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            title: "It's just incredible!",
            content: "It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!",
            author: "Jimmy Bartney",
            position: "Product Manager at Picko Lab",
            avatar: "/images/jimmy.png"
        },
        {
            id: 2,
            title: "Satisfied User Here!",
            content: "Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
            author: "Natasha Romanoff",
            position: "Black Widow",
            avatar: "/images/natasha.png"
        },
        {
            id: 3,
            title: "No doubt, Spend.In is the best!",
            content: "\"The best\"! That's what I want to say to this platform, didn't know that there is a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
            author: "Monika Kazuki",
            position: "Finance Manager at Mangan",
            avatar: "/images/moritika.png"
        },
        {
            id: 4,
            title: "Game changer for my business!",
            content: "Spend.In has revolutionized how I handle my company's finances. The automation features save me hours every week, and the insights help me make better business decisions.",
            author: "David Chen",
            position: "CEO at TechStart",
            avatar: "/images/jimmy.png"
        },
        {
            id: 5,
            title: "Simple yet powerful!",
            content: "What I love about Spend.In is how intuitive it is. Within minutes of signing up, I was already managing my expenses efficiently. The customer support is also top-notch!",
            author: "Sarah Johnson",
            position: "Freelance Consultant",
            avatar: "/images/natasha.png"
        },
    ];

    // Handle responsive slides
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1); // Mobile: 1 slide
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2); // Tablet: 2 slides
            } else {
                setSlidesToShow(3); // Desktop: 3 slides
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset slide when slidesToShow changes
    useEffect(() => {
        setCurrentSlide(0);
    }, [slidesToShow]);

    const maxSlides = testimonials.length - slidesToShow;

    const nextSlide = () => {
        if (currentSlide < maxSlides) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const getSlideWidth = () => {
        return 100 / slidesToShow;
    };

    return (
        <div className="bg-slate-900 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-purple-400 text-sm font-semibold mb-4 uppercase tracking-wider">
                        WHAT THEY SAY
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our User Kind Words
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Here are some testimonials from our user after using Spend.In
                        <br className="hidden sm:block" />
                        to manage their business expenses.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="flex transition-transform duration-500 ease-out"
                        style={{ 
                            transform: `translateX(-${currentSlide * getSlideWidth()}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id} 
                                className="flex-shrink-0 px-2 md:px-4"
                                style={{ width: `${getSlideWidth()}%` }}
                            >
                                <div className="bg-slate-50/10 rounded-2xl p-6 md:p-8 h-full border border-slate-700">
                                    {/* Testimonial Content */}
                                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                                        {testimonial.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                                        {testimonial.content}
                                    </p>

                                    {/* Author */}
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
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold text-sm md:text-base">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-gray-400 text-xs md:text-sm">
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
                        onClick={prevSlide}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                            currentSlide > 0
                                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                : 'bg-gray-600 cursor-not-allowed opacity-50 text-gray-400'
                        }`}
                        disabled={currentSlide === 0}
                    >
                        <ArrowLeft size={20} />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                            currentSlide < maxSlides
                                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                : 'bg-gray-600 cursor-not-allowed opacity-50 text-gray-400'
                        }`}
                        disabled={currentSlide >= maxSlides}
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;