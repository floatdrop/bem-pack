/* global it */

var gulp = require('gulp');
var join = require('path').join;
var pack = require('../');

var oneFile         = join(__dirname, 'fixtures/one-file', '**', '*.js');
var twoSameFiles    = join(__dirname, 'fixtures/two-same-files');

require('should');

it('should pack single module', function (done) {
    gulp.src(oneFile)
        .pipe(pack())
        .on('data', function (data) {
            var f = new Function('return ' + data.toString())();
            f(1).should.be.eql('Hello!');
            done();
        });
});

it('should pack modules with same file name', function (done) {
    gulp.src([join(twoSameFiles, 'base/base.js'), join(twoSameFiles, 'main/base.js')])
        .pipe(pack())
        .on('data', function (data) {
            var f = new Function('return ' + data.toString())();
            f(2).should.be.eql('main is overriding base');
            done();
        });
});
