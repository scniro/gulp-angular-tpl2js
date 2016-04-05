var objectAssign = require('object-assign');
var path = require('path');
var PluginError = require('gulp-util').PluginError;
var Transform = require('readable-stream/transform');
var VinylBufferStream = require('vinyl-bufferstream');
var tpl2js = require('angular-tpl2js');

module.exports = function gulpAngularTpl2js(options) {

    options = options || {};

    return new Transform({
        objectMode: true,
        transform: function modifyContents(file, enc, cb) {

            var self = this;

            var run = new VinylBufferStream(function (buf, done) {
                var fileOptions = objectAssign({target: file.path, gulp: true}, options);

                if (fileOptions.relativeTo === undefined && (fileOptions.root || file.path)) {
                    fileOptions.relativeTo = path.dirname(path.resolve(options.root || file.path));
                }

                tpl2js.inline(buf, fileOptions || {}, function (err, result) {
                    done(null, new Buffer(result));
                }, function (err) {
                    done(err)
                });
            });

            run(file, function (err, contents) {

                if (err) {
                    self.emit('error', new PluginError('gulp-angular-tpl2js', err, {fileName: file.path}));
                } else {
                    file.contents = contents;
                    self.push(file);
                }
                cb();
            });
        }
    });
};