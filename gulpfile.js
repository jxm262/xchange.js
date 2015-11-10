var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var istanbul = require('gulp-istanbul');


gulp.task('lint', function() {
    return gulp.src(['lib/**/*.js', 'src/config.js', 'test/node/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});