import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        exports: 'named',
        format: 'esm',
        dir: 'dist/esm',
        sourcemap: true
      }
    ],
    preserveModules: true
  },
  {
    input: 'src/index.js',
    output: [
      {
        exports: 'named',
        name: 'wrap',
        format: 'umd',
        file: 'dist/vue-wc-wrapper.umd.js',
        sourcemap: true
      },
      {
        format: 'iife',
        name: 'wrapVueWebComponent',
        file: 'dist/vue-wc-wrapper.global.js',
        sourcemap: true
      }
    ],
    plugins: [
      babel(),
      terser({
        output: {
          ecma: 5
        }
      })
    ]
  }
]
