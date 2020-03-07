//  Tables.vue
<template>
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
</template>

<script>
export default {
    name: 'Tables'

}
</script>

<style>

</style>