import React from 'react';
import Stats, { Stat } from './stats.tsx';
import Mission from './mission.tsx';
import Vision from './vision.tsx';
import Team, { TeamMember } from './team.tsx';
import Grid from '@components/grid.tsx';
import AnimatedSection from "@components/animated-section.tsx";

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
