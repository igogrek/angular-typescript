'use strict';

var browserify   = require('browserify');
var ngAnnotate   = require('browserify-ngannotate');
var del          = require('del');
var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var minifyCss    = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');
var plumber      = require('gulp-plumber');
var uglify       = require('gulp-uglify');
var buffer       = require('vinyl-buffer');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
//var sass = require('gulp-sass');

// Modules for webserver and livereload
var express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist' });
});
// Dev task
gulp.task('dev', ['clean', 'views', 'styles', 'browserify']);
// Default task
gulp.task('default', ['dev', 'watch']);
// Clean task
gulp.task('clean', function (cb) {
  return del(['dist/css','dist/views'], cb);
});
// Styles task
gulp.task('styles', function() {
  // gulp.src('app/styles/*.scss')  
  // .pipe(sass()) 
  return gulp.src('app/styles/*.css')     
    .pipe(plumber()) 
    .pipe(sourcemaps.init())  
    .pipe(autoprefixer())
    .pipe(minifyCss())    
    .pipe(concat('all.css'))     
    .pipe(sourcemaps.write())    
    .pipe(gulp.dest('dist/css/'));
});
// Bundle JS via browsirify
gulp.task('browserify', function() {          
  var b = browserify({
    entries: 'app/scripts/angular-app/app.js',
    debug: true,
    transform: [ngAnnotate]
  });
  b = watchify(b);
  b.on('update', function(){
    browserifyBundle(b);
  });
  return browserifyBundle(b);
});

function browserifyBundle(b) {
  b.bundle()
    .pipe(source('bundle.js'))
    // .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(uglify())
    // .pipe(sourcemaps.write('./'))
    //.pipe(cachebust.references())
    .pipe(gulp.dest('dist/js/'));
}
// Copy index
gulp.task('index', function() {
  // Get our index.html
  return gulp.src('app/index.html')
  // And put it in the dist folder
  .pipe(gulp.dest('dist/'));
});
// Copy views task
gulp.task('views', ['index'], function() {
  // Any other view files from app/views
  return gulp.src('app/scripts/angular-app/**/*.html')
  // Will be put in the dist/views folder
  .pipe(gulp.dest('dist/views/'));
});
// Watch files dev task
gulp.task('watch',['dev'], function() {
  // Start webserver
  server.listen(serverport);
  // Start live reload
  refresh.listen(livereloadport);
  // Watch our sass files
  // gulp.watch(['app/styles/**/*.scss',], [
  //   'styles'
  // ]);
  gulp.watch(['app/styles/**/*.css',], [
    'styles'
  ]);
  gulp.watch(['app/**/*.html'], [
    'views'
  ]);
  gulp.watch('./dist/**').on('change', refresh.changed);
});