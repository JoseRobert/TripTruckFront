<template>
  <div id="app" class='container'>
    <nav id='menu' class="navbar navbar-expand-sm navbar-light bg-light">  
      <router-link class="navbar-brand" to="/">Phoenix</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <router-link class="nav-link" to="/trips">Trips</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tables">Tables</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customers">Customers</router-link>
            </li>
            <router-link class="nav-link active" to="/login"></router-link>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: rgba(163, 206, 214, 0.459); */
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background-color: rgba(182, 178, 178, 0.5);
}

#nav a {
  font-weight: 400;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
