var config       = require('../config')
if(!config.tasks.js) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var changed     = require('gulp-changed')
var uglify		 = require('gulp-uglify')
var path         = require('path')


var paths = {
  src: 	path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}




var jsTask = function() {

  return gulp.src(paths.src)
  	.pipe(changed(paths.dest))
  	.pipe(uglify())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())

}


gulp.task('js', jsTask)
module.exports = jsTask







