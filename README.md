# gulp-angular-tpl2js

[![Build Status](https://img.shields.io/travis/scniro/gulp-angular-tpl2js.svg?style=flat-square)](https://travis-ci.org/scniro/gulp-angular-tpl2js)
[![NPM Version](https://img.shields.io/npm/v/gulp-angular-tpl2js.svg?style=flat-square)](https://www.npmjs.com/package/gulp-angular-tpl2js)
[![Dependency Status](https://img.shields.io/david/scniro/gulp-angular-tpl2js.svg?label=deps&style=flat-square)](https://david-dm.org/scniro/gulp-angular-tpl2js)
[![devDependency Status](https://img.shields.io/david/dev/scniro/gulp-angular-tpl2js.svg?label=devDeps&style=flat-square)](https://david-dm.org/scniro/gulp-angular-tpl2js#info=devDependencies)
[![Coverage](https://img.shields.io/coveralls/scniro/gulp-angular-tpl2js.svg?style=flat-square)](https://coveralls.io/github/scniro/gulp-angular-tpl2js)
[![Climate](https://img.shields.io/codeclimate/github/scniro/gulp-angular-tpl2js.svg?label=climate&style=flat-square)](https://codeclimate.com/github/scniro/gulp-angular-tpl2js)

## Install

```
npm install gulp-angular-tpl2js --save-dev
```

## API

### tpl2js([*config*])

```javascript
var gulp = require('gulp');
var tpl2js = require('gulp-angular-tpl2js');

gulp.task('inline', function() {
    return gulp.src('/js/directives/*.js')
        .pipe(tpl2js())
        .pipe(gulp.dest('/dest'));
});
```

#### config

`include` for retrieving [ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude) templates and `HTMLMinifier`, a relay for [html-minifier](https://www.npmjs.com/package/html-minifier) options

```javascript
// defaults
var config = {
    include: false,
    HTMLMinifier: {
        collapseWhitespace: true,
        removeComments: true
    }
}
```

***

```javascript
var gulp = require('gulp');
var tpl2js = require('gulp-angular-tpl2js');

gulp.task('inline', function() {
    return gulp.src('/js/directives/*.js')
        .pipe(tpl2js({include: true})) // ng-include parsed
        .pipe(gulp.dest('/dest'));
});
```

