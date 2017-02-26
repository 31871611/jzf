var gulp = require('gulp');
var sass = require('gulp-sass');                        //scss
var minifyCss = require("gulp-clean-css");              //压缩css
var livereload = require('gulp-livereload');            //gulp-livereload
var sourcemaps = require('gulp-sourcemaps');            //编译sass时生成额外的.map文件用
var cssver = require('gulp-make-css-url-version');      //给css文件里引用url加版本号，如background:url(./.png?v=rn12)
var fileinclude  = require('gulp-file-include');        //@@include('include/header.html')
var clean = require('gulp-clean');
var connect = require('gulp-connect');                  //本地web服务

/*

    gulp build

*/



gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(minifyCss({
            level: 2
        }))
        .pipe(gulp.dest('./dist/css'))
});


//压缩css
gulp.task('minify-css', function () {
    gulp.src('./css/*.css')
        .pipe(minifyCss({
            level: 2
        })) //压缩css
        .pipe(gulp.dest('./css'));
});


//压缩js
gulp.task("js",function(){
    console.log("压缩js");
});


//删除./dist目录
gulp.task("clean", function(){
    return gulp.src('./dist')
        .pipe(clean());
});


gulp.task('build', ['clean'],function(){
    gulp.start('font:dev',"icon:dev","photo:dev","js:dev","tpl:dev",'sass');
});




//错误提示
gulp.on("error",function(err){
    console.log(err);
});




/*

    gulp dev

*/


//字体
gulp.task("font:dev",function(){
    gulp.src(["./src/font/*.eot","./src/font/*.svg","./src/font/*.ttf","./src/font/*.woff"])
        .pipe(gulp.dest("./dist/font"));
});


//图标
gulp.task("icon:dev",function(){
    gulp.src(["./src/images/**/*.png","./src/images/**/*.jpg","./src/images/**/*.gif"])
        .pipe(gulp.dest("./dist/images"));
});


//素材图片
gulp.task("photo:dev",function(){
    gulp.src(["./src/picture/*.png","./src/picture/*.jpg"])
        .pipe(gulp.dest("./dist/picture"));
});


gulp.task('sass:dev', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});


gulp.task('js:dev', function () {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});


gulp.task('tpl:dev', function () {
    return gulp.src('./src/tpl/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});


// 本地web服务
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 8888
    });
});

gulp.task('dev', ['font:dev','icon:dev','photo:dev','js:dev', 'sass:dev', 'tpl:dev' , 'connect'], function () {
    livereload.listen();

    // 我们使用gulp的文件监听功能，来实时编译修改过后的文件
    gulp.watch(["./src/images/*.png","./src/images/*.jpg"], ['icon:dev']);
    gulp.watch(["./src/picture/*.png","./src/picture/*.jpg","./src/picture/*.gif"], ['photo:dev']);
    gulp.watch('./src/js/*.js', ['js:dev']);
    gulp.watch('./src/sass/**/*.scss', ['sass:dev']);
    gulp.watch('./src/tpl/**/*.html', ['tpl:dev']);
});