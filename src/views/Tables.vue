//  Tables.vue
<template>
   <div id='subMenu' class='subMenu'>
      <ul class="nav justify-content-center">
        <li class="nav-item d-flex flex-column">
           <router-link class="nav-link sub_menu" to="/users">Users</router-link>
           <div></div>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link sub_menu" to="/trucks">Trucks</router-link>
          <div></div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link sub_menu" to="/trailers">Trailers</router-link>
          <div></div>
        </li>
        <li class="nav-item">
           <router-link class="nav-link sub_menu" to="/customers">Customers</router-link>
           <div></div>
        </li>
      </ul>    
   </div>  
</template>

<script>
export default {
  name: 'Tables'

}
</script>

<style scoped>
.subMenu {
  background-color: var(--background-menu) !important;
  margin-top: 0.13rem;
  padding: 0.3rem;
  border-top: 0.072rem solid white;
}

.subMenu ul {
  /* background-color: rgb(103, 171, 180); */
}
.subMenu a {
  color: black;
}

.sub_menu {
  padding: 0.30rem 1rem;
  padding-bottom: 0.090rem;
}
.sub_menu:focus + div {
  display: block;
  width: 100%;
  height: 0.20rem;
  border-bottom-width: 0.093rem;
  border-bottom-style: solid;
  border-bottom-color: white;
}
</style>
