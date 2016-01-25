'use strict';

var gulp        = require('gulp');
var typescript  = require('gulp-typescript');
var sourcemaps  = require('gulp-sourcemaps');
var tslint      = require('gulp-tslint');
var cache       = require('gulp-cached');
var browserSync = require('browser-sync');
var tsProject   = typescript.createProject('../tsconfig.json');
var protractor  = require('gulp-protractor');

//compile files
gulp.task('typescript-e2e', function () {
  return gulp.src('tests/*.ts')
    .pipe(cache('typescript'))
    .pipe(sourcemaps.init())
    .pipe(tslint())
    .pipe(tslint.report('prose', {emitError: false}))
    .pipe(typescript(tsProject))
    //.pipe(sourcemaps.write('./maps', {includeContent: false, sourceRoot: '/app/src'}))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);
// start selenium standalone
gulp.task('webdriver-standalone', protractor.webdriver_standalone);

function runProtractor(done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3], params[4]] : [];

  gulp.src('dist/**/*.spec.js')
    .pipe(protractor.protractor({
      configFile: '../protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('e2e', ['typescript-e2e', 'webdriver-update'], runProtractor);
