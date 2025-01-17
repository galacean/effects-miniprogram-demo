import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const plugins = [
  typescript(),
  resolve(),
  commonjs({
    ignoreGlobal: true,
  }),
  terser(),
];

export default [
  'alipay',
  'weapp',
  'douyin',
].map(platform => {
  return {
    input: [`./libs/mp-${platform}-galacean-effects.ts`],
    output: {
      format: 'cjs',
      dir: 'libs/',
    },
    plugins,
  };
});