var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
    gulp.src('api_specs/api.spec.js')
        .pipe(mocha({reporter: 'spec'}));
});
