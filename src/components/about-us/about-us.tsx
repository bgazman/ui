import React from 'react';
import Section from '@components/section/section.tsx';
import Stats, { Stat } from './stats';
import Mission from './mission';
import Vision from './vision';
import Team, { TeamMember } from './team';
import Grid from '@components/grid/grid.tsx';

interface AboutUsProps {
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
    // Instead of inline border, consider a utility class for theming:
    // e.g., "border border-[var(--border-color)]"
    const cardStyle = { border: '1px solid var(--border-color)' };

    return (
        <Section
            id={id}
            title={title}
            description={description}
            // Added `max-w-[1200px] mx-auto` for centered layout
            className={`py-12 px-4 max-w-[1200px] mx-auto ${className}`}
            style={style}
        >
            <Stats stats={stats} cardStyle={cardStyle} />
            <Grid columns={2} gap="2rem" className="mb-16">
                {mission && <Mission mission={mission} cardStyle={cardStyle} />}
                {vision && <Vision vision={vision} cardStyle={cardStyle} />}
            </Grid>
            <Team team={team} cardStyle={cardStyle} />
        </Section>
    );
};

export default AboutUs;
