# bem-pack

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Pack node-style source files from a stream of path's into a browser bundle with redefinition support.

__Note:__ This plugin is __highly__ sensitive to order, in which you call `add` method.

## Usage

```js
var bempack = require('bem-pack');
var pack = bempack();

pack.add('base/base.js');
    .add('main/base.js');
    .bundle(function (err, buf) {
        console.log(buf.toString());
    });
```

## API

### bem-pack([options])

Returns instance of [browserify](https://github.com/substack/node-browserify) with additional step added to `deps` pipeline.

#### options

All options are passed to [browserify constructor](https://github.com/substack/node-browserify#var-b--browserifyfiles-or-opts), except `ignoreMissing` is setted to true always.

##### naming
Type: `Function`

Function, that will generate some kind of export name for given path.
By default we split filename by `.` and take first part. For our usage cases it will contain BEM identificator.

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/bem-pack
[npm-image]: http://img.shields.io/npm/v/bem-pack.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/bem-pack
[travis-image]: http://img.shields.io/travis/floatdrop/bem-pack.svg?branch=master&style=flat
