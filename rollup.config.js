import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const plugins = [
  typescript(),
  resolve(),
  commonjs({
    ignoreGlobal: true,
  }),
];
const platform = 'alipay';

export default () => {
  const input = {};
  const dependencies = Object.keys(pkg.dependencies);
  const manualChunks = [];

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
    'preload',
  ].forEach(name => {
    input[name] = `./miniprogram/pages/${name}/index.ts`;
  });

  dependencies.forEach(name => {
    const reg = /^(?:@[^/]+\/)?([^/]+)/i;
    const key = name.match(reg)[1];
    const value = [name.indexOf('@galacean') === 0 ? `${name}/${platform}` : name];

    manualChunks[key] = value;
  });

  return {
    input,
    output: {
      format: 'cjs',
      dir: 'miniprogram/',
      entryFileNames: 'pages/[name]/index.js',
      chunkFileNames: 'chunks/[name].js',
      manualChunks,
    },
    plugins,
  }
};
