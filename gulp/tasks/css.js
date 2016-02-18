var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var sourcemaps   = require('gulp-sourcemaps')
var minify       = require('gulp-minify-css')
var spriter       = require('gulp-css-spriter')
var handleErrors = require('../lib/handleErrors')
var px2rem       = require('postcss-px2rem')
var postcss      = require('gulp-postcss')
var autoprefixer = require('autoprefixer') // 浏览器前缀
var cssnext      = require('cssnext') // css未来语法
var precss       = require('precss') // 像sass一样写函数
var rev          = require('gulp-rev')
var path         = require('path')




var exclude_css = path.normalize('!**/{' + config.tasks.css.excludeFolders.join(',') + '}/**')

var paths = {
  src:   [path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'), exclude_css],
  dest:  path.join(config.root.dest, config.tasks.css.dest),
  build: path.join(config.root.dest, config.tasks.css.dest, '/**/*.css')
}

var cssTask = function () {
  var timestamp = + new Date(); 
  var processors = [  
    autoprefixer,
    cssnext,
    precss,
    px2rem({remUnit: 75})
  ];
  return gulp.src(paths.src)
    .pipe(postcss(processors))
    .on('error', handleErrors)
    // .pipe(spriter({ 
    //      //  生成的spriter的位置 
    //     'spriteSheet': './dest/images/sprite'+timestamp+'.png', 
    //      //  生成样式文件图片引用地址的路径 
    //      //  如下将生产：backgound:url(../images/sprite20324232.png) 
    //     'pathToSpriteSheetFromCSS': './images/sprite'+timestamp+'.png' 
    // })) 
    .pipe(minify())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

// var cssTask = function () {
//   return gulp.src(paths.src)
//     .pipe(sourcemaps.init())
//     // .pipe(sass(config.tasks.css.sass))
//     .pipe(sass())
//     .on('error', handleErrors)
//     .pipe(autoprefixer(config.tasks.css.autoprefixer))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(paths.dest))
//     .pipe(browserSync.stream())
// }

// var cssTask_build = function () {
//   return gulp.src(paths.build)
//     .pipe(gulp.dest(paths.dest))
//     .pipe(rev())
//     .pipe(gulp.dest(paths.dest))
//     .pipe(rev.manifest())
//     .pipe(gulp.dest('./rev'));  
//     // .pipe(browserSync.stream())
// }

gulp.task('css', cssTask)
module.exports = cssTask
// gulp.task('css_build', cssTask_build)