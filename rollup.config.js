import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import styles from 'rollup-plugin-styles'

const dev = process.env.ROLLUP_WATCH || true

export default [
  {
    input: './src/main.js',
    output: {
      file: './build/cms-front.js',
      format: 'iife',
      name: 'CMSFront',
      plugins: [
        dev && terser()
      ]
    },
    plugins: [
      dev && serve('build'),
      dev && livereload(),
      resolve(),
      commonjs(),
      styles()
    ]
  }
]
