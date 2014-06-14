var gulp = require('gulp');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');

var files = {
    src: {
        api: ['src/api/intro.js.frag', 'src/api/*.js', 'src/api/outro.js.frag'],
        domain: ['src/domain/intro.js.frag', 'src/domain/*.js', 'src/domain/outro.js.frag'],
        main: 'src/notiv8tr.js',
    },
    specs: {
        unittests: ['specs/specs-intro.js', 'specs/*/*.spec.js'],
        integration: ['api_specs/api.spec.js']
    }
};
files.src.testable = files.src.api.concat(files.src.domain);
files.src.all = files.src.testable.concat(files.src.main);
files.specs.withSrc = files.src.testable.concat(files.specs.unittests);

gulp.task('api-specs', ['concat-src'], function() {
    gulp.src(files.specs.integration)
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('concat-src', function() {
    return gulp.src(files.src.all)
        .pipe(concat('notiv8tr.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('concat-specs', function() {
    return gulp.src(files.specs.withSrc)
        .pipe(concat('specs.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('specs', ['concat-specs'], function() {
    return gulp.src('build/specs.js')
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('dev', function() {
    return gulp.watch(files.specs.withSrc, ['default']);
});

gulp.task('default', ['specs']);
