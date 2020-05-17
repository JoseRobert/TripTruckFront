//  Users.vue
<template>
    <div class='container container-md content'>
        <div class="row">
            <div class='col-12 titleProps'>Users</div> 
            <div class='col-12 d-flex align-items-center justify-content-between'>
                <button class='btn btn-sm btn_1' @click="newUser"> New </button>
                <!-- <search-table></search-table> -->
                <div class="d-flex ">
                    <input v-model='stringSearch' class="form-control filterTable filterInput" type="text" size="30" @keyup="searchTable($event, ['username', 'name', 'role'])" placeholder="Type something to search list items">
                    <span class="filterTable filterReset">X</span>
               <!-- <i class="fas fa-search filterTableIcon"></i> -->
                </div>
            </div>
            <table class='table table-sm table-bordered table-hover table_1'>
                <thead class='rounded-top'>
                    <tr>
                        <th>#</th>
                        <th @click="sortTable('username', $event)">User Name<span class='mio' :class="sortArrow"></span></th>
                        <!-- <th @click="sortTable('username', $event)">User Name<span ref='idUser' :class="[(ascending)? 'asc': 'dsc', (sortField == 'username')? 'arrow': 'noarrow']" class='mio'></span></th> -->
                        <th @click="sortTable('fullname', $event)">Full Name<span :class="[(ascending)? 'asc': 'dsc', (sortField == 'fullname')? 'arrow': 'noarrow']"></span></th>
                          <th @click="sortTable('role', $event)">Role<span :class="sortArrow"></span></th>
                        <!-- <th @click="sortTable('role')">Role<span :class="[(ascending)? 'asc': 'dsc', (sortField == 'role')? 'arrow': 'noarrow']"></span></th> -->
                        <th class='d-none d-md-table-cell' >Mobile<span></span></th>
                        <th class='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody id='bodyTable'>
                    <tr class='' v-for="(user, index) in listUsers" :key='index' @dblclick='readUser(index)' @mouseover='mouseover(index)'>
                        <td> {{ index+1 }} </td>
                        <td> {{ user.username }} </td>
                        <td> {{ user.fullname }} </td>
                        <td> {{ user.role  }} </td>
                        <td class='d-none d-md-table-cell'> {{ user.mobile }} </td>
                        <td class='d-flex justify-content-center' >
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
            // aUsers: [],
            stringSearch: '',
            ascending: false,
            sortField: '',
            arrowDouble: false

        }
    },
    computed: {
        ...mapState(['users','crud','record']),
        ...mapGetters(['getUsers']),
        listUsers: function(){
            return this.$store.state.users;
        },
        sortArrow: function(){
            // return { asc: false, dsc: false, arrow: false, noarrow: false } 
            let a = this.ascending;
            let b = this.sortField;
            return { noarrow: true };
        }
        // [(ascending)? 'asc': 'dsc', (sortField == 'role')? 'arrow': 'noarrow']
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
        readUser: function(index){
            console.log('readUser('+index+')');
            this.$store.commit('setCrud', 'R');
            // // console.log(this.$store.state.users[index]); // Tener en cuenta!
            let user = this.$store.state.users[index];
            this.$store.commit('setRecord', user);
            this.$router.push('/detailUser');
        },        
        editUser: function(index){
            console.log('editUser('+index+')');
            this.$store.commit('setCrud', 'U');
            // console.log(this.$store.state.users[index]); // Tener en cuenta!
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
        sortTable: function(field, self){
            console.log(`sortTable(${ field }, ${self})`);
            // console.dir(self.target);
            //if( self ){
            //  console.dir(self.target);
            // this.arrowDouble = !this.arrowDouble;
             let clase = self.target.children[0];
            //  clase = document.getElementById('idUser');
            //  console.dir(clase);
            // console.log('ref', this.$refs.idUser.classList.add('eureka'));
            // :class="[(ascending)? 'asc': 'dsc', (sortField == 'username')? 'arrow': 'noarrow']"
             console.log('--------', clase.nodeName);
              console.dir(clase); 

            //}
            if( this.sortField == field ){
                this.ascending = !this.ascending;
            }else{
                this.sortField = field;
                this.ascending = true;
            }
            let ascending = this.ascending;
            // Add class SPAN
            clase.classList.remove('arrow','noarrow');
            if ( this.sortField == field) {
                clase.classList.add('arrow');
            }else{
                 clase.classList.add('noarrow');
            }
            clase.classList.remove('asc','dsc');
            if (this.ascending){
                clase.classList.add('asc');
            }else{
                clase.classList.add('dsc');
            }
            console.log('---- sort -----');
            this.listUsers.sort(function(a, b){
                if( a[field] >= b[field] ){
                    return ascending ? 1 : -1
                }else if( a[field] < b[field] ){
                    return ascending ? -1 : 1
                }
                return 0;
            });

        },
        mouseover: function(index){
            // alert();
            // console.log('mouseover', index);
        }  

    },
    created: function(){
        // console.log('users.created()');
        this.$store.commit('setRecord', {});
        this.$store.dispatch('userAll');
        // this.aUsers = this.$store.dispatch('userAll');
        // context.dispatch('allUsers');
    },
    mounted: function(){
        // console.log('users.mounted()');
        // swal2.fire({title: 'TITLE', text:'text'}); 
        // console.log(this.$store.getters.getUsers);
        // this.sortTable('username', null);
        //    console.log('idGenerator =>', idGenerator('2',3));
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
//  this.$store.state.namePropiedad                 // State

<style scoped src='@/assets/css/table.css'></style>
<style scoped src='@/assets/css/sweetalert2.css'></style>
<style scoped>
    .main{
        height: 600px;


    }
</style>
