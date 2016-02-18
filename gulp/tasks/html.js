var config       = require('../config')
if(!config.tasks.html) return

var browserSync  = require('browser-sync')
var gulp         = require('gulp')
var handleErrors = require('../lib/handleErrors')
var jade         = require('gulp-jade')
var changed     = require('gulp-changed')
var htmlmin      = require('gulp-htmlmin')
var path         = require('path')

var exclude_html = path.normalize('!**/{' + config.tasks.html.excludeFolders.join(',') + '}/**')

var paths = {
  src: [path.join(config.root.src, config.tasks.html.src, '/**/*.jade'), exclude_html],
  dest: path.join(config.root.dest, config.tasks.html.dest),
}

var htmlTask = function() {

	return gulp.src(paths.src)
		.pipe(changed(paths.dest))
		.pipe(jade())
		.on('error', handleErrors)
		.pipe(gulp.dest(paths.dest))
		.pipe(browserSync.stream())
}

gulp.task('html', htmlTask)
module.exports = htmlTask