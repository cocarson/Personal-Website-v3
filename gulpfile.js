'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass:watch'], function () {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });

  gulp.watch('./public/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
