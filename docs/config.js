const { Heading } = require('rebass')

module.exports = {
  title: 'Live Doc',
  scope: {
    Heading
  },
  meta: [
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@jxnblk' },
    { name: 'twitter:title', content: 'Live Doc' },
    { name: 'twitter:description', content: 'Convert markdown to live React demos' },
    { name: 'twitter:image', content: 'http://i.imgur.com/vqKCbnh.jpg' },
  ],
  script: `window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));`
}
