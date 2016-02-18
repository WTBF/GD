var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

var defaultTask = function(cb) {
  var tasks = ['fonts', 'images', 'html', 'css', 'jc', 'js']
  gulpSequence('clean', tasks, 'watch', cb)

}

gulp.task('default', defaultTask)
module.exports = defaultTask
