var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('js', function (cb) {
  pump([
    gulp.src('js/*.js'),
    uglify(),
    gulp.dest('js/min')
  ], cb);
});

gulp.task('css', function(cb){
  pump([
    gulp.src('./sass/**/*.{scss,sass}'),
    sass(),
    cleanCSS(),
    gulp.dest('css/')
  ], cb);
});

gulp.task('default', ['css','js']);