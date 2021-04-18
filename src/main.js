import Vue from 'vue'
import VueRouter from 'vue-router'
import XpComponent from './components/index.js'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(XpComponent)

import routes from './routes/index.js'
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
