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

### Gulp File

Paste in the following code in your `gulpfile.js`.

```js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

gulp.task('default', ['lint', 'watch']);

gulp.task('watch', function() {
  gulp.watch('path/to/javascript/files/**/*.js', ['lint']);
});


gulp.task('lint', function() {
  return gulp.src(['path/to/javascript/files/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .on('error', function() {}
  );
});
```

### JSHint Options

Create a `.jshintrc` in the root directory of your project and paste in the following configuration object.

```js
{
  "predef": [ "document", "console", "angular", "require" ],
  "esversion": 6,
  "globalstrict": true,
  "curly": true,
  "eqeqeq": true,
  "undef": true,
  "unused": true,
  "globals": {
    "SomeGlobalVariableYouWantToUse": true
  }
}
```