// main.js

import Vue from 'vue'
    import Vuex from 'vuex' // probando

import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)


new Vue({
  router,
  store,
  created() {
    console.log('created()');
    // this.$store.dispatch('getCustomers');

  },
  render: h => h(App)
}).$mount('#app')
