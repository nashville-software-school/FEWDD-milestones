# Automating with Gulp

## Setup

This installs a global NPM package to let you run gulp tasks

```bash
sudo npm install -g gulp-cli
```

To use Gulp in a project for automating the validation of your JavaScript with `js-hint`, `cd` to the directory for the project and execute these commands

```bash
npm init # Accept all defaults at the prompts
npm install gulp jshint gulp-jshint jshint-stylish gulp-watch
touch gulpfile.js
```

Paste in the following code in your `gulpfile.js`.

```js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

gulp.task('default', ['lint', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./javascripts/**/*.js', ['lint']);
});


gulp.task('lint', function() {
  return gulp.src('./javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

var onError = function ( err ) {
  gutil.log( gutil.colors.green( err.message ) );
  this.emit( 'end' );
};
```

Set some options for jshint. Create a `.jshintrc` in your directory and paste in the following configuration object.

```js
{
  "predef": [ "document", "jQuery", "$", "console" ],
  "esversion": 6,
  "globalstrict": true
}
```