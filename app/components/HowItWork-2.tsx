'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const HowItWorks2: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const stepsCardRef = useRef<HTMLDivElement>(null);
    const stepsIndicatorRef = useRef<HTMLDivElement>(null);
    const stepsTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set(imageRef.current, {
                x: -100,
                opacity: 0,
                scale: 0.9
            });

            gsap.set(badgeRef.current, {
                y: 30,
                opacity: 0
            });

            gsap.set(titleRef.current, {
                y: 50,
                opacity: 0
            });

            gsap.set(descriptionRef.current, {
                y: 30,
                opacity: 0
            });

            gsap.set(stepsCardRef.current, {
                y: 60,
                opacity: 0,
                scale: 0.95
            });

            // Set initial states for step indicators
            const stepIndicators = stepsIndicatorRef.current?.children;
            if (stepIndicators) {
                gsap.set(Array.from(stepIndicators), {
                    scale: 0,
                    opacity: 0
                });
            }

            // Set initial states for step texts
            const stepTexts = stepsTextRef.current?.children;
            if (stepTexts) {
                gsap.set(Array.from(stepTexts), {
                    x: 30,
                    opacity: 0
                });
            }

            // Create scroll-triggered animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none none"
                }
            });

            // Animate image
            tl.to(imageRef.current, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.out"
            }, 0);

            // Animate content elements
            tl.to(badgeRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }, 0.2)
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, 0.4)
            .to(descriptionRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 0.6);

            // Animate steps card
            tl.to(stepsCardRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, 0.8);

            // Animate step indicators with sequence
            if (stepIndicators) {
                tl.to(Array.from(stepIndicators), {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.3,
                    ease: "back.out(1.7)"
                }, 1.2);
            }

            // Animate step texts
            if (stepTexts) {
                tl.to(Array.from(stepTexts), {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.3,
                    ease: "power2.out"
                }, 1.4);
            }

            // Smooth step activation animation
            const createStepActivation = () => {
                const steps = stepsIndicatorRef.current?.querySelectorAll('.step-indicator');
                const stepTexts = stepsTextRef.current?.children;
                const connectingLines = stepsIndicatorRef.current?.querySelectorAll('.connecting-line');
                
                if (steps && stepTexts) {
                    const activationTl = gsap.timeline({ 
                        delay: 2.5,
                        repeat: -1,
                        repeatDelay: 4
                    });

                    steps.forEach((step: Element, index: number) => {
                        const stepElement = step as HTMLDivElement;
                        const textElement = stepTexts[index] as HTMLSpanElement;

                        // Smooth glow effect
                        activationTl.to(stepElement, {
                            boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                            scale: 1.1,
                            duration: 1.2,
                            ease: "power1.inOut"
                        })
                        .to(textElement, {
                            opacity: 0.7,
                            y: -3,
                            duration: 0.8,
                            ease: "power1.inOut"
                        }, "<")
                        .to(stepElement, {
                            boxShadow: "0 0 0px rgba(16, 185, 129, 0)",
                            scale: 1,
                            duration: 1,
                            ease: "power1.inOut"
                        })
                        .to(textElement, {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power1.inOut"
                        }, "<")
                        .to({}, { duration: 0.8 }); // smooth pause
                    });

                    // Animate connecting lines with wave effect
                    if (connectingLines) {
                        activationTl.to(connectingLines, {
                            scaleY: 1.2,
                            opacity: 0.8,
                            duration: 2,
                            stagger: 0.2,
                            ease: "sine.inOut",
                            yoyo: true,
                            repeat: 1
                        }, 0);
                    }
                }
            };

            // Start step activation after initial animations
            setTimeout(createStepActivation, 3000);

            // Subtle image hover effect
            const imageElement = imageRef.current?.querySelector('img');
            if (imageElement) {
                imageElement.addEventListener('mouseenter', () => {
                    gsap.to(imageElement, {
                        filter: "brightness(1.1) contrast(1.05)",
                        duration: 0.6,
                        ease: "power1.out"
                    });
                });

                imageElement.addEventListener('mouseleave', () => {
                    gsap.to(imageElement, {
                        filter: "brightness(1) contrast(1)",
                        duration: 0.6,
                        ease: "power1.out"
                    });
                });
            }

            // Steps card hover effect
            if (stepsCardRef.current) {
                stepsCardRef.current.addEventListener('mouseenter', () => {
                    gsap.to(stepsCardRef.current, {
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                stepsCardRef.current.addEventListener('mouseleave', () => {
                    gsap.to(stepsCardRef.current, {
                        scale: 1,
                        y: 0,
                        boxShadow: "0 0px 0px 0px rgba(0, 0, 0, 0)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            }

            // Parallax effect
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -50,
                ease: "none"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-secondary-dark-700 py-10 md:py-20 md:px-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
                   
                    <div ref={imageRef} className="order-2 lg:order-1">
                        <Image src="/images/how-it-work-img.png"
                            alt="How it work"
                            width={500}
                            height={600}
                            className='h-[500px] lg:w-[500px] w-full'
                        />
                    </div>

                    <div ref={contentRef} className="order-1 lg:order-2">
                        <div 
                            ref={badgeRef}
                            className="text-primary-default-500 text-sm font-light mb-4 uppercase tracking-wider"
                        >
                            HOW IT WORKS
                        </div>

                        <h2 
                            ref={titleRef}
                            className="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                        >
                            Few Easy Steps and Done
                        </h2>

                        <p 
                            ref={descriptionRef}
                            className="text-secondary-light-300 text-lg leading-relaxed mb-8"
                        >
                            In just few easy step, you are all set to manage your business finances. Manage all your expenses with Spend.In all in one place.
                        </p>

                        
                        <div 
                            ref={stepsCardRef}
                            className="bg-secondary-default-500/80 sm:p-8 p-4 rounded-md flex items-center gap-4 transition-shadow duration-300"
                        >
                            <div ref={stepsIndicatorRef} className="flex items-center flex-col">
                                <div className="step-indicator bg-primary-default-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    1
                                </div>
                                <div className='connecting-line w-0.5 h-10 bg-primary-default-500'></div>
                                <div className="step-indicator bg-primary-default-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    2
                                </div>
                                <div className='flex flex-col items-center justify-center gap-1'>
                                    <span className='connecting-line w-0.5 h-1 bg-white'></span>
                                    <span className='connecting-line w-0.5 h-2 bg-white'></span>
                                    <span className='connecting-line w-0.5 h-2 bg-white'></span>
                                </div>
                                <div className="step-indicator bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                    3
                                </div>
                            </div>
                            <div ref={stepsTextRef} className="flex items-start flex-col justify-center sm:gap-10 gap-4">
                                <span className="text-white text-lg transition-all duration-300">Register your Spend.In account.</span>
                                <span className="text-white text-lg transition-all duration-300">Fill in the list of your business expenses.</span>
                                <span className="text-white text-lg transition-all duration-300">Done, let&apos;s continue the work.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks2;