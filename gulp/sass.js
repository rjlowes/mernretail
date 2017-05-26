const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass.dev', (done) => 
	gulp.src('./app/client/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/styles/')));


// gulp.task('sass.dist', (done) => {});


// gulp.task('sass.watch', (done) => 
// 	gulp.watch('client/src/sass/**/*.scss', ['sass.dev']));
