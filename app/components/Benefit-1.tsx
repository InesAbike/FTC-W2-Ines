'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { FeaturesData1 } from '../datas';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const WhyUseSpendIn1: React.FC = () => {
    // Références pour les éléments à animer
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const featuresGridRef = useRef<HTMLDivElement>(null);
    const decorationsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation des décorations avec parallax
            decorationsRef.current.forEach((decoration, index) => {
                if (decoration) {
                    gsap.set(decoration, { 
                        opacity: 0.6,
                        scale: 0.8,
                        rotation: index % 2 === 0 ? -5 : 5
                    });
                    
                    gsap.to(decoration, {
                        scale: 1,
                        opacity: 0.8,
                        rotation: 0,
                        duration: 2,
                        ease: "power2.out",
                        delay: 0.2
                    });

                    // Effet parallax au scroll
                    gsap.to(decoration, {
                        y: index % 2 === 0 ? -40 : 40,
                        rotation: index % 2 === 0 ? 3 : -3,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5
                        }
                    });
                }
            });

            // Timeline pour l'animation d'entrée du header
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animation du tagline
            if (taglineRef.current) {
                gsap.set(taglineRef.current, { 
                    x: -50, 
                    opacity: 0 
                });
                
                headerTl.to(taglineRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                });
            }

            // Animation du titre
            if (titleRef.current) {
                gsap.set(titleRef.current, { 
                    y: 60, 
                    opacity: 0 
                });
                
                headerTl.to(titleRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out"
                }, "-=0.6");
            }

            // Animation de la description
            if (descriptionRef.current) {
                gsap.set(descriptionRef.current, { 
                    x: 50, 
                    opacity: 0 
                });
                
                headerTl.to(descriptionRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.8");
            }

            // Animation d'apparition progressive des éléments au scroll
            if (featuresGridRef.current) {
                gsap.to(featuresGridRef.current, {
                    opacity: 1,
                    duration: 0.1,
                    scrollTrigger: {
                        trigger: featuresGridRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            }

        }, containerRef);

        return () => {
            ctx.revert(); // Nettoie les animations
        };
    }, []);

    // Fonction pour ajouter les références des décorations
    const addToDecorationRefs = (el: HTMLDivElement | null) => {
        if (el && !decorationsRef.current.includes(el)) {
            decorationsRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="bg-white md:py-20 py-10 px-6 relative overflow-hidden">
            {/* Décorations animées */}
            <div ref={addToDecorationRefs}>
                <Image
                    src="/images/decoration-left.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='left-0 top-0 absolute'
                />
            </div>
            <div ref={addToDecorationRefs}>
                <Image
                    src="/images/decoration-right.png"
                    alt="decoration"
                    width={250}
                    height={250}
                    className='right-0 bottom-0 absolute'
                />
            </div>
            
            <div className="max-w-7xl mx-auto">
                {/* Header animé */}
                <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div 
                            ref={taglineRef}
                            className="text-primary-default-500 text-sm font-semibold mb-4 uppercase tracking-wider"
                        >
                            WHY USE SPEND.IN
                        </div>
                        <h2 
                            ref={titleRef}
                            className="text-4xl lg:text-5xl font-bold text-secondary-dark-900 leading-tight"
                        >
                            Easy, Simple,
                            <br />
                            Affordable
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <p 
                            ref={descriptionRef}
                            className="text-secondary-light-400 text-lg leading-relaxed"
                        >
                            Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                        </p>
                    </div>
                </div>

                {/* Grid des fonctionnalités */}
                <div 
                    ref={featuresGridRef}
                    className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'
                    style={{ opacity: 0 }}
                >
                    {FeaturesData1.map((feature, index) => (
                        <div 
                            key={index} 
                            className="cursor-pointer transition-all duration-300"
                        >
                            {feature.image && (
                                <div className={`mb-6 bg-secondary-light-100 rounded-2xl pt-8 pr-8 overflow-hidden ${feature.imageContainerClass}`}>
                                    <Image 
                                        src={feature.image} 
                                        alt={feature.title} 
                                        width={500} 
                                        height={500}
                                        className="transition-transform duration-300"
                                    />
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-secondary-dark-900 mb-3 transition-transform duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-secondary-light-400 leading-relaxed transition-transform duration-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUseSpendIn1;