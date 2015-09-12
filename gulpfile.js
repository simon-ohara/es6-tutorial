var gulp = require('gulp')
  , webpack = require('webpack-stream');
  
var transpile = function(event) {
  gulp
  .src('lib/calc.js')
  .pipe(webpack({
    module: {
      loaders: [
        {
          test: /\.js$/
        , loader: 'babel'
        }
      ]
    }
  , output: {
      filename: 'calc-bundle.js'
    }
  }))
  .pipe(gulp.dest('dist'));
};

var watch = function() {
  gulp.watch('lib/**/*.js', transpile);
};

gulp.task('default', watch);
