# gulp-bem-pack

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Gulp wrapper of [bem-pack](https://github.com/floatdrop/bem-pack).

## Usage

```js
var gulp = require('gulp');
var bempack = require('gulp-bem-pack');

gulp.src(['base/*.js', 'main/*.js'])
    .pipe(bempack('index.js'))
    .pipe(gulp.dest('dist'));
```

## API

### gulp-bem-pack(filename, [options])

#### filename
Type: `String`  

File name of generated JavaScript file.

#### options
Type: `Object`  

Object with options, that will be directly passed to [bem-pack](https://github.com/floatdrop/bem-pack).

## License

MIT (c) 2014 Vsevolod Strukchinsky

[npm-url]: https://npmjs.org/package/gulp-bem-pack
[npm-image]: http://img.shields.io/npm/v/gulp-bem-pack.svg?style=flat

[travis-url]: http://travis-ci.org/floatdrop/gulp-bem-pack
[travis-image]: http://img.shields.io/travis/floatdrop/gulp-bem-pack.svg?branch=master&style=flat
