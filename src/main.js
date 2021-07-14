import Vue from 'vue'
import App from './App.vue'
import index from './assets/js/index'
import { router } from './routes'

Vue.config.productionTip = false
Vue.mixin(index)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')