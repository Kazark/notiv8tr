var gulp = require('gulp');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

var paths = ['src/project.js', 'specs/intro.spec.js', 'specs/project.spec.js'];

gulp.task('api-specs', function() {
    /* TODO: start service */
    return gulp.src('api_specs/api.spec.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('concat-specs', function() {
    return gulp.src(paths)
        .pipe(concat('specs.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('specs', ['concat-specs'], function() {
    return gulp.src('build/specs.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('dev', function() {
    return gulp.watch(paths, ['default']);
});

gulp.task('default', ['specs']);
