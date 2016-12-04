var gulp = require('gulp');
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var beep = require('beepbeep');
var browserSync = require('browser-sync').create();

// https://github.com/floatdrop/gulp-plumber/issues/38#issuecomment-140677501
var onError = function(err) {   
    notify.onError({
      title:    "Gulp error in " + err.plugin,
      message:  err.toString()
    })(err); 
    console.log(err.toString());
    //beep(3);
    this.emit('end');
};

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
  	.pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
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