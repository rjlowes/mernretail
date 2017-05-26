// https://www.timroes.de/2015/07/29/using-ecmascript-6-es6-with-angularjs-1-x/
// https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate/blob/master/package.json
'use strict';

const gulp = require('gulp');
const rd = require('require-dir');
const runSequence = require('run-sequence');

rd('./gulp');

gulp.task('default', () =>
    runSequence('sass.dev', 'scripts:dev', 'html:dev', 'fonts:copy', 'images.copy', 'server', 'watch'));



// Run the project tests
gulp.task('test:server', (done) => runSequence('env:test', 'mocha', done));
