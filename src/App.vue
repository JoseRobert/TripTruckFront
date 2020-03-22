// App.vue
<template>
  <div id="app" class='container-fluid sticky-top '> 
    <nav id='Menu' class="navbar navbar-expand-sm navbar-light bg-light menu justify-content-center">  

      <router-link class="navbar-brand" to="/">Phoenix</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon icon_menu"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav1">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/trips">Trips</router-link>
               <div></div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tables">Tables</router-link>
               <div></div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="user == '' "><i class="icon_user far fa-user"></i></router-link>
              <router-link class="nav-link" to="/login" v-if="user != '' "><i class="icon_user far fa-user"></i></router-link>
            </li>
          </ul>
      </div>
    </nav> 
    <!-- Router view -->
    <transition name=''>
    <div class="main">
      <router-view/>
    </div>
    </transition>
  </div>
</template>

<script>
console.log('App.vue');

import { mapState } from 'vuex';

export default {
  name: 'App',
  methods: {},
  computed: {
    ...mapState(['user'])
  },
  created(){
    console.log('App.vue.created()');
  },
  mounted: function(){
    console.log('App.vue.mounted()');
    if( this.$store.state.user == ''){
      this.$router.push('/login');
    }
  } 
  
}
</script>

<style scoped>
:root {
  --padding: 0.3rem;
} 

.navbar-brand {
  margin-left: 0.286rem !important;
  font-weight: 500;

}
.navbar {
  padding: var(--padding);
}
.navbar-nav {
  display: flex;
  justify-content: center;
  align-items:baseline;

}
.nav-item {
  padding: var(--padding);

}
.nav-item:hover {
  color: white; 
}
a:hover {
  color: white;
}
.nav-link {
  color: black !important;
  padding: var(--padding);
  font-weight: 500;
}
.nav-link:hover {
   color: rgb(104, 101, 101) !important;

}

</style>
