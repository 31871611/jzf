var gulp = require('gulp');
var sass = require('gulp-sass');                        //scss
var minifyCss = require("gulp-clean-css");              //压缩css
var livereload = require('gulp-livereload');            //gulp-livereload
var sourcemaps = require('gulp-sourcemaps');            //编译sass时生成额外的.map文件用
var cssver = require('gulp-make-css-url-version');      //给css文件里引用url加版本号，如background:url(./.png?v=rn12)
var fileinclude  = require('gulp-file-include');        //@@include('include/header.html')
var clean = require('gulp-clean');


/*

    gulp build

*/



gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(cssver())             //给css文件里引用文件加版本号（文件MD5）
        .pipe(minifyCss({
            compatibility: 'ie7',   //类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        }))
        .pipe(gulp.dest('./dist/css'))
});


//压缩css
gulp.task('minify-css', function () {
    gulp.src('./css/*.css')
        .pipe(cssver())             //给css文件里引用文件加版本号（文件MD5）
        .pipe(minifyCss({
            compatibility: 'ie7',   //类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
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
    gulp.start("icon:dev","photo:dev","js:dev","tpl:dev",'sass');
});




//错误提示
gulp.on("error",function(err){
    console.log(err);
});



/*

    gulp dev

*/


//图标
gulp.task("icon:dev",function(){
    gulp.src(["./src/images/*.png","./src/images/*.jpg","./src/images/*.gif"])
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



gulp.task('dev', ['icon:dev','photo:dev','js:dev', 'sass:dev', 'tpl:dev'], function () {
    livereload.listen();

    // 我们使用gulp的文件监听功能，来实时编译修改过后的文件
    gulp.watch(["./src/images/*.png","./src/images/*.jpg"], ['icon:dev']);
    gulp.watch(["./src/picture/*.png","./src/picture/*.jpg","./src/picture/*.gif"], ['photo:dev']);
    gulp.watch('./src/js/*.js', ['js:dev']);
    gulp.watch('./src/sass/**/*.scss', ['sass:dev']);
    gulp.watch('./src/tpl/**/*.html', ['tpl:dev']);
});