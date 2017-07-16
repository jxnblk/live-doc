#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const meow = require('meow')
const ora = require('ora')
const notifier = require('update-notifier')
const render = require('..')
const pkg = require('../package.json')

notifier({ pkg }).notify()

const spinner = ora('converting markdown').start()

const cli = meow(`
  Usage
    $ doc <markdown-file>

  Options
    -d --out-dir    Output directory

    -c --config     Path to config file

`, {
  alias: {
    d: 'outDir',
    c: 'config'
  }
})

const [ file ] = cli.input
const opts = cli.flags
const src = fs.readFileSync(file, 'utf8')

const {
  outDir = ''
} = opts

const dirname = path.join(process.cwd(), outDir)

opts.config = opts.config
  ? path.join(process.cwd(), opts.config)
  : null

if (opts.config) {
  spinner.text = 'using custom config from ' + opts.config
}

const getHTML = async () => {
  const html = await render(src, opts)
  const filename = path.join(dirname, 'index.html')
  fs.writeFileSync(filename, html)
  spinner.succeed('file saved')
}

getHTML()

