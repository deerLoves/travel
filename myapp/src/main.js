// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import "./reset.css";
import "./common.css"
import "./rem.js";
import "../static/fontguan/iconfont.css"
import "../static/bai/iconfont_bai/iconfont.css"
import "../node_modules/swiper/dist/css/swiper.css"
import "../static/zhang/iconfont_zhang/iconfont.css"
import center from "@/observer"
import "../static/icon-liu/iconfont.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.prototype.observer=center
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
