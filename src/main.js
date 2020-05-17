// main.js

import Vue from 'vue'
import App from './App.vue';
import router from './router/router.js';
import store from './store/store.js';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Global Components - import
///import searchTable from './components/searchTable.vue';


import { idGenerator } from '@/assets/js/lib';
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

// Componentes globales
///Vue.component('search-table', searchTable);

// Filter globales
Vue.filter('name', function(){} );

new Vue({
  router,
  store,
  created() {
    console.log('Vue created()');
    // this.$store.dispatch('getCustomers');
    // console.log('idGenerator =>', idGenerator('2',3));

  },
  filters: {

  },
  render: h => h(App)
}).$mount('#app')
