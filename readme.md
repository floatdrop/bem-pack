# gulp-bem-js-pack ![experimental](http://img.shields.io/badge/status-experimental-red.svg?style=flat)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Packing CommonJS modules with respect of levels of definition.

If you pass file with same ID twice to module, it will require first module by it ID from second.

```js
// base/first.js (with ID `first`)
module.exports = 'BASE';

// first.js (with ID `first`)
var First = require('first'); // returns 'BASE'
module.exports = First + '!';
```

## Usage

```js
var gulp = require('gulp');
var bempack = require('gulp-bem-js-pack');

gulp.src(['base/*.js', 'main/*.js'])
    .pipe(bempack('index.js'))
    .pipe(gulp.dest('dist'));
```


## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/gulp-bem-js-pack
[npm-image]: http://img.shields.io/npm/v/gulp-bem-js-pack.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/gulp-bem-js-pack
[travis-image]: http://img.shields.io/travis/floatdrop/gulp-bem-js-pack.svg?branch=master&style=flat
