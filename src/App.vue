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
            </li>
            <li class="nav-item">
              <router-link class="nav-link" @click="submenu" to="">Tables</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/login"></router-link>
            </li>
          </ul>
      </div>
    </nav> 
    <div id='subMenu'>
      <ul class="nav justify-content-center">
        <li class="nav-item d-flex flex-column">
           <router-link id='mUsers' class="nav-link" to="/users">Users</router-link>
           <div></div>
        </li>
        <li class="nav-item">
          <router-link id='mTrucks' class="nav-link" to="/trucks">Trucks</router-link>
          <div></div>
        </li>
        <li class="nav-item">
          <router-link id='mTrailers' class="nav-link" to="/trailers">Trailers</router-link>
          <div></div>
        </li>
        <li class="nav-item">
           <router-link id='mCustomers' class="nav-link" to="/customers">Customers</router-link>
           <div></div>
        </li>
      </ul>      
    
    </div>
    <transition name=''>
      <router-view/>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'Vue',
  methods: {
    submenu: function(){
      console.log('subMenu');

    }

  },
  created: function(){
      console.log('vue.created()');


  }      
  
}
</script>
<style scope>
:root {
  --padding: 0.15rem;
  --bgMenus: rgb(129, 188, 196);
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
