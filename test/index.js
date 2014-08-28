/* global it */

var join = require('path').join;
var bempack = require('../');

var oneFile         = join(__dirname, 'fixtures/one-file/index.js');
var twoSameFiles    = join(__dirname, 'fixtures/two-same-files');

require('should');

it('should pack single module', function (done) {
    var pack = bempack();
    pack.add(oneFile)
        .bundle(function (err, buf) {
            if (err) { return done(err); }
            var f = new Function('return ' + buf.toString())();
            f(1).should.be.eql('Hello!');
            done();
        });
});

it('should pack modules with same file name', function (done) {
    var pack = bempack();
    pack.add(join(twoSameFiles, 'base/base.js'))
        .add(join(twoSameFiles, 'main/base.js'))
        .bundle(function (err, buf) {
            if (err) { return done(err); }
            var f = new Function('return ' + buf.toString())();
            f(2).should.be.eql('main is overriding base');
            done();
        });
});
