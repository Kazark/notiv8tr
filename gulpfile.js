var gulp = require('gulp');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

gulp.task('api-specs', function() {
    /* TODO: start service */
    gulp.src('api_specs/api.spec.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('concat-specs', function() {
    gulp.src(['src/project.js', 'specs/intro.spec.js', 'specs/project.spec.js'])
        .pipe(concat('specs.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('specs', function() {
    gulp.src('build/specs.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['concat-specs', 'specs']);
