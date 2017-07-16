module.exports = ({
  bundle,
  title = 'live-doc',
  css = '',
  meta = [],
  script
}) => {
  return (`<!DOCTYPE html>
<meta charset='utf-8'>
<title>${title}</title>
<style>*{box-sizing:border-box}body{margin:0}${css}</style>
<meta name='generator' content='live-doc'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
${metaTags(meta)}<div id=app></div>
<script>${bundle}</script>${scriptTag(script)}`)
}

const metaTags = meta => meta.map(({ name, content }) => (
  `<meta name='${name}' content='${content}'>`
)).join('\n')

const scriptTag = script => script
  ? `\n<script>${script}</script>`
  : ''
