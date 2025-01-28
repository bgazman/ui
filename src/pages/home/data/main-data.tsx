import { MainProps } from '@components/main/main';

    const mockMainData: Omit<MainProps, 'children'> = {
        heroItems: [
            {
                title: 'Hero Title 1',
                description: 'Hero Description 1',
                actionText: 'Learn More',
                actionLink: '/learn-more'
            },
            {
                title: 'Hero Title 2',
                description: 'Hero Description 2',
                actionText: 'Get Started',
                actionLink: '/get-started'
            }
        ],
        pricingItems: [
            {
                title: 'Basic Plan',
                price: '$10/month',
                features: ['Feature 1', 'Feature 2'],
                link: '/pricing/basic'
            },
            {
                title: 'Pro Plan',
                price: '$30/month',
                features: ['Feature 1', 'Feature 2', 'Feature 3'],
                link: '/pricing/pro'
            }
        ],
        featuresItems: [
            {
                title: 'Feature 1',
                description: 'Feature Description 1',
                benefits: ['Benefit 1', 'Benefit 2']
            },
            {
                title: 'Feature 2',
                description: 'Feature Description 2',
                benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
            }
        ]
    };

    export default mockMainData;