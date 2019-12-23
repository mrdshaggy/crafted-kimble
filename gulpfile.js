'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('./sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('html', function (){
  gulp.src('./*.html')
    .pipe(connect.reload());
})

gulp.task('js', function (){
  gulp.src('./js/*.js')
    .pipe(connect.reload());
})

gulp.task('watch', function(){
  gulp.watch('sass/*/*.scss',['sass']);
  gulp.watch('*.html',['html']);
  gulp.watch('js/*.js',['js']);
});

gulp.task('default', ['connect', 'html', 'js', 'sass', 'watch']);