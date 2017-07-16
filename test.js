import test from 'ava'
import live from './lib'

test('exports a function', t => {
  t.is(typeof live, 'function')
})

test('returns an html string', async t => {
  const a = await live('# Hello')
  t.is(typeof a, 'string')
  console.log(a)
})
