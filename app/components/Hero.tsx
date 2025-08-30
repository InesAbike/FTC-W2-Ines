'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Button from './Button';

const SpendIn: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const dashboardRef = useRef<HTMLDivElement>(null);
    const decorationLeftTopRef = useRef<HTMLDivElement>(null);
    const decorationRightTopRef = useRef<HTMLDivElement>(null);
    const decorationLeftBottomRef = useRef<HTMLDivElement>(null);
    const decorationRightBottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline principale
            const tl = gsap.timeline();

            // Animation des éléments décoratifs avec parallax subtil
            gsap.set([decorationLeftTopRef.current, decorationRightTopRef.current, decorationLeftBottomRef.current, decorationRightBottomRef.current], {
                opacity: 0,
                scale: 0.8
            });

            tl.to([decorationLeftTopRef.current, decorationRightBottomRef.current], {
                opacity: 0.7,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            }, 0)
            .to([decorationRightTopRef.current, decorationLeftBottomRef.current], {
                opacity: 0.7,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            }, 0.2);

            // Animation du titre avec effet de révélation
            gsap.set(titleRef.current, {
                y: 60,
                opacity: 0
            });

            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, 0.3);

            // Animation du sous-titre
            gsap.set(subtitleRef.current, {
                y: 40,
                opacity: 0
            });

            tl.to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, 0.6);

            // Animation des boutons avec stagger
            gsap.set(buttonsRef.current?.children || [], {
                y: 30,
                opacity: 0
            });

            tl.to(buttonsRef.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, 0.9);

            // Animation du dashboard avec effet de montée
            gsap.set(dashboardRef.current, {
                y: 80,
                opacity: 0,
                scale: 0.95
            });

            tl.to(dashboardRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            }, 1.2);

            // Animations de hover sur les boutons
            const buttons = buttonsRef.current?.querySelectorAll('button');
            buttons?.forEach((button: Element) => {
                const buttonElement = button as HTMLButtonElement;
                
                buttonElement.addEventListener('mouseenter', () => {
                    gsap.to(buttonElement, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                buttonElement.addEventListener('mouseleave', () => {
                    gsap.to(buttonElement, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Animation continue des décorations (parallax subtil)
            gsap.to(decorationLeftTopRef.current, {
                y: -10,
                x: -5,
                rotation: 2,
                duration: 4,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            gsap.to(decorationRightTopRef.current, {
                y: 10,
                x: 5,
                rotation: -2,
                duration: 3.5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            gsap.to(decorationLeftBottomRef.current, {
                y: 8,
                x: -3,
                rotation: -1,
                duration: 3.8,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            gsap.to(decorationRightBottomRef.current, {
                y: -8,
                x: 3,
                rotation: 1,
                duration: 4.2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-secondary-default-500 text-white">
            {/* Hero Section */}
            <div ref={heroRef} className="relative overflow-hidden">
                <div ref={decorationLeftBottomRef}>
                    <Image
                        src="/images/hero-decoration-left.png"
                        alt="decoration"
                        width={200}
                        height={200}
                        className='left-0 sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] bottom-0 absolute'
                    />
                </div>
                <div ref={decorationRightTopRef}>
                    <Image
                        src="/images/hero-decoration-right.png"
                        alt="decoration"
                        width={200}
                        height={200}
                        className='right-0 top-0 sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] absolute'
                    />
                </div>
                <div ref={decorationLeftTopRef}>
                    <Image
                        src="/images/decoration-left.png"
                        alt="decoration"
                        width={250}
                        height={250}
                        className='left-0 top-0 absolute'
                    />
                </div>
                <div ref={decorationRightBottomRef}>
                    <Image
                        src="/images/decoration-right.png"
                        alt="decoration"
                        width={250}
                        height={250}
                        className='right-0 bottom-0 absolute'
                    />
                </div>

                <div className="relative md:px-16 px-6 pt-20 pb-12 text-center">
                    <h1 
                        ref={titleRef}
                        className="text-4xl md:text-5xl max-w-xl mx-auto font-bold mb-6 md:text-center text-left leading-tight"
                    >
                        All your business expenses in one place.
                    </h1>

                    <div 
                        ref={subtitleRef}
                        className="max-w-2xl mx-auto mb-10 text-secondary-light-300"
                    >
                        <p className="text-lg mb-1">Your one-stop finance empower platform.</p>
                        <p className="text-lg">Manage all your business expenses with our supafast app.</p>
                    </div>

                    <div 
                        ref={buttonsRef}
                        className="grid gap-6 sm:grid-cols-2 grid-cols-1 items-center justify-center max-w-96 mx-auto"
                    >
                        <Button>Get a Free Demo</Button>
                        <Button variant="secondary">See Pricing</Button>
                    </div>
                </div>
                <div ref={dashboardRef}>
                    <div className='flex items-center justify-center sm:pt-16 pt-12 px-6'>
                        <Image
                            src="/images/dashboard.png"
                            alt="Dashboard"
                            width={1100}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpendIn;