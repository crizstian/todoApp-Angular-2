'use strict';
const gulp        = require('gulp');
const del         = require('del');
const typescript  = require('gulp-typescript');
const tscConfig   = require('./tsconfig.json');
const sourcemaps  = require('gulp-sourcemaps');
const tslint      = require('gulp-tslint');
const browserSync = require('browser-sync');
const reload      = browserSync.reload;
const tsconfig    = require('tsconfig-glob');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', '!app/**/*.ts'], { base : './' })
             .pipe(gulp.dest('dist'))
});

gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
          'node_modules/angular2/bundles/angular2-polyfills.js',
          'node_modules/systemjs/dist/system.src.js',
          'node_modules/rxjs/bundles/Rx.js',
          'node_modules/angular2/bundles/angular2.dev.js',
          'node_modules/angular2/bundles/router.dev.js',
          'node_modules/immutable/dist/immutable.js',
          'node_modules/angular2/bundles/http.dev.js',
          'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
          'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
          'node_modules/jasmine-core/lib/jasmine-core/boot.js',
          'node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
          'node_modules/immutable/dist/immutable.js'
        ])
        .pipe(gulp.dest('dist/lib'))
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp.src('app/**/*.ts')
             .pipe(sourcemaps.init())
             .pipe(typescript(tscConfig.compilerOptions))
             .pipe(sourcemaps.write('.'))
             .pipe(gulp.dest('dist/app'));
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch(['app/**/*.*', 'index.html', 'styles.css'], ['buildAndReload']);
});

gulp.task('build', [ 'compile', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['serve']);
