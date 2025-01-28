import React from 'react';
import Section from '@components/section';
import Card from '@components/card';
import Grid from '@components/grid';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

interface Stat {
    number: string;
    label: string;
}

const stats: Stat[] = [
    { number: '100', label: 'Users' },
    { number: '200', label: 'Downloads' },
    { number: '300', label: 'Likes' },
];

const renderStat = (stat: Stat, index: number): JSX.Element => (
    <div key={index}>
        <div>{stat.number}</div>
        <div>{stat.label}</div>
    </div>
);
stats.map(renderStat);
interface AboutUsProps {
    id?: string;
    title: string;
    description: string;
    mission: string;
    vision: string;
    values: string[];
    team: TeamMember[];
    stats: Stat[];
    className?: string;
    style?: React.CSSProperties;
}

const AboutUs: React.FC<AboutUsProps> = ({
    id,
    title,
    description,
    mission,
    vision,
    values,
    team,
    stats,
    className = '',
    style,
}) => {
    const cardStyle = { border: '1px solid var(--border-color)' };

    return (
        <Section
            id={id}
            title={title}
            description={description}
            className={`py-12 px-4 ${className}`} // Ensure this matches the FeaturesSection
            style={{ ...style, maxWidth: '1200px', margin: '0 auto' }} // Optional: Add maxWidth and center align
        >
            {/* Stats */}
            <Grid columns={4} gap="2rem" className="mb-16">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        title={stat.label}
                        className="text-center p-6"
                        style={cardStyle}
                    >
                        <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                    </Card>
                ))}
            </Grid>

            {/* Mission, Vision, Values */}
            <Grid columns={3} gap="2rem" className="mb-16">
                <Card
                    title="Mission"
                    description={mission}
                    style={cardStyle}
                />

                <Card
                    title="Vision"
                    description={vision}
                    style={cardStyle}
                />

                <Card
                    title="Values"
                    style={cardStyle}
                >
                    <ul className="list-disc list-inside text-secondary">
                        {values.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </Card>
            </Grid>

            {/* Team Section */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-8">Our Leadership Team</h2>
                <Grid columns={3} gap="2rem">
                    {team.map((member, index) => (
                        <Card
                            key={index}
                            title={member.name}
                            className="p-6"
                            style={cardStyle}
                        >
                            <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                            <p className="text-blue-600 mb-2">{member.role}</p>
                            <p className="text-gray-600">{member.bio}</p>
                        </Card>
                    ))}
                </Grid>
            </div>
        </Section>    );
};

export default AboutUs;