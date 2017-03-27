import gulp from 'gulp'
import mocha from 'gulp-mocha'
import jshint from 'gulp-jshint'
import istanbul from 'gulp-istanbul'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'
import eslint from 'gulp-eslint'


gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['lib/**/*.js', 'src/config.js', 'test/node/**/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
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
