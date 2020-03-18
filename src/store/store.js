// store.js   

import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'

Vue.use(Vuex)

//const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    user: 'Bulo',
    users: [],
    trips: [],
    trucks: [],
    trailers: [],
    customers: [],
    crud: '*',
    record: {}
  },
  mutations: {
    setUser: function(state, data){
      state.user = data;
    },
    customers: function(state, customers){
      console.log('mutations.customers()');
      state.customers = customers;
    },
    users: function(state, users){
      console.log('mutations.users()');
      state.users = users;
    },
    trucks: function(state, data){
      console.log('mutations.trucks()');
      state.trucks = data;
    },
    trailers: function(state, data){
      console.log('mutations.trailers()');
      state.trailers = data;
    },
    setCrud: function(state, crud){
      state.crud = crud;
    },
    setRecord: function(state, record){
      state.record = record;

    }
  },
  actions: {
      // { commit, dispatch } = objetos contexto
    getCustomers: async function({ commit }){
      console.log('actions.getCustomers()')
      let data = await fetch('http://localhost:8000/customers/');
      let customers = await data.json();
      commit('customers', customers);
      // commit('customers', {name: 'cliente01'});
    },
    getUsers: async function({ commit }){
      console.log('actions.getUsers()')
      let data = await fetch('http://localhost:8000/all_users/');
      let users = await data.json();
      commit('users', users);

    },
    getUser: async function({ commit }){
      console.log('actions.getUsers()')
      let data = await fetch('http://localhost:8000/all_users/');
      let users = await data.json();
      commit('users', users);
    },
    getTrucks: async function({ commit }){
      console.log('actions.getTrucks()')
      let data = await fetch('http://localhost:8000/all_trucks/');
      let trucks = await data.json();
      commit('trucks', trucks);
    },     
    getTrailers: async function({ commit }){
      console.log('actions.getTrailers()')
      let data = await fetch('http://localhost:8000/all_trailers/');
      let trailers = await data.json();
      commit('trailers', trailers);
    },
    
  },
  modules: {
  },
  getters: {
    trip: function(id){
      // Un Trip con una estructura factorizada

      return users[0];
    }
  }
})
