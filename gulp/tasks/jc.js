var config       = require('../config')
if(!config.tasks.jc) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var changed     = require('gulp-changed')
var path         = require('path')
var minify       = require('gulp-minify-css')
var autoprefixer = require('autoprefixer')
var changed      = require('gulp-changed')
var handleErrors = require('../lib/handleErrors')
var px2rem       = require('postcss-px2rem')
var postcss      = require('gulp-postcss')
var cssnext      = require('cssnext') // css未来语法
var precss       = require('precss') // 像sass一样写函数



var paths_jc = {
  src:   path.join(config.root.src, config.tasks.jc.src, '/**/*.{' + config.tasks.jc.extensions + '}'),
  dest:  path.join(config.root.dest, config.tasks.jc.dest)
}


var jcTask = function () {
  var timestamp = + new Date(); 
  var processors = [  
    autoprefixer,
    cssnext,
    precss,
    px2rem({remUnit: 75})
  ];
  return gulp.src(paths_jc.src)
    .pipe(changed(paths_jc.dest))
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(minify())
    .pipe(gulp.dest(paths_jc.dest))
    .pipe(browserSync.stream())
}

gulp.task('jc', jcTask)
module.exports = jcTask
