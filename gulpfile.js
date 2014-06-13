var gulp = require('gulp');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

var files = {
    api: {
        src: ['src/api/intro.js.frag', 'src/api/*.js', 'src/api/outro.js.frag'],
        specs: ['specs/specs-intro.js', 'specs/*.spec.js'],
    },
    service: {
        src: 'src/notiv8tr.js',
        specs: 'api_specs/api.spec.js'
    }
};

gulp.task('api-specs', ['concat-src'], function() {
    gulp.src(files.service.specs)
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('concat-src', function() {
    return gulp.src(files.api.src.concat(files.service.src))
        .pipe(concat('notiv8tr.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('concat-specs', function() {
    return gulp.src(files.api.src.concat(files.api.specs))
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
