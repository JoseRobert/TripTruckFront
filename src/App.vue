<template>
  <div id="app" class='container-fluid'>
    <nav id='Menu' class="navbar navbar-expand-sm navbar-light bg-light">  

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
              <router-link class="nav-link" to="/login">Login</router-link>
              <div></div>
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

export default {
  name: 'Vue',
  methods: {

    tables(){
      console.log('tables...');

    }

  },
  created(){
      console.log('template.created()');
      this.tables();

  },
  mounted: function(){
    console.log('template.mounted()');
    // tables();
  }  
  
}
</script>

<style scope>
:root {
    --padding: 0.15rem;
    --bgMenus: rgb(195, 221, 224);
  } 
  
  #Menu {
    background-color: var(--bgMenus) !important;
    padding: var(--padding);
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
  
  #subMenu {
    background-color:  var(--bgMenus) !important;
    padding: var(--padding);
    border-top: 1px solid white;
  }
  
  #subMenu ul {
    /* background-color: rgb(103, 171, 180); */
  }
  #subMenu a {
    color: black;
  }
  
  #subMenu a.router-link-exact-active {
    color: #222e28;
  }
</style>
