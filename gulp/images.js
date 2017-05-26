const gulp = require('gulp');


gulp.task('images.copy', () =>
    gulp.src('./app/client/images/**/*.*')
        .pipe(gulp.dest('./public/images')));
