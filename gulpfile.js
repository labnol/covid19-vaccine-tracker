var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var replace = require('gulp-replace');
var rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp
    .src('./build/index.html')
    .pipe(replace(/(\w+)="\/static/g, 'inline $1="/static'))
    .pipe(inlinesource())
    .pipe(rename('app.html'))
    .pipe(gulp.dest('./gas/src'));
});
