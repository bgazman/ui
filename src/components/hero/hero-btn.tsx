

export interface HeroButtonProps {
    link: string;
    text: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ link, text }) => {
    return (
        <div className="hero-card-btn">
            <a
                href={link}
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
                {text}
            </a>
        </div>
    );
};

export default HeroButton;