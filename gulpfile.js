const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('test', function () {
  return gulp.src('test/**/*.test.js')
    .pipe(jasmine());
});