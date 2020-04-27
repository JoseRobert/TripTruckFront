//  Users.vue
<template>
    <div class='container container-md content'>
        <div class="row">
            <div class='col-12 titleProps'>Users</div> 
            <div class='col-12 d-flex align-items-center justify-content-between'>
                <button class='btn btn-sm btn_1' @click="newUser">New</button>
                <!-- <input type='text' size="25" value='' class="form-control-sm find" placeholder='Search'> -->
<!-- <div class="input-group">
  <input class="find" size="25" type="text" placeholder="Search" aria-label="Search">
  <div class="input-group-append">
    <span class="input-group-text" id="basic-text1"><i class="fas fa-search text-grey"
        aria-hidden="true"></i></span>
  </div>
</div>      {'username','name','role'}           -->
              <input class="form-control filterTable" type="text" size="25" @keyup="searchTable($event, ['username', 'name', 'role'])" placeholder="Type something to search list items" aria-label="Search">
               <!-- <i class="fas fa-search filterTableIcon"></i> -->
            </div>
            <table class='table table-sm table-bordered table-hover table_1'>
                <thead class='rounded-top'>
                    <tr>
                        <th>#</th>
                        <th @click="sortTable('username')">User</th>
                        <th @click="sortTable('name')">Full Name</th>
                        <th @click="sortTable('role')">Role</th>
                        <th class='d-none d-md-table-cell' >Phone</th>
                        <th class='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody id='bodyTable'>
                    <tr class='' v-for="(user, index) in users" :key='index'>
                        <td> {{ index+1 }} </td>
                        <td> {{ user.username }} </td>
                        <td> {{ user.fullname }} </td>
                        <td> {{ user.role  }} </td>
                        <td class='d-none d-md-table-cell'> {{ user.mobile }} </td>
                        <td class='justify-content-center'>
                            <button class='btn_actions btn_edit' @click='editUser(index)'>Edit</button>
                            <button class='btn_actions btn_delete' @click='deleteUser(index)'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
console.log('Users.vue');

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

import Swal from 'sweetalert2';
let optAlert = require('../assets/json/opt_swal2.json');
const swal2 = Swal.mixin(optAlert);

// console.dir(mapActions);
export default {
    name: 'Users',
    data() {
        return {
            aUsers: [],
            ascending: false,
            sortField: ''
        }
    },
    computed: {
        ...mapState(['users','crud','record']),
        ...mapGetters(['getUsers'])

    },
    methods: {
        ...mapActions(['allUsers']),
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
            // console.log('Record => ');
            // console.dir(user);
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
        userAll: function(){
            console.log('method.userAll()');
            this.dispatch('userAll');

        },
        searchTable: function(self, fieldsFilter){
            // console.log(self.target.value.upperCase());
            // console.dir(fieldsFilter);
            let value = self.target.value.toLowerCase();
            console.log(value);
            // let newArray = users.filter(function(){
            // });
            // console.log(newArray);

            // console.dir(document.querySelector('#bodyTable tr'));
            // document.querySelector('#bodyTable tr').filter(function() {
            //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            // });
        },
        sortTable: function(field){
            console.log(`sortTable(${ field })`);
            // console.log('field: ', field);
            // return 0;
            if( this.sortField == field ){
                this.ascending = !this.ascending;
            }else{
                this.ascending = true;
                this.sortField = field;
            }
            let ascending = this.ascending;
            this.$store.state.users.sort(function(a, b){
                if( a[field] >= b[field] ){
                    return ascending ? 1 : -1
                }else if( a[field] < b[field] ){
                    return ascending ? -1 : 1
                }
                return 0;
            })

        }     

    },
    created: function(context){
        console.log('users.created()');
        this.$store.dispatch('userAll');   // allUasers, userAll
        // context.dispatch('allUsers');
    },
    mounted: function(){
        console.log('users.mounted()');
        // swal2.fire({title: 'TITLE', text:'text'}); 
        // console.log(this.$store.getters.getUsers);

    },
    filters: {
        filtroTabla: function(self, aFields){
            // users = users.filter(function(ele){

            // });
        }

    }  
}
</script>
// ...map
//  Desde el componente:
//  this.$store.getters.nameGetter                  // Getters
//  this.$store.dispatch('nameAction', parametro)   // Action
//  this.$store.commit('nameMutation', valor)       // Mutations
//  this.$store.state.nameVariables                 // State

<style scoped src='@/assets/css/table.css'></style>
<style scoped src='@/assets/css/sweetalert2.css'></style>
