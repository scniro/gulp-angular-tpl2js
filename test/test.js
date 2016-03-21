var gulp = require('gulp');
var chai = require('chai');
var tpl2js = require('..');

chai.should();

describe('gulp-angular-tpl2js: base functionality', function () {

    it('should allow the file through', function (done) {
        var i = 0;

        gulp.src('fixtures/js/directive.js')
            .pipe(tpl2js())
            .pipe(gulp.dest('out'))
            .on('data', function (file) {
                i += 1;
            })
            .once('end', function () {
                i.should.equal(1);
                done();
            });
    });
});