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

export default [
  'ap',
  'mp'
].map(platform => {
  return {
    input: [`./libs/${platform}-weapp-galacean-effects.ts`],
    output: {
      format: 'cjs',
      dir: 'libs/',
    },
    plugins,
  };
});