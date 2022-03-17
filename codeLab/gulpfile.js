const { src,dest,watch, parallel, series } = require('gulp')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const terser = require('gulp-terser');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync');


const minifyHTML = ()=>{
    return src('project/*.html').pipe(htmlmin({collapseWhitespace:true,removeComments:true})).pipe(gulp.dest('dist'))
}
exports.html = minifyHTML

function jsMinify() {
    return src('project/js/**/*.js',{sourcemaps:true})     
        .pipe(concat('all.min.js')).pipe(terser()).pipe(dest('dist/assets/js',{sourcemaps:'.'}))
}
exports.js = jsMinify
function cssMinify() {
    return src("node_modules/bootstrap/dist/css/bootstrap.css")
        .pipe(concat('style.min.css'))
        .pipe(cleanCss())
        .pipe(dest('dist/assets/css'))
}
exports.css = cssMinify
function sassMinify() {
    return src(["project/sass/**/*.scss", "project/css/**/*.css"],{sourcemaps:true}).pipe(sass()).pipe(concat('style.sass.min.css')).pipe(cleanCss()).pipe(dest('dist/assets/css',{sourcemaps:'.'}))
}
function serve (cb){
  browserSync({
    server: {
      baseDir: 'dist/'
    }
  });
  cb()
}

function reloadTask(done) {
  browserSync.reload()
  done()
}
function watchTask() {
    watch('project/*.html',series(minifyHTML, reloadTask))
    watch('project/js/**/*.js',series(jsMinify, reloadTask))
    watch(["project/css/**/*.css","project/sass/**/*.scss"], series(sassMinify,reloadTask));
}
exports.default = series( parallel(jsMinify, sassMinify, minifyHTML), serve,watchTask)

