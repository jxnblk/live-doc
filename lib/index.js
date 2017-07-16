const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const config = require('./config')
const createHTML = require('./html')

const mfs = new MemoryFS()

const compile = (source, options = {}) => {
  const CONFIG = options.config ? JSON.stringify(options.config) : null
  const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    MARKDOWN: JSON.stringify(source),
    CONFIG,
  })

  config.plugins.push(definePlugin)

  const compiler = webpack(config)

  compiler.outputFileSystem = mfs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        throw new Error(err)
        reject(err)
      }

      const output = mfs.readFileSync('/bundle.js', 'utf8')
      resolve(output)
    })
  })
}

module.exports = async (source, options) => {
  const bundle = await compile(source, options)

  const opts = options.config ? require(options.config) : null

  const html = createHTML(Object.assign({
    bundle
  }, opts))

  return html
}
