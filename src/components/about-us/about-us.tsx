import React from 'react';
import Stats, { Stat } from './stats';
import Mission from './mission';
import Vision from './vision';
import Team, { TeamMember } from './team';
import Grid from '@components/grid/grid';
import AnimatedSection from "@components/animated-section/animated-section.tsx";

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
                                         }) => {

    return (
        <AnimatedSection
            id={id}
            title={title}
            description={description}
            className={`py-12 px-4 max-w-[1200px] mx-auto ${className}`}
        >
            <Stats stats={stats}  />
            <Grid columns={2} gap="2rem" className="mb-16">
                {mission && <Mission mission={mission}  />}
                {vision && <Vision vision={vision}  />}
            </Grid>
            <Team team={team} />
        </AnimatedSection>
    );
};

export default AboutUs;
