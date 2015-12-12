var gulp       = require('gulp');

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


gulp.task('default', ['scripts']);