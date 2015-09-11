var gulp = require('gulp')
  , babel = require('gulp-babel');
  
var transpile = function(event) {
  gulp
  .src(event.path)
  .pipe(babel())
  .pipe(gulp.dest('js'));
};

var watch = function() {
  gulp.watch('calc.js', transpile);
};

gulp.task('default', watch);

