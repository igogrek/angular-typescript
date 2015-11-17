'use strict';

var browserify    = require('browserify');
var del           = require('del');
var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var CacheBuster   = require('gulp-cachebust');
var gulpif        = require('gulp-if');
var minifyCss     = require('gulp-minify-css');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var plumber       = require('gulp-plumber');
var rename        = require("gulp-rename");
var uglify        = require('gulp-uglify');
var runSequence   = require('run-sequence');
var tsify         = require('tsify');
var buffer        = require('vinyl-buffer');
var source        = require('vinyl-source-stream');
var watchify      = require('watchify');
var argv          = require('yargs').argv;

var cachebust = new CacheBuster();
var production = argv.production;

// Modules for webserver and livereload
var express = require('express'),
  refresh = require('gulp-livereload'),
  livereload = require('connect-livereload'),
  livereloadport = 35729,
  serverport = 5000;
// Set up an express server (not starting it yet)
var server = express();
// Add live reload
server.use(livereload({ port: livereloadport }));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist' });
});

var build = false;
// Default task - build and watch
gulp.task('default', function (done) {
  return runSequence('clean', ['views', 'fonts', 'styles', 'browserify'], 'inject', 'watch', done);
});
// Build only task
gulp.task('build', function (done) {
  build = true;
  return runSequence('clean', ['views', 'fonts', 'styles', 'browserify'], 'inject', done);
});
// Clean dist folder task
gulp.task('clean', function (cb) {
  return del(['dist/js', 'dist/css', 'dist/views'], cb);
});
// Copy angular views task
gulp.task('views', function () {
  return gulp.src('app/scripts/angular-app/**/*.html')
    .pipe(gulp.dest('dist/views/'));
});
// Copy fonts task
gulp.task('fonts', function () {
  return gulp.src('app/fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
});
// Prepare styles task
gulp.task('styles', function () {
  return gulp.src('app/styles/master.scss')
    .pipe(plumber())
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(sass()) 
    .pipe(autoprefixer())
    // Imports are inlined by gulp-minify-css
    .pipe(minifyCss())
    .pipe(gulpif(!production, sourcemaps.write()))
    .pipe(rename('all.css'))
    .pipe(gulpif(production, cachebust.resources()))
    .pipe(gulp.dest('dist/css/'));
});
// Bundle JS via browserify task
gulp.task('browserify', function () {
  var b = browserify({
    entries: 'app/scripts/angular-app/app.ts',
    debug: !production,
    detectGlobals: false,
    noParse: ['angular'],
    // watchify mandatory
    cache: {},
    packageCache: {}
  });
  if (!build)
    b = watchify(b, { delay: 0 });
  b.plugin(tsify, { noImplicitAny: true });
  b.on('update', function () {
    browserifyBundle(b);
  });
  return browserifyBundle(b);
});

function browserifyBundle(b) {
  return b.bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(production, cachebust.resources()))
    .pipe(gulpif(!production, sourcemaps.init({ loadMaps: true })))
  // uglify breaks source maps anyway!
    .pipe(gulpif(production, uglify()))
    .pipe(gulpif(!production, sourcemaps.write('./')))
    .pipe(gulp.dest('dist/js/'));
}
// Copy index.html with cachebust for production
gulp.task('inject', function () {
  return gulp.src('app/index.html')
    .pipe(gulpif(production, cachebust.references()))
    .pipe(gulp.dest('dist/'));
});
// Watch files task
gulp.task('watch', function () {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  refresh.listen(livereloadport);
  // Watch sass, vies and index
  gulp.watch('app/styles/**/*.scss', [
    'styles'
  ]);
  gulp.watch('app/**/*.html', [
    'views'
  ]);
  gulp.watch('app/index.html', [
    'inject'
  ]);
  gulp.watch('./dist/**').on('change', refresh.changed);
});
