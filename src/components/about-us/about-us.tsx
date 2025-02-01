import React from 'react';
import Section from '@components/section/section';
import Stats, { Stat } from './stats';
import Mission from './mission';
import Vision from './vision';
import Team, { TeamMember } from './team';
import Grid from '@components/grid/grid';

export interface AboutUsProps {
    id?: string;
    title: string;
    description: string;
    mission?: string;
    vision?: string;
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
                                             team,
                                             stats,
                                             className = '',
                                             style,
                                         }) => {
    const cardClassName = 'card-border'; // Defined in your global CSS as: border: 1px solid var(--border-color)

    return (
        <Section
            id={id}
            title={title}
            description={description}
            className={`py-12 px-4 max-w-[1200px] mx-auto ${className}`}
            style={style}
        >
            <Stats stats={stats} cardClassName={cardClassName} />
            <Grid columns={2} gap="2rem" className="mb-16">
                {mission && <Mission mission={mission} cardClassName={cardClassName} />}
                {vision && <Vision vision={vision} cardClassName={cardClassName} />}
            </Grid>
            <Team team={team} cardClassName={cardClassName} />
        </Section>
    );
};

export default AboutUs;
