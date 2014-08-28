/* global describe, it */
var gulp = require('gulp');
var bempack = require('../');
var join = require('path').join;

require('should');
var oneFile = join(__dirname, 'fixtures/one.js');

describe('gulp-bem-pack', function() {
    describe('bempack()', function() {
        it('should bundle one file', function(done) {
            gulp.src(oneFile)
                .pipe(bempack('test.js'))
                .on('data', function (obj) {
                    var f = new Function('return ' + obj.contents.toString())();
                    f(1).should.eql('Hello!');
                    done();
                })
                .on('error', done);
        });

        it('should not fail if no files were input', function(done) {
            var stream = bempack('test.js');
            stream.end();
            done();
        });
    });
});
