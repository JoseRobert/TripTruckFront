//  Users.vue
<template>
    <div class='container content'>
        <div class="row">
            <div class='col-12 titleProps'>Users</div> 
            <div class='col-12 d-flex align-items-center justify-content-between'>
                <button class='btn btn-sm btn_1' @click="newUser">New</button>
                <input type='text' size="25" value='' class="form-control-sm" placeholder='Find'>
            </div>
            <table class='table table-sm table-bordered table-hover col-11 table_1'>
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
                        <td class='d-flex justify-content-center'>
                            <button class='btn btn-sm btn_1 flex-fill' @click='editUser(index)'>Edit</button>
                            <button class='btn btn-sm btn_1 flex-fill' @click='deleteUser(index)'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
console.log('Users.vue');

import { mapState, mapMutations, mapActions } from 'vuex';

import Swal from 'sweetalert2';
let optAlert = require('../assets/json/opt_swal2.json');
const swal2 = Swal.mixin(optAlert);

// console.dir(mapActions);
export default {
    name: 'Users',
    computed: {
        ...mapState(['users','crud','record'])
        // ...mapActions(['getUsers']),
    },
    methods: {
            // ...mapState(['users','crud','record']),
            ...mapActions(['getUsers']),
            ...mapMutations(['setCrud','setRecord']),
        newUser: function(){
            console.log('newUser()');
            this.$store.commit('setCrud', 'C');
            this.$store.commit('setRecord', {});
            this.$router.push('/detailUser');
        },
        editUser: function(index){
            console.log('editUser('+index+')');
            this.$store.commit('setCrud', 'U');
            // console.log(this.$store.state.users[index]);
            let user = this.$store.state.users[index];
            this.$store.commit('setRecord', user);
            this.$router.push('/detailUser');
        },
        deleteUser: function(index){
            console.log('deleteUser('+index+')');
            this.$store.commit('setCrud', 'D');
            let user = this.$store.state.users[index];
            this.$store.commit('setRecord', user);
            this.$router.push('/detailUser');
        },
        objUser: function(index){
            console.log('objUser('+index+')');
            console.log(users[index]);
            let user = new Object();
            user._id = users[index]._id;
            user.username= users[index].username;
            user.name = users[index].name;
            user.role = users[index].role;
            user.phone = users[index].phone;
            user.password = users[index].password;
            user.repassword = users[index].password;
            console.log('user = ', user);
            return user;

        },
        allUsers: function(){
            console.log('method.allUsers()');
            this.dispatch('getUsers');

        }
    },
    created: function(context){
        console.log('users.created()');
        this.$store.dispatch('getUsers');
        // context.dispatch('getUsers');
        // this.allUsers();

    },
    mounted: function(){
        console.log('users.mounted()');
        // swal2.fire({title: 'TITLE', text:'text'}); 
    }    
}
</script>

<style scoped src='@/assets/css/table.css'></style>
<style scoped src='@/assets/css/sweetalert2.css'></style>
