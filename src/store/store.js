// store.js   

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    user: '',
    users: [],
    trips: [],
    trucks: [],
    trailers: [],
    customers: []
  },
  mutations: {
    customers: function(state, data){
      console.log('mutations.customers()');
      state.customers = data;
    }
  },
  actions: {

    getCustomers: async function({ commit }){
      console.log('actions.getCustomers()')
      let data = await fetch('http://localhost:8000/customers/');
      let customers = await data.json();
      commit('customers', customers);
      // commit('customers', {name: 'cliente01'});
    }

  },
  modules: {
  },
  getters: {}
})
