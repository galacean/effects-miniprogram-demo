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
  return [{
    input: ['./libs/mp-weapp-galacean-effects.ts'],
    output: {
      format: 'cjs',
      dir: 'libs/',
    },
    plugins,
  }, {
    input: ['./miniprogram/pages/index/index.ts'],
    output: {
      format: 'cjs',
      dir: 'miniprogram/',
      entryFileNames: 'pages/[name]/[name].js',
      chunkFileNames: 'chunks/[name].js',
    },
    plugins,
  }];
}