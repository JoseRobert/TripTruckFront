//  Users.vue
<template>
    <div class='container ctn_1'>
        <div class='titleProps'>Users</div> 
        <div class='d-flex align-items-center justify-content-between'>
            <button class='btn btn-sm btn_1' @click="newUser">New</button>
            <div>Find component</div>
        </div>
        <table class='table table-sm table-bordered table-hover'>
            <thead class='rounded-top'>
                <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Full Name</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th class='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class='' v-for="(user, index) in users" :key='index'>
                    <td> {{ index+1 }} </td>
                    <td> {{ user.username }} </td>
                    <td> {{ user.name }} </td>
                    <td> {{ user.role }} </td>
                    <td> {{ user.mobile }} </td>
                    <td class='d-flex'>
                        <button class='btn btn-sm btn_1' @click='editUser'>Edit</button>
                        <button class='btn btn-sm btn_1' @click='deleteUser'>Delete</button>
                    </td>
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
        ...mapState(['users']),
        ...mapActions(['getUsers']),
    },
    methods: {
        newUser: function(){
            console.log('newUser()');
            this.$router.push('/detailUser');
        },
        editUser: function(){
            console.log('editUser()');
        },
        deleteUser: function(){
            console.log('deleteUser()');
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

<style scoped src='@/assets/css/table.css'>
</style>