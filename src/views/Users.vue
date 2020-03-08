//  Users.vue
<template>
 
    <div class='container'>
        <div class='titleProps'>Users</div> 
        <button class='btn btn-sm btn_1' @click="newUser">New</button>
        <table class='table table-sm table-bordered table-hover'>
            <thead class='rounded-top'>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Full Name</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key='index'>
                    <td> {{ index+1 }} </td>
                    <td> {{ user.username }} </td>
                    <td> {{ user.name }} </td>
                    <td> {{ user.role }} </td>
                    <td> {{ user.mobile }} </td>
                    <td> <button class='btn btn-sm btn_1'>Edit</button> <button class='btn btn-sm btn_1'>Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>


</template>

<script>
console.log('Users');

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Users',
    computed: {
        // console.log('computed{}');
        ...mapState(['users']),
        ...mapActions(['getUsers'])

    },
    methods: {
        newUser: function(){
            console.log('newUser()');
            this.$router.push('/detailUser');
        }
    },
    created: function(){
        console.log('users.created()');
        this.$store.dispatch('getUsers');

    },
    mounted: function(){
        console.log('users.mounted()')
    }    
}
</script>

<style scope src='@/assets/css/table.css'>

</style>