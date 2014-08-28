# bem-pack

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

Pack node-style source files from a stream of path's into a browser bundle with require layering support.

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

## Require layering

This feature is really handy, when you want to achieve flexible extension of javascript files, that not exported in modules. In normal world to extend some `base` module you possible create `myBase` module and require `base` constructor from `myBase` constructor:

```js
// base.js
module.exports = 'base';

// myBase.js
module.exports = require('./base.js') + ' extended!';
```

But in BEM world you have same filename for javascript file in different layers of definition (or directoires):

```js
// base/base.js
module.exports = 'base';

// site/base.js
module.exports = require('./base.js') + ' extended!';
```

As you can see, snippet above will not work properly, because you should fix the path of the require call. Ofter there is no way to do this, because order of layers can change eventually. So we come up with this idea.

Every bundled file will "export" module with it BEM identifier. For example `base__elem.js` will export `base__elem` module, that can be required in next bundled javascript file:

```js
// base/base.js
module.exports = 'base';

// site/base.js
module.exports = require('base') + ' extended!';
```

This is not stable way of doing layered requires, but it seems nice and simple to implement.

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

[depstat-url]: https://david-dm.org/floatdrop/bem-pack
[depstat-image]: http://img.shields.io/david/floatdrop/bem-pack.svg?style=flat

[coveralls-url]: https://coveralls.io/r/floatdrop/bem-pack
[coveralls-image]: http://img.shields.io/coveralls/floatdrop/bem-pack.svg?style=flat
