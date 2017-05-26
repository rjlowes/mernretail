const gulp = require('gulp');
const clean = require('gulp-clean');


gulp.task('clean.all.dev', ['clean.scripts.dev']);


gulp.task('clean.scripts.dev', (done) => 
	gulp.src('./client/.tmp/scripts', {read: false})
			   .pipe(clean()))