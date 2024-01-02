import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import eslint from '@rollup/plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import terser from '@rollup/plugin-terser'
import strip from '@rollup/plugin-strip'
import { isDev } from './utils'
import pkg from '../package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.umd,
        format: 'umd',
        sourcemap: isDev,
        name: 'Utils'
      }
    ],
    plugins: [
      eslint({
        throwOnError: false,
        throwOnWarning: true,
        include: ['src/**/*.ts']
      }),
      postcss(),
      commonjs({ extensions: ['.js', '.ts'] }),
      typescript(),
      !isDev && terser(),
      !isDev && strip({
        include: ['src/**/*.(js|ts)'],
      })
    ]
  }
]
