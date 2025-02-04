// Statistic.tsx
interface StatisticProps {
    value: string;
    label: string;
}

const Statistic = ({ value, label }: StatisticProps) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-text-primary mb-sm">{value}</div>
        <div className="text-text-secondary">{label}</div>
    </div>
);

export default Statistic;

