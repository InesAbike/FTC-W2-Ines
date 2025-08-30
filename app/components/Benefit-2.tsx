'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FeaturesData2 } from '../datas';
import { FileText, Receipt, CreditCard } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const WhyUseSpendIn2: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const decorationLeftRef = useRef<HTMLDivElement>(null);
    const decorationRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([decorationLeftRef.current, decorationRightRef.current], {
                opacity: 0,
                scale: 0.8
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

            gsap.set(featuresRef.current?.children || [], {
                x: -50,
                opacity: 0
            });

            gsap.set(imageRef.current, {
                x: 50,
                opacity: 0,
                scale: 0.9
            });

            // Create scroll-triggered animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animate decorations
            tl.to([decorationLeftRef.current, decorationRightRef.current], {
                opacity: 0.3,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            }, 0);

            // Animate header elements
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

            // Animate features with stagger
            tl.to(featuresRef.current?.children || [], {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            }, 0.8);

            // Animate image
            tl.to(imageRef.current, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            }, 1);

            // Continuous animations for decorations
            gsap.to(decorationLeftRef.current, {
                y: -15,
                x: -8,
                rotation: 3,
                duration: 5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            gsap.to(decorationRightRef.current, {
                y: 15,
                x: 8,
                rotation: -3,
                duration: 4.5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            // Hover animations for feature cards
            const featureCards = featuresRef.current?.children;
            if (featureCards) {
                Array.from(featureCards).forEach((card: Element) => {
                    const cardElement = card as HTMLDivElement;
                    
                    cardElement.addEventListener('mouseenter', () => {
                        gsap.to(cardElement, {
                            x: 10,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        
                        const icon = cardElement.querySelector('.bg-primary-default-500');
                        if (icon) {
                            gsap.to(icon, {
                                scale: 1.1,
                                rotation: 5,
                                duration: 0.3,
                                ease: "back.out(1.7)"
                            });
                        }
                    });

                    cardElement.addEventListener('mouseleave', () => {
                        gsap.to(cardElement, {
                            x: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        
                        const icon = cardElement.querySelector('.bg-primary-default-500');
                        if (icon) {
                            gsap.to(icon, {
                                scale: 1,
                                rotation: 0,
                                duration: 0.3,
                                ease: "back.out(1.7)"
                            });
                        }
                    });
                });
            }

            // Image hover effect
            const imageElement = imageRef.current?.querySelector('img');
            if (imageElement) {
                imageElement.addEventListener('mouseenter', () => {
                    gsap.to(imageElement, {
                        scale: 1.05,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });

                imageElement.addEventListener('mouseleave', () => {
                    gsap.to(imageElement, {
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white md:py-20 py-10 md:px-16 px-6  relative">
            <div ref={decorationLeftRef}>
                <Image
                    src="/images/decoration-left.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='left-0 top-0 absolute'
                />
            </div>
            <div ref={decorationRightRef}>
                <Image
                    src="/images/decoration-right.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='right-0 bottom-0 absolute'
                />
            </div>
            <div className="max-w-7xl mx-auto">
                {/* Header centré */}
                <div ref={headerRef} className="md:text-center text-left mb-16">
                    <div 
                        ref={badgeRef}
                        className="text-primary-default-500 text-sm font-semibold mb-4 uppercase tracking-wider"
                    >
                        WHY USE SPEND.IN
                    </div>
                    <h2 
                        ref={titleRef}
                        className="text-4xl lg:text-5xl font-bold text-secondary-dark-900 mb-6"
                    >
                        Easy, Simple, Affordable
                    </h2>
                    <p 
                        ref={descriptionRef}
                        className="text-secondary-light-400 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Features List */}
                    <div ref={featuresRef}>
                        {
                            FeaturesData2.map(
                                (feature, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start space-x-4 mb-8 cursor-pointer"
                                    >
                                        <div className="bg-primary-default-500 rounded-xl p-3 flex-shrink-0">
                                            <div className="text-white">
                                                {feature.icon === 'FileText' && <FileText size={24} />}
                                                {feature.icon === 'Receipt' && <Receipt size={24} />}
                                                {feature.icon === 'CreditCard' && <CreditCard size={24} />}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-secondary-dark-900 mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-secondary-light-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>

                    <div ref={imageRef} className="flex justify-center">
                        <Image
                            src='/images/history-table.png'
                            alt="history table"
                            width={500}
                            height={500} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUseSpendIn2;