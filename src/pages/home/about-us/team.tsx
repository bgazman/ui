import React from 'react';
import Card from '@components/card/card.tsx';
import Grid from '@components/grid/grid.tsx';

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

interface TeamProps {
    team: TeamMember[];
    cardClassName?: string;
}

const Team: React.FC<TeamProps> = ({ team, cardClassName }) => (
    <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Leadership Team</h2>
        <Grid columns={3} gap="2rem">
            {team.map((member, index) => (
                <Card key={index} title={member.name} className={`p-6 ${cardClassName || ''}`}>
                    <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                </Card>
            ))}
        </Grid>
    </div>
);

export default Team;
