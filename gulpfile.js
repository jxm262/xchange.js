var gulp   = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var istanbul = require('gulp-istanbul');


gulp.task('lint', function() {
    return gulp.src(['lib/**/*.js', 'src/config.js', 'test/node/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
    return gulp.src('./apis/**/**.js')
        // Right there
        .pipe(istanbul({includeUntested: true}))
        .on('finish', function () {
            gulp.src('./test/**/**.js')
                .pipe(mocha({reporter: 'spec'}))
                .pipe(istanbul.writeReports({
                    dir: './reports/unit-test-coverage',
                    reporters: [ 'lcov' ],
                    reportOpts: { dir: './reports/unit-test-coverage'}
                }));
        });
});