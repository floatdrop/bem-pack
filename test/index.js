/* global it */

var gulp = require('gulp');
var join = require('path').join;
var pack = require('../');

var oneFile         = join(__dirname, 'fixtures/one-file', '**', '*.js');
var twoSameFiles    = join(__dirname, 'fixtures/two-same-files', '**', '*.js');

it('should pack single module', function (done) {
    gulp.src(oneFile)
        .pipe(pack())
        .on('data', function (data) {
            console.log(data);
            done();
        });
});

it('should pack modules with same file name', function (done) {
    gulp.src(twoSameFiles)
        .pipe(pack())
        .on('data', function (data) {
            console.log(data);
            done();
        });
});
