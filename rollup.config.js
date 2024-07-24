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
  const input = {};

  [
    'index',
    'inspire',
    'text',
    'render-level',
    'interactive',
    'dynamic-image',
    'spine',
    'model',
  ].forEach(name => {
    input[name] = `./miniprogram/pages/${name}/index.ts`;
  });

  return {
    input,
    output: {
      format: 'cjs',
      dir: 'miniprogram/',
      entryFileNames: 'pages/[name]/index.js',
      chunkFileNames: 'chunks/[name].js',
      manualChunks: {
        'appx-adapter': ['@galacean/appx-adapter/douyin'],
        'effects': ['@galacean/effects/douyin'],
        'plugin-spine': ['@galacean/effects-plugin-spine/douyin'],
        'plugin-model': ['@galacean/effects-plugin-model/douyin'],
      },
    },
    plugins,
  }
};
