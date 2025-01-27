import { MainProps } from '@components/main/main';

const mockMainData: Omit<MainProps, 'children'> = {
    heroItems: [
        {
            title: 'Hero Title 1',
            description: 'Hero Description 1',
            actionText: 'Learn More',
            actionLink: '/learn-more'
        },
        // Add more hero items as needed
    ],
    pricingItems: [
        {
            title: 'Basic Plan',
            price: '$10/month',
            features: ['Feature 1', 'Feature 2'],
            link: '/pricing/basic'
        },
        // Add more pricing items as needed
    ],
    featuresItems: [
        {
            title: 'Feature 1',
            description: 'Feature Description 1',
            benefits: ['Benefit 1', 'Benefit 2']
        },
        // Add more feature items as needed
    ]
};

export default mockMainData;