var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var browserify = require('browserify');

module.exports = function (bemjson, fileName, options) {
    options = options || {};
    var b = browserify({ignoreMissing: true});

    var depses = {};
    var depsFiller = through.obj(function (row, enc, next) {
        Object.keys(row.deps).forEach(function (key) {
            if (row.deps[key] === undefined) {
                row.deps[key] = depses[key];
            }
        });
        var name = path.basename(row.file).split('.')[0];
        depses[name] = row.file;
        next(null, row);
    });
    b.pipeline.get('deps').push(depsFiller);

    function apply(obj, enc, cb) {
        b.add(obj.path);
        cb(null);
    }

    function compile() {
        b.bundle(function (err, buf) {
            if (err) { return this.emit('error', new PluginError('gulp-bem-js-pack', err)); }
            this.emit('data', buf);
            this.emit('end');
        }.bind(this));
    }

    var rs = through.obj(apply, compile);

    return rs;
};
