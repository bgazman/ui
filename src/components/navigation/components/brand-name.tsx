
interface BrandNameProps {
    name: string;
}

const BrandName: React.FC<BrandNameProps> = ({ name }) => {
    return <div className="brand-name">{name}</div>;
};
export default BrandName;