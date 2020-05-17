//  detailUser.vue
<template>
    <div class='container content'>
        <div class="row d-flex justify-content-center">
            <div class='titleProps col-12'>User - {{ title_detail }}</div>  
            <div id='msgForm' class='col-12 col-lg-8 msg_form' v-if="msg_view">Message</div>
            <form id='formUser' class='col-12 col-lg-8 formBase' onsubmit="return false;" novalidate autocomplete="nope" data-btnEnable='btnSave'>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="username" class="formControlLabel">User*</label>
                        <input type="text" name="username" v-model="record.username" class="form-control form-control-sm" id="username" placeholder="User name"
                                @input="input($event.target)" pattern="^[a-zA-Z]{1}[a-z0-9-_]{1,9}$" required autofocus>
                        <small id="userError" class="form-text text-muted">Must start with a letter. Minimun 5 characters.</small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="role" class="formControlLabel">Role*</label>
                        <select name="role" v-model="record.role" class="form-control form-control-sm" id="role" placeholder="Role" required>
                            <option value="" selected>Select role</option>
                            <option value="Admin">Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="User">User</option>
                        </select>
                        <small id="roleError" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="fullname" class="formControlLabel">Full Name*</label>
                        <input type="text" name='fullname' v-model="record.fullname" class="form-control form-control-sm" id="fullname" placeholder="Full Name"
                            @input="input($event.target)" pattern="^[A-Z]{1}[a-zA-Z -]{1,25}$" required>
                        <small id="nameError" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="mobile" class="formControlLabel">Mobile</label>
                        <input type="tel" name='mobile' v-model="record.mobile" class="form-control form-control-sm" id="mobile" placeholder="Mobile"
                            @input="input($event.target)" pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$">
                        <small id="mobileError" class="form-text text-muted">###-###-####</small>
                    </div>
                </div>
                <div class="form-row row" v-if="crud=='C'">
                    <div class="col-6 form-group">
                        <label for="password" class="formControlLabel">Password*</label>
                        <div class='d-flex'>
                            <input type="password" name='password' v-model="record.password" class="form-control form-control-sm" id="password" placeholder="Password"
                                @input="input($event.target)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>
                            <span class='icon_ctn' @click="see_pw($event.target, ['repassword','password'] )"><i class="far fa-eye"></i></span>
                        </div>
                        <small id="passwordError" class="form-text text-muted">Minimun 5 characters. Must have at least one number at the end.</small>
                    </div>
                    <div class="col-6 form-group">
                        <label for="repassword" class="formControlLabel">Confirm Password*</label>
                        <input type="password" name='repassword' v-model="record.repassword" class="form-control form-control-sm" id="repassword" placeholder="Confirm password"
                        @input="input($event.target)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>         
                        <small id="repasswordError" class="form-text text-muted"></small>
                    </div>
                    <div class="col form-group">
                        <div class="form-control form-control-sm seePw">
                            <!-- <label for="seePw" class="formControlLabel"></label> -->
                            <input type="checkbox" name='seePw' class=' d-none' id='seePw' @click="see_pw($event.target, ['repassword','password'] )" />
                            <label for='seePw'><i class="far fa-eye"></i></label>
                        </div>
                    </div>  
                   
                </div>
            </form>

        </div>
        <div class='row btns_crud d-flex justify-content-center'>
            <div class='col-xs-12 col-lg-8 d-flex justify-content-center'>
                <button id='btnSave' class="btn btn-sm btn_1 col" disabled @click="confirmCreate()" v-if="crud=='C'">Save</button>
                <button class="btn btn-sm btn_1 col" @click="confirmDelete()" v-if="crud=='D'">Confirm</button>
                <button class="btn btn-sm btn_1 col" @click="confirmUpdate()" v-if="crud=='U'">Save</button>
                <button class="btn btn-sm btn_1 col" @click="resetForm()" v-if="crud=='C'">Reset</button>
                <button class="btn btn-sm btn_1 col" @click="exitForm()" v-if="crud!='R'">Cancel</button>
                <button class="btn btn-sm btn_1 col" @click="exitForm()" v-if="crud=='R'">Exit</button>
            </div>
        </div>     
    </div>
</template>

<script>
console.log('detailUser.vue');

const idForm = 'formUser';
console.dir( document.getElementById('userForm') );

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

import { disabledForm } from '@/assets/js/lib';
// import phoenix from '@/assets/js/lib';

import { evalInput, evalForm, seePassword } from '@/assets/js/form';

import Swal from 'sweetalert2';
let optAlert = require('../assets/json/opt_swal2.json');
const swal2 = Swal.mixin(optAlert);

export default {
    // self : this,
    name: 'detailUser',
    data() {
        return {
            msg_view : false,
            formMethod: '',
            title_detail: 'CRUD'
        }
    },
    computed: { // Expone state al template
        ...mapState(['User_Name', 'User_Rol', 'users','crud','record']),
        // ...mapGetters(['']),
        crud: function(){
            return this.$store.state.crud;
        }
    },
    methods: { 
        // ...mapActions(['']),
        // ...mapMutations(['']),
        setComponent: function(){
            console.log('setComponent()');
            this.formMethod =''
            if( this.crud == 'C' ) { this.formMethod = 'POST'; this.title_detail = 'Create'; this.resetForm()};
            if( this.crud == 'R' ) { this.formMethod = 'GET'; this.title_detail = 'Detail'};            
            if( this.crud == 'U' ) { this.formMethod = 'PUT'; this.title_detail = 'Edit'};
            if( this.crud == 'D' ) { this.formMethod = 'DELETE'; this.title_detail = 'Delete' };
            if( this.crud == 'D' || this.crud == 'R' ) {
                // console.log('Delete...');
                disabledForm(idForm, true);
            }
            if( this.crud == 'U' ) {
                // console.log('Update...');
                disabledForm(idForm, true, ['username']);
            }            
        },
        resetForm: function(){
            console.log('Reset Form...');
            document.getElementById(idForm).reset();
        },        
        confirmCreate: async function(){
            console.log('confirmCreate()');
            // Validacion de form
            let objForm = document.getElementById(idForm);
            console.dir(objForm);
            if ( evalForm( !idForm ) ) {
                console.log( 'Error no existe formulario.');
                return false;
            }else{
                if( objForm.password.value != objForm.repassword.value ){
                    await swal2.fire({title: 'Form verify', text:'Password do not match!'});
                    return false;
                }
            }
            // Verificar el id (username) - msgError
            if ( !this.existUser( objForm.username.value ) ) {
                // console.log('Existe User?');
                await swal2.fire({title: 'User verify', text: 'User exist!'});
                return false;
            }
            // let formData = new FormData(objForm);
            // console.dir(formData);
            let data = { username: objForm.username.value,  
                        fullname: objForm.fullname.value,
                        role: objForm.role.value,
                        password: objForm.password.value,
                        mobile: objForm.mobile.value,
                        currentUser: this.$store.state.User_Name
                    };
            // Fetch
            let url = 'http://localhost:3000/users/create';
            let options = {
                method: 'POST',
                //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                headers: { 'Content-Type': 'application/json' },
                // headers: { 'Content-Type': 'multipart/form-data' },
                body: JSON.stringify(data)
                // // mode: 'no-cors',
                //body: formData
            };
            try {
                let text='';
                let data = await fetch(url, options);
                let res = await data.json();
                text = (res.status)? 'Successfull!': 'Fail!'; 
                await swal2.fire({ title: 'New User', text: text });
                this.exitForm();    // Componente padre
            } catch (error) {
                console.log('Error:', error);
            }              
        },
        confirmUpdate: async function(){
            console.log('confirmUpdate');
            let objForm = document.getElementById(idForm);
            // console.dir(objForm.role.value);
            let _id = this.record._id;

            let data = {  
                _id: _id,
                username: objForm.username.value, 
                fullname: objForm.fullname.value,
                role: objForm.role.value,
                mobile: objForm.mobile.value,
                currentUser: this.$store.state.User_Name
            };
            //  console.log('data =>', data)
            let url = 'http://localhost:3000/users/update';
            let options = {
                method: 'PUT',
                // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // body: formData
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            try {
                let text = '';
                let data = await fetch(url, options);
                let res = await data.json();
                text = (res.status)? 'Successfull!': 'Fail!';
                await swal2.fire({title: 'User Edit', text: text});
                this.exitForm();
            } catch (error) {
                console.log('Error:', error);
            }
        },
        confirmDelete: async function(){
            console.log('confirmDelete()');
            // let objForm = document.getElementById(idForm);
            // console.dir(objForm);
            // objForm.setAttribute('disabled', true);
            // objForm.classList.toggle('disabled');
            // let formData = new FormData(objForm);
            // formData.append('_id',  this.record._id );

            let data = { _id: this.record._id , currentUser: this.$store.state.User_Name };
            let url = 'http://localhost:3000/users/delete';
            let options = {
                method: 'DELETE',
                // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // body: formData
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            try {
                let text = '';
                let data = await fetch(url, options);
                let res = await data.json();
                text = (res.status)? 'Successfull!': 'Fail!';
                await swal2.fire({title: 'User Delete', text: text});
                disabledForm(idForm, false);
                this.exitForm();
            } catch (error) {
                console.log('Error:', error);
            }
        },
        exitForm: function(){
            console.log('exitForm()');
            this.$router.push('/users');
        },
        input: function(self){
            // console.log('evalInput method.')
            evalInput(self);
        },
        see_pw: function(self, names){
            seePassword(self, names);
        },
        see_clave: function(self, names){

        },
        existUser: async function(user){
            console.log('existUser(): ', user)
            let url = 'http://localhost:3000/users/user';
            let options = {
                method: 'POST',
                // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username : user })
            };
            try {
                let data = await fetch(url, options);
                let res = await data.json();
                // console.log(res);
                return res.existUser;                 
            } catch (error) {
                console.log(error);
            }
            // if ( res.existUser ) return true
            // console.log('Verify: ', res)
            // return res;
        },
        test: function(){
            console.log('test()');
            console.log(this.crud);
        }
    }, 
    // Hooks
    created: function(){
        console.log('form.User.created()');
        // this.$store.dispatch('getUsers');
        // this.setComponent();
        // console.log('User_Name = ', User_Name);
        // this.setComponent();       
    },
    mounted: function(){
        console.log('form.User.mounted()');
        // console.log('User_Name = ', User_Name);
        this.setComponent();
    },       
    destroyed: function(){
        console.log('form.User.destroyed()');
    }
}
</script>

<style scoped src="@/assets/css/form.css"></style>
<style scoped>

</style>