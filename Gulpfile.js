'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var ngAnnotate = require('browserify-ngannotate');
var watchify = require('watchify');
var rimraf = require('gulp-rimraf');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
    //sass = require('gulp-sass'),
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

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

// Clean task
gulp.task('clean', function() {
	gulp.src('./dist/views', { read: false }) // much faster
  .pipe(rimraf({force: true}));
});

// Styles task
gulp.task('styles', function() {
  // gulp.src('app/styles/*.scss')
  // // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  // .pipe(sass({onError: function(e) { console.log(e); } }))
  // // Optionally add autoprefixer
  // .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
  
  
gulp.src('app/styles/*.css')
  .pipe(sourcemaps.init())
  .pipe(minifyCss())
  .pipe(sourcemaps.write()) 
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('browserify', ['clean'], function() {          
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
    .pipe(gulp.dest('dist/js/'));
}

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src('app/index.html')
  // And put it in the dist folder
  .pipe(gulp.dest('dist/'));
  // Any other view files from app/views
  gulp.src('app/scripts/angular-app/**/*.html')
  // Will be put in the dist/views folder
  .pipe(gulp.dest('dist/views/'));
});

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

gulp.task('default', ['dev', 'watch']);
