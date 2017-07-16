
# live-doc

Convert markdown to live React demos <http://jxnblk.com/live-doc>

Built with:
- [react-markdown][0]
- [React Live][1]
- [Rebass][2]
- [styled-components][3]


## Getting Started

```sh
npm i live-doc
```

Convert a markdown file to a React app and save as `index.html`:

```sh
doc README.md
```

## Live Code Example

By using the `.jsx` language attribute at the beginning of a code block,
live-doc will convert the example into a live-editable example using [React Live][1].

```.jsx
<div>
  <Heading color='tomato'>
    Hello! Edit me
  </Heading>
  <button
    onClick={e => {
      alert('Hello')
    }}
    children='Beep'
  />
</div>
```

In this example, the [Rebass][2] `Heading` component has been added to the scope in the `docs/config.js` file,
making it available to the [React Live][1] preview.


## CLI Options

```
-d --out-dir    Output directory
-c --config     Path to config file
```


## Configuration

To customize the output React app, create a config file that exports an object.

```js
// config.js
module.exports = {
  // Scope for react-live previews
  scope: {
    foo: 'Hello'
  },
  title: 'Page Title',
  css: 'body { color: tomato }',
  script: 'console.log("Hello");',
  // Meta tags
  meta: [
    {
      name: 'og:image',
      content: 'kitten.jpg'
    }
  ]
}
```

Then pass the file with the `--config` flag to the CLI.

```sh
doc README.md --config config.js
```

---

[GitHub](https://github.com/jxnblk/live-doc)
[Made by Jxnblk](http://jxnblk.com)

MIT License

[0]: https://github.com/rexxars/react-markdown
[1]: https://github.com/FormidableLabs/react-live
[2]: https://github.com/jxnblk/rebass
[3]: https://github.com/styled-components/styled-components
