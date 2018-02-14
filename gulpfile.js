'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('check', function(){
    return gulp.src(['./app/*.js', './client/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});