// store.js   

import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'

Vue.use(Vuex)

//const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    User_Name: 'Bulos',
    User_Role: '*',
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
      state.User_Name = data;
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
    userAll: async function({ commit }){
      console.log('actions.userAll()')
      try {
        let data = await fetch('http://localhost:3000/users/all/');
        let users = await data.json();
        commit('setUsers', users);        
      } catch (error) {
        console.log(error);          
      }
    },
    getUser: async function({ commit }){
      console.log('actions.getUser()')
      const data = { _id: ''};
      const options = { method: 'GET', 
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        body: JSON.stringify(data)
                      };
      try {
        let data = await fetch('http://localhost:3000/users/one', options);
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
    getId: function(state){
      console.log('getId');
      return state.record._id;
    },
    getAuthorized: function(state){
      if( !state.User_Name ) return false;

    }
  }
})
