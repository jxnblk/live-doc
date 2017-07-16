const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const config = require('./config')
const createHTML = require('./html')

const mfs = new MemoryFS()

const compile = source => {
  const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    MARKDOWN: JSON.stringify(source)
  })

  config.plugins.push(definePlugin)

  const compiler = webpack(config)

  compiler.outputFileSystem = mfs

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)
      console.log('compiled')
      const output = mfs.readFileSync('/bundle.js', 'utf8')
      resolve(output)
    })
  })
}

module.exports = async source => {
  const bundle = await compile(source)
  console.log('output', bundle.length, 'bytes')

  const html = createHTML({
    bundle
  })

  return html
}
