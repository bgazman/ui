import React from 'react';
import {Card} from '@components/card.tsx';

interface VisionProps {
    vision: string;
    cardClassName?: string;
}

const Vision: React.FC<VisionProps> = ({ vision, cardClassName }) => (
    <Card title="Vision" description={vision} className={cardClassName} />
);

export default Vision;
