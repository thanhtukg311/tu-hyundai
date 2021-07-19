import Vue from 'vue'
import App from './App.vue'
import index from './assets/js/index'
import { router } from './routes'
import VueThreeSixty from 'vue-360'
import 'vue-360/dist/css/style.css'
import VueSmoothScroll from 'v-smooth-scroll'

Vue.use(VueSmoothScroll)
Vue.use(VueThreeSixty)
Vue.config.productionTip = false
Vue.mixin(index)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')