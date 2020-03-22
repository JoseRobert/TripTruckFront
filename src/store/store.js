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
    setCustomers: function(state, customers){
      console.log('mutations.setCustomers()');
      state.customers = customers;
    },
    setUsers: function(state, users){
      console.log('mutations.setUsers()');
      state.users = users;
    },
    setTrucks: function(state, data){
      console.log('mutations.trucks()');
      state.trucks = data;
    },
    setTrailers: function(state, data){
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
    allCustomers: async function({ commit }){
      console.log('actions.allCustomers()');
      try {
        let data = await fetch('http://localhost:8000/customers/');
        let customers = await data.json();
        commit('setCustomers', customers);
        // commit('customers', {name: 'cliente01'});        
      } catch (error) {
        console.log(error);    
      }

    },
    allUsers: async function({ commit }){
      console.log('actions.allUsers()')
      try {
        let data = await fetch('http://localhost:8000/all_users/');
        let users = await data.json();
        commit('setUsers', users);        
      } catch (error) {
        console.log(error);          
      }

    },
    getUser: async function({ commit }){
      console.log('actions.getUsers()')
      try {
        let data = await fetch('http://localhost:8000/users/');
        let users = await data.json();
        commit('users', users);        
      } catch (error) {
        console.log(error);
      }

    },
    allTrucks: async function({ commit }){
      console.log('actions.getTrucks()')
      let data = await fetch('http://localhost:8000/all_trucks/');
      let trucks = await data.json();
      commit('setTrucks', trucks);
    },     
    allTrailers: async function({ commit }){
      console.log('actions.getTrailers()')
      let data = await fetch('http://localhost:8000/all_trailers/');
      let trailers = await data.json();
      commit('setTrailers', trailers);
    },
    
  },
  modules: {
  },
  getters: {
    trip: function(id){
      // Un Trip con una estructura factorizada

      return users[0];
    },
    getUsers: function(state){
      console.log('getUsers');
      return state.users;
    },
    getAuthorized: function(state){
      if( !state.user ) return false;

    }
  }
})
