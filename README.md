# medium-editor-autoanglequotes

[![npm version](https://badge.fury.io/js/medium-editor-autoanglequotes.svg)](https://www.npmjs.com/package/medium-editor-autoanglequotes)

> An extension for [Medium Editor](https://github.com/yabwe/medium-editor) which auto adds horizontal rules.

## How to install

```bash
$ npm install --save medium-editor-autoanglequotes
```

## Use the extension

```js
const AutoAngularQuotes = require('medium-editor-autoanglequotes');

var editor = new MediumEditor('.editable', {
    extensions: {
        'autoanglequotes': new AutoAngularQuotes()
    }
});
```

Now, type `<<` or `>>` followed by something else: `«` or `»` will appear!

## License

Copyright (c) 2017 Emanuele Bertoldi

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
