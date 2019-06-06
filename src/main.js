// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import './assets/stylus/index.styl'

Vue.config.productionTip = false
FastClick.attach(document.body)
document.body.style.background = '#222'
document.body.style.margin = '0'
document.body.style.padding = '0'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
