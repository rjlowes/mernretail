const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');

gulp.task('scripts:dev', () => {
	return gulp.src(['./app/client/scripts/main.js'])
		.pipe(webpackStream(require('../webpack.config.local'), webpack))
		.pipe(gulp.dest('./public'));
});



// const gulp = require('gulp');
// const browserify = require("browserify");
// const source = require('vinyl-source-stream');


// // Need to make it build ready and copy to dist and remove debug
// gulp.task('scripts:dev', () => 
//     browserify("./app/client/scripts/main.js", {debug: true})
//         .transform("babelify", {presets: ["es2015", "react"]})
//         .bundle()
//         .on('error', function (err) {
//             console.log(err.toString());
//             this.emit('end');
//         })
//         .pipe(source('main.build.js'))
//         .pipe(gulp.dest("./public/scripts")));
