var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

// var concatCss = require('gulp-concat-css');

// gulp.task('default', function () {
//   return gulp.src('project/**/*.css')
//     .pipe(concatCss("styles/bundle.css"))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('css/'));
// });

gulp.task('default', function(){
  return gulp.src('./sass/**/*.{scss,sass}')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'));
});