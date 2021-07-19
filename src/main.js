import Vue from 'vue'
import App from './App.vue'
import index from './assets/js/index'
import { router } from './routes'
import VueThreeSixty from './components/TreeSixtyComponent'
import { VueHammer } from 'vue2-hammer'
import 'vue-360/dist/css/style.css'
import VueSmoothScroll from 'v-smooth-scroll'

Vue.use(VueSmoothScroll)
Vue.use(VueThreeSixty)
Vue.use(VueHammer)
Vue.config.productionTip = false
Vue.mixin(index)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')