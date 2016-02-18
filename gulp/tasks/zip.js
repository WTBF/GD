var config = require('../config')
if(!config.tasks.zip) return
var gulp   = require('gulp')
var zip    = require('gulp-zip')
var path   = require('path')



var paths = {
  src:  path.join(config.tasks.zip.src),
  dest: path.join(config.tasks.zip.dest),
}


//打包主体build 文件夹并按照时间重命名
var zipTask = function() {

      function checkTime(i) {
          if (i < 10) {
              i = "0" + i
          }
          return i
      }
          
      var d=new Date();
      var year=d.getFullYear();
      var month=checkTime(d.getMonth() + 1);
      var day=checkTime(d.getDate());
      var hour=checkTime(d.getHours());
      var minute=checkTime(d.getMinutes());

  return gulp.src(paths.src)
        .pipe(zip( config.tasks.zip.projectName+'-'+year+month+day +hour+minute+'.zip'))
        .pipe(gulp.dest(paths.dest));

}

gulp.task('zip', zipTask)
module.exports = zipTask