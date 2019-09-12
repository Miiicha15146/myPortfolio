// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'
import VueHead from 'vue-head'
import App from './App'
import router from './router'
import master from './assets/css/master.css'
import style from './assets/css/style.css'
import sp from './assets/css/sp-style.css'

Vue.use(VueTyperPlugin)
Vue.use(VueHead)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  master,
  style,
  sp,
  components: { App },
  template: '<App/>',
  head: {
    title: {
      inner: 'Miyuki Takekawa'
    },
    meta: [
      { name: 'description', content: 'description' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { charset: 'utf-8' },
      { property: 'og:type', content: 'website' }
    ]
  }
})
