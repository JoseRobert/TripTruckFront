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
    /* background-color: var(--bgMenus) !important; */
    margin-top: 2px;
    padding: var(--padding);
    border-top: 1px solid white;
}

.subMenu ul {
  /* background-color: rgb(103, 171, 180); */
}
.subMenu a {
  color: black;
}

.subMenu a.router-link-exact-active {
  color: #222e28;
  }
</style>