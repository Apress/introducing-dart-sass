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
  .pipe(gulp.dest('./css'));
});      

gulp.task('default', function () {
  gulp.watch('sass/*.scss', ['sass'])
  .on('change', function(evt) {
    console.log(
      '\n[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + 
      ' was ' + evt.type + ', compiling...'
    );
  });
});


	
