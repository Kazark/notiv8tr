var gulp = require('gulp');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

var files = {
    lib: {
        src: ['src/lib/*.js'],
        specs: ['specs/specs-intro.js', 'specs/*.spec.js'],
    },
    api: {
        specs: 'api_specs/api.spec.js'
    }
};
files.lib.all = files.lib.src.concat(files.lib.specs);

gulp.task('api-specs', function() {
    /* TODO: start service */
    gulp.src(files.api.specs)
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('concat-specs', function() {
    return gulp.src(files.lib.all)
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
