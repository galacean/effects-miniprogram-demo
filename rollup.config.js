import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript(),
  resolve(),
  commonjs({
    ignoreGlobal: true,
  }),
];

export default () => {
  const input = [
    'index',
    'inspire',
    'text',
    'render-level',
    'interactive',
    'dynamic-image',
    'spine',
    'model',
  ].map(name => `./miniprogram/pages/${name}/index.ts`);

  return {
    input,
    output: {
      format: 'cjs',
      dir: 'miniprogram/',
      chunkFileNames: 'chunks/[name].js',
    },
    plugins,
  }
};

// export default [
//   'index',
//   'inspire',
//   'text',
//   'render-level',
//   'interactive',
//   'dynamic-image',
//   'spine',
//   'model',
// ].map(name => {
//   return {
//     input: [`./miniprogram/pages/${name}/index.ts`],
//     output: {
//       format: 'cjs',
//       dir: 'miniprogram/',
//       entryFileNames: `pages/${name}/[name].js`,
//       chunkFileNames: 'chunks/[name].js',
//     },
//     plugins,
//   };
// });