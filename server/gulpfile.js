'use strict';
const gulp       = require('gulp');
const nodemon    = require('gulp-nodemon');
const watch      = require('gulp-watch');
const eslint     = require('gulp-eslint');
const livereload = require('gulp-livereload');

//register nodemon task
gulp.task('nodemon', function () {
  nodemon({ script: './api/server.js', env: { 'NODE_ENV': 'development' }})
    .on('restart');
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    let server = livereload();
    gulp.src(['*.js','./**/*.js'], { read: true })
        .pipe(watch({ emit: 'all' }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());

    gulp.watch(['*.js','./**/*.js']).on('change', function(file) {
      server.changed(file.path);
    });
});

//lint js files
gulp.task('lint', function() {
    gulp.src(['*.js','./**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint','nodemon', 'watch']);
