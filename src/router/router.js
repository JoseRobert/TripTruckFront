// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Trips from '../views/Trips';

import Customers from '../views/Customers';
import Users from '../views/Users';
import Trailers from '../views/Trailers';
import Trucks from '../views/Trucks';
import Login from '../views/Login';
import Tables from '../views/Tables';
import detailCustomer from '../components/detailCustomer';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/trips',
    name: 'Trips',
    component: Trips
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/trucks',
    name: 'Trucks',
    component: Trucks
  },
  {
    path: '/trailers',
    name: 'Trailers',
    component: Trailers
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/detailCustomer',
    name: 'detailCustomer',
    component: detailCustomer
  }  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
