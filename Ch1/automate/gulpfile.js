'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
 return gulp.src('sass/*.scss')
  .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
  .pipe(sourcemaps.init('/maps'))
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./css'))
  .on('finish', () => console.log('SASS invoked and finished successfully'));
});      

gulp.task('default', function () {
  gulp.watch('sass/*.scss', gulp.series('sass'));
});
