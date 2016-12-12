//npm install --save-dev gulp-base64@0.1.2
npm install --save-dev gulp
npm install --save-dev gulp-sass
gulp-minify-css
gulp-livereload
gulp-sourcemaps
gulp-mock-server
mockjs
npm install --save-dev webpack
npm install --save-dev vue
npm install --save-dev vue-router
npm install --save-dev vue-touch
npm install --save-dev vue-loader
npm install --save-dev vue-resource
npm install --save-dev babel-preset-stage-0
npm install --save-dev css-loader style-loader url-loader sass-loader
npm install --save-dev expose-loader



devDependencies和dependencies的区别
我们在使用npm install 安装模块或插件的时候，有两种命令把他们写入到 package.json 文件里面去，比如：

--save-dev
--save

在 package.json 文件里面提现出来的区别就是，使用 --save-dev 安装的 插件，被写入到 devDependencies 对象里面去，而使用 --save 安装的插件，责被写入到 dependencies 对象里面去。

那 package.json 文件里面的 devDependencies  和 dependencies 对象有什么区别呢？

devDependencies  里面的插件只用于开发环境，不用于生产环境
dependencies     是需要发布到生产环境的。