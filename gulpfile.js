var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');

var concatCss = require('gulp-concat-css');

gulp.task('default', function () {
  return gulp.src('project/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'));
});