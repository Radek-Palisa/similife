var gulp = require('gulp');
var sass = require("gulp-sass");
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(["./sass/**/*.scss", "./sass/**/*.sass"], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('./sass/style.scss')
  	.pipe(sass().on('error', function (err) {
            console.error('Error!', err.message);
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
});


/**
 * Compile with gulp-ruby-sass + source maps

gulp.task('sass', function () {

    return sass('./sass', {sourcemap: true})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write('./sass', {
            includeContent: false,
            sourceRoot: '/sass'
        }))
        .pipe(browserSync.stream({match: '**//*.css'}));
});
*/

/*
gulp.task('default', function() {
  // place code for your default task here
});
*/
gulp.task('default', ['serve']);