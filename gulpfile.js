var gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssmin = require('gulp-cssmin'),
  minifyCSS = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require("gulp-rename"),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify'),
  stripDebug = require('gulp-strip-debug'),
  notify = require('gulp-notify'),
  clean = require('gulp-clean');

gulp.task('default', ['clean', 'build', 'watch']);

gulp.task('build', ['css', 'lint', 'js']);

gulp.task('clean', function(){
  gulp.src(['dist'], {read: false})
    .pipe(clean());
})

gulp.task('css', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(minifyCSS({
    keepSpecialComments: '*'
  }))
  .pipe(rename('style.css'))
  //.pipe(gulp.dest('./dist/css'))
  .pipe(gulp.dest('./'))
  .pipe(notify({ message: 'css task complete' }));
});

gulp.task('js', function() {
  gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'js task complete' }));
});

gulp.task('lint', function() {
  gulp.src(['./js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(notify({ message: 'lint task complete' }));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['css']);
  gulp.watch('js/*.js', ['js']);
});
