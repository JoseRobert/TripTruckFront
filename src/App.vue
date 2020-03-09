<template>
  <div id="app" class='container-fluid'>
    <nav id='Menu' class="navbar navbar-expand-sm navbar-light bg-light justify-content-center">  

      <router-link class="navbar-brand" to="/">Phoenix</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <router-link class="nav-link" to="/trips">Trips</router-link>
               <div></div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tables">Tables</router-link>
               <div></div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"><i class="icon_user far fa-user"></i></router-link>
              <!-- <div></div> -->
            </li>
          </ul>
      </div>
    </nav> 
    <transition name=''>
      <router-view/>
    </transition>
  </div>
</template>

<script>
// console.log('App.vue');
export default {
  name: 'Vue',
  methods: {

    tables(){
      console.log('tables...');

    }

  },
  created(){
      console.log('template.created()');
      // this.tables();

  },
  mounted: function(){
    console.log('template.mounted()');
    // tables();
  }  
  
}
</script>

<style scoped>
:root {
    --padding: 0.15rem;
    --bgMenus: rgb(121, 162, 167);
  } 
  
  #Menu {
    background-color: var(--bgMenus) !important;
    padding: var(--padding);
    height: 2rem;
  }
  .navbar-brand {
    padding: var(--padding);
  }
  .nav-item {
    padding: var(--padding);
  
  }
  a:hover {
    color: white;
  }
  .nav-link {
    padding: var(--padding);  
  }
  
</style>
