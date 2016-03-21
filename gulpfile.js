var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('test', function(){
    return gulp.src('test/test.js')
        .pipe(mocha({ reporter: 'list' }))
        .once('end', function(){
            process.exit();
        })
        .on('error', gutil.log);
});