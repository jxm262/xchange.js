import gulp from 'gulp'
import mocha from 'gulp-mocha'
import jshint from 'gulp-jshint'
import istanbul from 'gulp-istanbul'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'


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

gulp.task('build', function () {
    return gulp.src('./lib/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
