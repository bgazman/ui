import path from 'path';

const aliases = {
    '@components': path.resolve(__dirname, 'src/components'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@theme': path.resolve(__dirname, 'src/theme'),
    '@tools': path.resolve(__dirname, 'src/tools'),
    '@layout': path.resolve(__dirname, 'src/layout'),
};

export default aliases;