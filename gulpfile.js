var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var compass = require('gulp-compass');

gulp.task('scripts', function() {
  gulp.src('assets/scripts/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('compass', function() {
  gulp.src('assets/styles/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './assets/styles',
      sass: './assets/styles'
    }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scripts/*.js', ['scripts']);
  gulp.watch('assets/styles/*.scss', ['compass']);
});

gulp.task('default', ['scripts', 'compass', 'watch']);
