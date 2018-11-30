# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<!-- 
 1.运用stylus写样式  同时在styles/varibles.styl 里面写通用的样式 变量  在要运用到的页面上通过@import '../../../styles/varibles.styl'引用

 2.引入字体图标   通过在www.iconfont.cn里面下载字体图标 吧iconfont 相应的文件放进iconfont文件夹里（除了.js）文件那个不加入  再 在外出引入相应的.css文件（要改路径，一定要注意）  同时在main.js文件夹引入该样式  让后在相应的页面引入就可以如 <div class="iconfont">&#xe65e;</div>

 3.简化文件的路径 可以在build文件中webpack.base.conf.js 里面配置 如：
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),

 -->
