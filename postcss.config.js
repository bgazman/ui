import path from 'path';
          import postcssImport from 'postcss-import';
          import tailwindcss from '@tailwindcss/postcss';
          import autoprefixer from 'autoprefixer';

          export default {
            plugins: [
              postcssImport({
                resolve: (id, basedir, importOptions) => {
                  if (id.startsWith('@styles')) {
                    return path.resolve(__dirname, 'src/styles', id.slice(8));
                  }
                  if (id.startsWith('@theme')) {
                    return path.resolve(__dirname, 'src/theme', id.slice(7));
                  }
                  if (id.startsWith('@components')) {
                    return path.resolve(__dirname, 'src/components', id.slice(12));
                  }
                  return id;
                },
              }),
              tailwindcss,
              autoprefixer,
            ],
          };