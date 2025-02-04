import React from 'react';
import {Card} from '@components/card.tsx';

interface MissionProps {
    mission: string;
    cardClassName?: string;
}

const Mission: React.FC<MissionProps> = ({ mission, cardClassName }) => (
    <Card title="Mission" description={mission} className={cardClassName} />
);

export default Mission;
