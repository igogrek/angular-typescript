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
var runSequence  = require('run-sequence');
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

// Default task
gulp.task('default', function(done) {
    runSequence('clean', ['index', 'views', 'fonts', 'styles', 'browserify'],'watch');
});
// Clean dist folder task
gulp.task('clean', function (cb) {
  return del(['dist/css','dist/views'], cb);
});
// Copy index.html
gulp.task('index', function() {
  return gulp.src('app/index.html')
  .pipe(gulp.dest('dist/'));
});
// Copy angular views task
gulp.task('views', function() {
  return gulp.src('app/scripts/angular-app/**/*.html')
  .pipe(gulp.dest('dist/views/'));
});
// Copy fonts task
gulp.task('fonts', function() {
  return gulp.src('app/fonts/*') 
  .pipe(gulp.dest('dist/fonts/'));
});
// Prepate styles task
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
// Bundle JS via browserify
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
// Watch files task
gulp.task('watch', function() {
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