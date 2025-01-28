import React from 'react';
import Card from '@components/card';

interface MissionProps {
    mission: string;
    cardStyle: React.CSSProperties;
}

const Mission: React.FC<MissionProps> = ({ mission, cardStyle }) => (
    <Card
        title="Mission"
        description={mission}
        style={cardStyle}
    />
);

export default Mission;