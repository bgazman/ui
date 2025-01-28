import React from 'react';
import Card from '@components/card';

interface VisionProps {
    vision: string;
    cardStyle: React.CSSProperties;
}

const Vision: React.FC<VisionProps> = ({ vision, cardStyle }) => (
    <Card
        title="Vision"
        description={vision}
        style={cardStyle}
    />
);

export default Vision;