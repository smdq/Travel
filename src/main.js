// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 重置样式和border初识化样式
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'


Vue.config.productionTip = false
//移动端300hs问题
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})