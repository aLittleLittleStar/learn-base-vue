import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/index'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false


new Vue({
  store, // 这样就能全局使用vuex了
  router,
  render: h => h(App)
}).$mount('#app')
