var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var browserify = require('browserify');

module.exports = function (bemjson, fileName, options) {
    options = options || {};
    var b = browserify();

    function apply(obj, enc, cb) {
        var name = path.basename(obj.path).split('.')[0];
        b.add(obj.path, { expose: name });
        cb(null);
        //cb(new PluginError('gulp-bem-js-pack', 'Not implemented yet'));
    }

    function compile() {
        b.bundle(function (err, buf) {
            this.emit('data', buf);
            this.emit('end');
        }.bind(this));
    }

    var rs = through.obj(apply, compile);

    return rs;
};
