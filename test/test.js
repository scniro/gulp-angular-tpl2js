var gulp = require('gulp');
var chai = require('chai');
var tpl2js = require('..');
var expect = chai.expect;

chai.should();

String.prototype.min = function () {
    return this.toString().replace(/ /g, '').replace(/(\r\n|\n|\r)/gm, '');
}

describe('gulp-angular-tpl2js: init', function () {

    it('should return the gulp-angular-tpl2js object: required export', function () {
        expect(tpl2js).to.be.function;
    });
});

describe('gulp-angular-tpl2js: base functionality', function () {

    it('should allow the file through', function (done) {
        var i = 0;

        gulp.src('test/fixtures/js/directive.js')
            .pipe(tpl2js())
            .on('data', function (file) {
                i += 1;
            })
            .once('end', function () {
                i.should.equal(1);
                done();
            });
    });

    it('should produce the expected file', function (done) {
        var expected = 'angular.module(\'mod\').directive(\'dir\', function () {' +
            'return {' +
            'scope: {},' +
            'template: \'<span>basic {{ stuff }}</span>\',' +
            'link: function (scope, elem, attrs) {' +
            '}' +
            '}' +
            '});';

        var actual;

        gulp.src('test/fixtures/js/directive.js')
            .pipe(tpl2js())
            .on('data', function (file) {
                actual = file.contents.toString();
            })
            .once('end', function () {
                expect(actual.min()).to.equal(expected.min());
                done();
            });
    });
});