import { RiHeartsFill } from "react-icons/ri";
import { FeatureCardProps, PricingPlan, StepProps, TestimonialProps } from "../types";
import { BiSolidCrown } from "react-icons/bi";
import { IoFlash } from "react-icons/io5";

export const FeaturesData1: FeatureCardProps[] = [
    {
        "id": 1,
        "image": "/images/automatic-invoice.png",
        "title": "Automatic Invoice Payment",
        "description": "The system can automatically, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!"
    },
    {
        "id": 2,
        "image": "/images/payments-history.png",
        "title": "Clear payment history",
        "description": "Every expense and income that the platform breaks down every expense you cash out to the millisecond!"
    },
    {
        "id": 2,
        "image": "/images/payments-cards.png",
        "title": "Use of multi-card payments",
        "description": "Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!",
        "imageContainerClass": "pb-8"
    }
]

export const FeaturesData2: FeatureCardProps[] = [
    {
        "id": 1,
        "icon": "FileText",
        "title": "Automatic Invoice Payment",
        "description": "Automatic payments help you to arrange payments on a certain date without doing it manually again."
    },
    {
        "id": 2,
        "icon": "Receipt",
        "title": "Clear payment history",
        "description": "Clear payment history helps you to track your business expenses on specific dates."
    },
    {
        "id": 3,
        "icon": "CreditCard",
        "title": "Use of multi-card payments",
        "description": "Have more than one debit or credit card? Don't worry, we support payments using more than one card."
    }
]

export const StepsData: StepProps[] = [
    {
        "id": 1,
        "image": "/images/step-1.png",
        "title": "Register your Spend.In account.",
    },
    {
        "id": 2,
        "image": "/images/step-2.png",
        "title": "Fill in the list of your business expenses.",
    },
    {
        "id": 3,
        "image": "/images/step-3.png",
        "title": "Done, let\’s continue the work.",
    }
]

// Testimonials
export const testimonials: TestimonialProps[] = [
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

// Pricing Plans
export const pricingPlans: PricingPlan[] = [
    {
        id: 'free',
        name: 'Free',
        icon: 'RiHeartsFill',
        subtitle: 'Perfect plan to get started',
        monthlyPrice: 0,
        yearlyPrice: 0,
        description: 'A free plan grants you access to some cool features of Spend.In.',
        features: [
            { name: 'Sync accross device', included: true },
            { name: '5 workspace', included: true },
            { name: 'Collaborate with 5 user', included: true },
            { name: 'Sharing permission', included: false },
            { name: 'Admin tools', included: false },
            { name: '100+ integrations', included: false }
        ],
        buttonText: 'Get Your Free Plan'
    },
    {
        id: 'pro',
        name: 'Pro',
        icon: 'BiSolidCrown',
        subtitle: 'Perfect plan for professionals!',
        monthlyPrice: 12,
        yearlyPrice: 12,
        description: 'For professional only! Start arranging your expenses with our best templates.',
        isPopular: true,
        features: [
            { name: 'Everything in Free Plan', included: true },
            { name: 'Unlimited workspace', included: true },
            { name: 'Collaborative workspace', included: true },
            { name: 'Sharing permission', included: true },
            { name: 'Admin tools', included: true },
            { name: '100+ integrations', included: true }
        ],
        buttonText: 'Get Started'
    },
    {
        id: 'ultimate',
        name: 'Ultimate',
        icon: 'IoFlash',
        subtitle: 'Best suits for great company!',
        monthlyPrice: 33,
        yearlyPrice: 33,
        description: 'If you a finance manager at big company, this plan is a perfect match.',
        features: [
            { name: 'Everything in Pro Plan', included: true },
            { name: 'Daily performance reports', included: true },
            { name: 'Dedicated assistant', included: true },
            { name: 'Artificial intelligence', included: true },
            { name: 'Marketing tools & automations', included: true },
            { name: 'Advanced security', included: true }
        ],
        buttonText: 'Get Started'
    }
];

