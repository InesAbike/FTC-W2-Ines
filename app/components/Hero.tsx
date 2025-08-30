'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from './Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SpendIn = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const dashboardRef = useRef(null);
    const decorationRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline pour les animations d'entrée
            const tl = gsap.timeline();

            // Animation des décorations avec un effet de parallax subtil
            gsap.set(decorationRefs.current, { opacity: 0, scale: 0.8 });
            
            decorationRefs.current.forEach((decoration, index) => {
                if (decoration) {
                    tl.to(decoration, {
                        opacity: 0.7,
                        scale: 1,
                        duration: 1.2,
                        ease: "power2.out",
                        delay: index * 0.1
                    }, 0);
                }
            });

            // Animation du titre avec effet de typewriter subtil
            gsap.set(titleRef.current, { opacity: 0, y: 50 });
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, 0.3);

            // Animation des sous-titres
            gsap.set(subtitleRef.current?.children || [], { opacity: 0, y: 30 });
            tl.to(subtitleRef.current?.children || [], {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, 0.6);

            // Animation des boutons avec effet bounce
            gsap.set(buttonsRef.current?.children || [], { opacity: 0, y: 30, scale: 0.9 });
            tl.to(buttonsRef.current?.children || [], {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)"
            }, 0.9);

            // Animation du dashboard avec effet de révélation
            gsap.set(dashboardRef.current, { opacity: 0, y: 100, scale: 0.95 });
            tl.to(dashboardRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            }, 1.1);

            // Animations au scroll avec ScrollTrigger
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    
                    // Parallax subtil pour les décorations
                    decorationRefs.current.forEach((decoration, index) => {
                        if (decoration) {
                            const speed = (index % 2 === 0) ? -30 : 30;
                            gsap.set(decoration, {
                                y: progress * speed
                            });
                        }
                    });

                    // Effet parallax pour le dashboard
                    if (dashboardRef.current) {
                        gsap.set(dashboardRef.current, {
                            y: progress * -50
                        });
                    }
                }
            });

            // Animations hover pour les boutons
            if (buttonsRef.current) {
                const buttons = buttonsRef.current.children;
                Array.from(buttons).forEach((button) => {
                    button.addEventListener('mouseenter', () => {
                        gsap.to(button, {
                            scale: 1.05,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });

                    button.addEventListener('mouseleave', () => {
                        gsap.to(button, {
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                });
            }

            // Animation flottante continue pour le dashboard
            gsap.to(dashboardRef.current, {
                y: "+=10",
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToDecorationRefs = (el) => {
        if (el && !decorationRefs.current.includes(el)) {
            decorationRefs.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="bg-secondary-default-500 text-white">
            {/* Hero Section */}
            <div ref={heroRef} className="relative overflow-hidden">
                <Image
                    ref={addToDecorationRefs}
                    src="/images/hero-decoration-left.png"
                    alt="decoration"
                    width={200}
                    height={200}
                    className='left-0 sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] bottom-0 absolute'
                />
                <Image
                    ref={addToDecorationRefs}
                    src="/images/hero-decoration-right.png"
                    alt="decoration"
                    width={200}
                    height={200}
                    className='right-0 top-0 sm:w-[250px] sm:h-[250px] w-[200px] h-[200px] absolute'
                />
                <Image
                    ref={addToDecorationRefs}
                    src="/images/decoration-left.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='left-0 top-0 absolute'
                />
                <Image
                    ref={addToDecorationRefs}
                    src="/images/decoration-right.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='right-0 bottom-0 absolute'
                />

                <div className="relative px-6 pt-20 pb-12 text-center">
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
                        className="grid gap-6 sm:grid-cols-2 grid-cols-1 items-center justify-center max-w-xl mx-auto"
                    >
                        <Button>Get a Free Demo</Button>
                        <Button variant="secondary">See Pricing</Button>
                    </div>
                </div>
                
                <div>
                    <div className='flex items-center justify-center sm:pt-16 pt-12 px-6'>
                        <Image
                            ref={dashboardRef}
                            src="/images/dashboard.png"
                            alt="Logo"
                            width={1000}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpendIn;