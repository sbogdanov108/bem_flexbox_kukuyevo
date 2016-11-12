'use strict';

var gulp         = require( 'gulp' ),
    sourcemaps   = require( 'gulp-sourcemaps' ),
    sass         = require( 'gulp-sass' ),
    plumber      = require( 'gulp-plumber' ),
    postcss      = require( 'gulp-postcss' ),
    autoprefixer = require( 'autoprefixer' ),
    server       = require( 'browser-sync' ).create();

gulp.task( 'style', function() {
  return gulp.src( 'sass/style.scss' )
             .pipe( plumber() )
             .pipe( sourcemaps.init() )
             .pipe( sass() )
             .pipe( postcss( [
               autoprefixer( {
                 browsers: [
                   'last 1 version',
                   'last 2 Chrome versions',
                   'last 2 Firefox versions',
                   'last 2 Opera versions',
                   'last 2 Edge versions'
                 ]
               } )
             ] ) )
             .pipe( sourcemaps.write() )
             .pipe( gulp.dest( 'css' ) )
             .pipe( server.stream() );
} );

gulp.task( 'serve', [ 'style' ], function() {
  server.init( {
    server: '.',
    notify: false,
    open  : true,
    ui    : false
  } );

  gulp.watch( 'sass/**/*.{scss,sass}', [ 'style' ] );
  gulp.watch( '*.html' ).on( 'change', server.reload );
} );
