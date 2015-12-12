var gulp       = require('gulp');
   //browserify = require('gulp-browserify');

var source = require('vinyl-source-stream'),
    browserify = require('browserify');

gulp.task('scripts', function(){
   return browserify({
       transform: [ 'reactify' ],
       entries: 'app/main.js'
   })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/'));
});

//gulp.task('scripts', function () {
//
//    gulp.src(['app/main.js'])
//        .pipe(browserify({
//            debug: true,
//            transform: [ 'reactify' ]
//        }))
//        .pipe(gulp.dest('./public/'));
//
//});

gulp.task('default', ['scripts']);