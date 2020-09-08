import typescript from '@rollup/plugin-typescript'
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bit-crusher.esm.js',
      format: 'es'
    },
    {
      file: 'dist/bit-crusher.cjs.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/bit-crusher.min.js',
      format: 'iife',
      name: 'bitCrusher'
    }
  ],
  plugins: [typescript(), terser()]
}
