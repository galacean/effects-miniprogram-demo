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
    'gyroscope',
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
        'appx-adapter': ['@galacean/appx-adapter/alipay'],
        'effects': ['@galacean/effects/alipay'],
        'plugin-spine': ['@galacean/effects-plugin-spine/alipay'],
        'plugin-model': ['@galacean/effects-plugin-model/alipay'],
        'plugin-orientation-transformer': ['@galacean/effects-plugin-orientation-transformer/alipay'],
      },
    },
    plugins,
  }
};
