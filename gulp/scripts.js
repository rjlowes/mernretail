const gulp = require('gulp');
const browserify = require("browserify");
const source = require('vinyl-source-stream');


// Need to make it build ready and copy to dist and remove debug
gulp.task('scripts:dev', () => 
    browserify("./app/client/scripts/main.js", {debug: true})
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source('main.build.js'))
        .pipe(gulp.dest("./public/scripts")));
