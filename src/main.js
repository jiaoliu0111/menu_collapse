import Vue from 'vue'
import App from './App'

import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.use(router)
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  router,
  render: m => m(App)
})
