-------------------------------
    Steps for New Project Setup
-------------------------------

$ mkdir newProject
$ cd newProject

If using any bower components (e.g. jquery & bootstrap):
    $ bower init    (answer several questions)
    $ bower install jquery --save (or --save-dev?)
    $ bower install bootstrap --save (or --save-dev?)

If using any npm components (gulp/jshint/watch):
    $ npm init    (answer several questions)
    $ npm install gulp --save-dev
    $ npm install jshint --save-dev
    $ npm install gulp-jshint --save-dev
    $ npm install jshint-stylish --save-dev
    $ npm install gulp-watch --save-dev
    $ touch gulpfile.js
    $ touch .jshintrc

Git:
    Create repo on github.com and copy remote url
    $ git init
    $ git remote add origin http://githubURL
    $ touch .gitignore
    $ touch README.md

Standard files/dirs:
    $ touch index.html
    $ mkdir styles
    $ mkdir scripts
    $ touch js & css files


Add to .gitignore:
------------------
    .DS_Store
    bower_components
    node_modules


Add to README.md:
-----------------
    What program does
    How to install


Add to gulpfile.js:
-------------------
    Example code in Notes
    Change files watched in 2 places to "scripts/*.js"

Add to .jshintrc:
-----------------
    Example code in Notes


$ git add .
$ git commit -m "First Commit"
$ git push -u origin master
$ git checkout -b newBranchName


At the top of all js files:
---------------------------
"use strict";

In another Terminal tab:
------------------------
$ gulp watch

In a Vagrant Terminal tab:
--------------------------
$ http-server

Create your gulpfile.js and paste in the following code:
--------------------------------------------------------
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
--------------------------------------------------------


Set some options for jshint. Create a .jshintrc in your directory and paste in the following configuration object:
--------------------------------------------------------
{
 "predef": [ "document", "jQuery", "$", "console" ],
 "esversion": 6,
 "globalstrict": true
} 