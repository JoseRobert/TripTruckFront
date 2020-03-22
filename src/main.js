// main.js

import Vue from 'vue'
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// require('@/assets/js/index.js');
require('@/assets/css/index.css');
require('@/assets/css/table.css');

// Vue.use(VueGlobalVariable, {
//   $ALERT_TIME : 3000
// });
Vue.config.productionTip = false
// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.filter('name', function(){} );

new Vue({
  router,
  store,
  created() {
    console.log('Vue created()');
    // this.$store.dispatch('getCustomers');

  },
  filters: {

  },
  render: h => h(App)
}).$mount('#app')
