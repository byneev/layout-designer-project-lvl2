var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var purge = require('gulp-css-purge');

gulp.task('sass', function () {
  return gulp.src('./src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(purge())
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', gulp.series('sass'));
});