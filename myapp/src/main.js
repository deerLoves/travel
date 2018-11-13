// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import "./reset.css";
import "./rem.js";
import "../static/fontguan/iconfont.css"
import "../static/bai/iconfont_bai/iconfont.css"
import "../node_modules/swiper/dist/css/swiper.css"
import "../static/zhang/iconfont_zhang/iconfont.css"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
