var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var purge = require('gulp-css-purge');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("src/scss/app.scss")
    .pipe(sass())
    .pipe(purge())
    .pipe(gulp.dest("src/css/"))
    .pipe(browserSync.stream());
});
// Static Server + watching scss/html files
gulp.task('serve', function () {

  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/scss/**/*.scss", gulp.series('sass'));
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));