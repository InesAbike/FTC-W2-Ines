export interface FeatureCardProps {
    id: number;
    image?: string;
    icon?: string;
    title: string;
    description: string;
    imageContainerClass?: string;
}

export interface StepProps {
    id: number;
    image?: string;
title:string,
}

export interface TestimonialProps {
    id: number;
    title: string;
    content: string;
    author: string;
    position: string;
    avatar: string;
}

export interface PricingPlan {
    id: string;
    name: string;
    icon: string;
    subtitle: string;
    monthlyPrice: number;
    isPopular?: boolean;
    yearlyPrice: number;
    description: string;
    features: { name: string; included: boolean }[];
    buttonText: string;
}