var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

module.exports = function (bemjson, fileName, options) {
    options = options || {};

    function apply(obj, enc, cb) {
        cb(new PluginError('gulp-bem-js-pack', 'Not implemented yet'));
    }

    function compile() {
        this.emit('data', 'wow!');
        this.emit('end');
    }

    var rs = through.obj(apply, compile);

    return rs;
};
