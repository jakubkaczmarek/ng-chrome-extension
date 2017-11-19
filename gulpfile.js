var gulp = require('gulp');
var ts = require('gulp-typescript');
var exec = require('child_process').exec;
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var tsify = require("tsify");
gulp.task('ng-build', function(cb) {
    console.log('running ng build...');
    exec('ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
        return true;
    });
});
gulp.task('content-script', function() {
    return browserify({
            basedir: '.',
            debug: true,
            entries: 'content-script/boot.ts'
        })
        .plugin(tsify)
        .bundle()
        .pipe(source('content-script.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['ng-build', 'content-script']);