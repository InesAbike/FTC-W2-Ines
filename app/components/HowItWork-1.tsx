'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StepsData } from '../datas';
import Button from './Button';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const HowItWork1: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const stepsContainerRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
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

            // Set initial states for step cards
            const stepCards = stepsContainerRef.current?.children;
            if (stepCards) {
                gsap.set(Array.from(stepCards), {
                    y: 80,
                    opacity: 0,
                    scale: 0.9
                });
            }

            gsap.set(buttonsRef.current?.children || [], {
                y: 40,
                opacity: 0
            });

            // Create scroll-triggered animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none none"
                }
            });

            // Animate header elements
            tl.to(badgeRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            }, 0)
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, 0.2)
            .to(descriptionRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 0.4);

            // Animate step cards with enhanced stagger
            if (stepCards) {
                tl.to(Array.from(stepCards), {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: {
                        amount: 0.6,
                        from: "start"
                    },
                    ease: "back.out(1.7)"
                }, 0.6);
            }

            // Animate buttons
            tl.to(buttonsRef.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, 1.2);

            // Enhanced hover animations for step cards
            if (stepCards) {
                Array.from(stepCards).forEach((card: Element, index: number) => {
                    const cardElement = card as HTMLDivElement;
                    const image = cardElement.querySelector('img');
                    const badge = cardElement.querySelector('.bg-secondary-default-500');
                    const title = cardElement.querySelector('h3');
                    
                    cardElement.addEventListener('mouseenter', () => {
                        const hoverTl = gsap.timeline();
                        
                        hoverTl.to(cardElement, {
                            y: -6,
                            scale: 1.02,
                            duration: 0.4,
                            ease: "power2.out"
                        })
                        .to(image, {
                            scale: 1.04,
                            duration: 0.4,
                            ease: "power2.out"
                        }, 0)                        
                        .to(badge, {
                            scale: 1.1,
                            rotation: 10,
                            duration: 0.4,
                            ease: "back.out(1.7)"
                        }, 0)
                        .to(title, {
                            color: "#7C5CFC", // text-emerald-500 equivalent
                            duration: 0.3,
                            ease: "power2.out"
                        }, 0);
                    });

                    cardElement.addEventListener('mouseleave', () => {
                        const leaveTl = gsap.timeline();
                        
                        leaveTl.to(cardElement, {
                            y: 0,
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        })
                        .to(image, {
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        }, 0)
                        .to(badge, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.4,
                            ease: "back.out(1.7)"
                        }, 0)
                        .to(title, {
                            color: "#FFFFFF",
                            duration: 0.3,
                            ease: "power2.out"
                        }, 0);
                    });
                });
            }

            // Button hover animations
            const buttons = buttonsRef.current?.querySelectorAll('button');
            buttons?.forEach((button: Element) => {
                const buttonElement = button as HTMLButtonElement;
                
                buttonElement.addEventListener('mouseenter', () => {
                    gsap.to(buttonElement, {
                        scale: 1.05,
                        y: -2,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                buttonElement.addEventListener('mouseleave', () => {
                    gsap.to(buttonElement, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Floating animation for step badges
            if (stepCards) {
                Array.from(stepCards).forEach((card: Element, index: number) => {
                    const badge = card.querySelector('.bg-secondary-default-500');
                    if (badge) {
                        gsap.to(badge, {
                            y: -5,
                            duration: 2 + index * 0.3,
                            ease: "power1.inOut",
                            yoyo: true,
                            repeat: -1,
                            delay: index * 0.2
                        });
                    }
                });
            }

            // Subtle parallax effect on scroll
            gsap.to(stepsContainerRef.current, {
                scrollTrigger: {
                    trigger: stepsContainerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                },
                y: -30,
                ease: "none"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-secondary-dark-700 md:py-20 py-10 md:px-16 px-6 ">
            <div className="max-w-7xl mx-auto">
                {/* Header centré */}
                <div ref={headerRef} className="md:text-center text-left mb-16">
                    <div 
                        ref={badgeRef}
                        className="text-primary-default-500 text-sm font-light mb-4 uppercase tracking-wider"
                    >
                        HOW IT WORKS
                    </div>
                    <h2 
                        ref={titleRef}
                        className="text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Few Easy Steps and Done
                    </h2>
                    <p 
                        ref={descriptionRef}
                        className="text-secondary-light-300 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        In just few easy step, you are all set to manage your business finances.
                        Manage all expenses with Spend.In all in one place.
                    </p>
                </div>

                <div 
                    ref={stepsContainerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 mx-auto items-center max-w-6xl"
                >
                    {
                        StepsData.map(
                            (feature, index) => (
                                <div 
                                    key={index} 
                                    className="relative flex flex-col items-center justify-center space-x-4 mb-8 cursor-pointer"
                                >
                                    <div className='flex flex-col items-center justify-center gap-4'>
                                        <div className='relative'>
                                            <Image 
                                                src={feature.image || ""}
                                                alt={feature.title}
                                                width={300}
                                                height={600} 
                                            />
                                            <div className="text-white text-2xl absolute -left-5 -top-5 flex items-center justify-center rounded-full h-20 w-20 bg-secondary-default-500">
                                                <div className="bg-primary-default-500 rounded-full h-18 w-18 flex items-center justify-center">
                                                    {feature.id}
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-medium text-white mb-2 max-w-42 text-center transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <div 
                    ref={buttonsRef}
                    className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center gap-6 max-w-96 mx-auto"
                >
                    <Button>Get a Free Demo</Button>
                    <Button variant="secondary">See Pricing</Button>
                </div>
            </div>
        </div>
    );
};

export default HowItWork1;