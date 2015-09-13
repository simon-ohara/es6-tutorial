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
  , entry: {
      calc: './lib/calc.js'
    , 'rate-finder': './lib/ratefinder.js'
    }
  , output: {
      filename: '[name]-bundle.js'
    }
  }))
  .pipe(gulp.dest('dist'));
};

var watch = function() {
  gulp.watch('lib/**/*.js', transpile);
};

gulp.task('default', watch);
