import { HeroItem, PricingItem, FeatureItem } from '@layout/landing-layout/landing-layout';

const mockMainData = {
    heroItems: [
        {
            title: 'Hero Title 1',
            description: 'Hero Description 1',
            actionText: 'Learn More',
            actionLink: '/learn-more',
        },
        {
            title: 'Hero Title 2',
            description: 'Hero Description 2',
            actionText: 'Get Started',
            actionLink: '/get-started',
        },
        {
            title: 'Hero Title 3',
            description: 'Hero Description 3',
            actionText: 'Join Now',
            actionLink: '/join-now',
        },
        {
            title: 'Hero Title 4',
            description: 'Hero Description 4',
            actionText: 'Discover',
            actionLink: '/discover',
        },
        {
            title: 'Hero Title 4',
            description: 'Hero Description 4',
            actionText: 'Discover',
            actionLink: '/discover',
        },
        {
            title: 'Hero Title 4',
            description: 'Hero Description 4',
            actionText: 'Discover',
            actionLink: '/discover',
        },
        {
            title: 'Hero Title 4',
            description: 'Hero Description 4',
            actionText: 'Discover',
            actionLink: '/discover',
        },


    ] as HeroItem[],

    pricingItems: [
        {
            title: 'Basic Plan',
            price: '$10/month',
            features: ['Feature 1', 'Feature 2'],
            link: '/pricing/basic',
        },
        {
            title: 'Pro Plan',
            price: '$30/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            link: '/pricing/pro',
        },
        {
            title: 'Enterprise Plan',
            price: '$50/month',
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
            link: '/pricing/enterprise',
        },
        {
            title: 'Custom Plan',
            price: 'Contact Us',
            features: ['Custom Feature 1', 'Custom Feature 2', 'Custom Support'],
            link: '/pricing/custom',
        },
    ] as PricingItem[],

    featuresItems: [
        {
            title: 'Feature 1',
            description: 'Feature Description 1',
            benefits: ['Benefit 1', 'Benefit 2'],
        },
        {
            title: 'Feature 2',
            description: 'Feature Description 2',
            benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
        },
        {
            title: 'Feature 3',
            description: 'Feature Description 3',
            benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
        },
        {
            title: 'Feature 4',
            description: 'Feature Description 4',
            benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4', 'Benefit 5'],
        },
    ] as FeatureItem[],
};

export default mockMainData;
