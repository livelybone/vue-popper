/* For build */
import fs from 'fs'
import path from 'path'
import { uglify } from 'rollup-plugin-uglify'

const baseConf = require('./rollup.config.base')

fs.copyFileSync(path.resolve(__dirname, './src/css/index.scss'), path.resolve(__dirname, './lib/css/index.scss'))
console.log('>> css file copy successful')

const conf = entry => Object.assign({}, baseConf, {
  input: entry.filename,
  output: entry.formats.map(format => ({
    file: `./lib/${format}/${entry.name}.js`,
    format,
    name: 'VuePopper',
  })),
  external: ['popper.js'],
  plugins: baseConf.plugins.concat([(entry.needUglify !== false && uglify())]),
})

export default [
  { name: 'index', filename: './src/components/Index.vue', formats: ['es'], needUglify: false },
  { name: 'index', filename: './src/components/Index.vue', formats: ['umd'] },
].map(conf)
