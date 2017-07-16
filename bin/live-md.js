#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const meow = require('meow')
const notifier = require('update-notifier')
const render = require('..')
const pkg = require('../package.json')

notifier({ pkg }).notify()

const opts = {
  alias: {
    d: 'outDir',
    c: 'config'
  }
}

const cli = meow(`
  Usage
    $ live-md <markdown-file>

  Options
    -d --out-dir    Output directory

    -c --config     Path to config file

`, opts)

const [ file ] = cli.input
const src = fs.readFileSync(file, 'utf8')

const {
  outDir = ''
} = cli.flags

const dirname = path.join(process.cwd(), outDir)

const getHTML = async () => {
  const html = await render(src)
  const filename = path.join(dirname, 'index.html')
  fs.writeFileSync(filename, html)
  console.log('saved')
}

getHTML()

