var config       = require('../config')
if(!config.tasks.webpack) return

var browserSync  = require('browser-sync')
var webpack      = require("gulp-webpack")
var named        = require('vinyl-named')
var uglify       = require('gulp-uglify')
var gulp         = require('gulp')
var path         = require('path')
var webpackConfig = require('../../webpack.config')

var appList = ['main']

var paths = {
  src: 	path.join(config.root.src, config.tasks.webpack.src),
  dest: path.join(config.root.dest, config.tasks.webpack.dest)
}

var webpackTask = function() {

   return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(webpackConfig()))
        .pipe(uglify().on('error', function(e) {
            console.log('\x07',e.lineNumber, e.message);
            return this.end()}
        ))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
}


var webpackWatchTask = function() {

   return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(webpackConfig({watch: true})))
        .pipe(uglify().on('error', function(e) {
            console.log('\x07',e.lineNumber, e.message);
            return this.end()}
        ))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
}



function mapFiles(list, extname) {
  	return list.map(function (app) {return paths.src + '/**/**/' + app + '.' + extname})
}


gulp.task('webpack', webpackTask)
module.exports = webpackTask

gulp.task('webpackWatch', webpackWatchTask)
module.exports = webpackWatchTask