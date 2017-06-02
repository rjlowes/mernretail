const gulp = require('gulp');
const clean = require('gulp-clean');


//gulp.task('clean:dev', ['clean:scripts:dev']);


gulp.task('clean:scripts:dev', (done) => 
	gulp.src('./public/scripts', {read: false})
			   .pipe(clean()))

gulp.task('clean:scripts:dev', (done) => 
	gulp.src('./public/scripts', {read: false})
			   .pipe(clean()))

gulp.task('clean:dev', (done) => 
	gulp.src('./public', {read: false})
			   .pipe(clean()))