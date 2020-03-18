//  detailUser.vue
<template>
    <div class='container content'>
        <div class="row d-flex justify-content-center">
            <div class='titleProps col-12 col-lg-8'>User - Detail</div>  
            <div id='msgForm' class='col-12 col-lg-8 msg_form' v-if="msg_view">Message</div>
            <form id='formUser' class='col-12 col-lg-8 formBase' onsubmit="return false;" novalidate autocomplete="nope" data-btnEnable='btnSave'>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="username" class="formControlLabel">User*</label>
                        <input type="text" name="username" v-model="record.username" class="form-control form-control-sm" id="user" placeholder="User"
                                @input="input($event.target)" pattern="^[a-zA-Z]{1}[a-z0-9-_]{1,9}$" required autofocus>
                        <small id="userError" class="form-text text-muted">User... </small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="role" class="formControlLabel">Role*</label>
                        <select name="role" v-model="record.role" class="form-control form-control-sm" id="role" placeholder="Role" required>
                            <option value="">Select role</option>
                            <option value="Manager">Manager</option>
                            <option value="Driver">Driver</option>
                            <option value="Admin">Guest</option>
                        </select>
                        <small id="roleError" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="name" class="formControlLabel">Full Name*</label>
                        <input type="text" name='name' v-model="record.name" class="form-control form-control-sm" id="name" placeholder="Full Name"
                            @input="input($event.target)" pattern="^[A-Z]{1}[a-zA-Z -]{1,25}$" required>
                        <small id="nameError" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="phone" class="formControlLabel">Mobile</label>
                        <input type="tel" name='phone' v-model="record.phone" class="form-control form-control-sm" id="phone" placeholder="Mobile"
                            @input="input($event.target)" pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$">
                        <small id="mobileError" class="form-text text-muted">###-###-####</small>
                    </div>
                </div>
                <div class="form-row row">
                    <div class="col-6 form-group">
                        <label for="password" class="formControlLabel">Password*</label>
                        <input type="password" name='password' v-model="record.password" class="form-control form-control-sm" id="password" placeholder="Password"
                                @input="input($event.target)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>
                        <small id="passwordError" class="form-text text-muted">Minimo 5 caracteres, un digito minimo</small>
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
                <button id='btnSave' class="col-4 btn btn-sm btn_1 col" disabled @click="sendForm()">Save</button>
                <button class="col-4 btn btn-sm btn_1 col" @click="confirmForm()">Confirm</button>
                <button class="col-4 btn btn-sm btn_1 col" @click="resetForm()">Reset</button>
                <button class="col-4 btn btn-sm btn_1 col" @click="exitForm()">Exit</button>
            </div>
        </div>     
    </div>
</template>

<script>
console.log('detailUser.vue');

var idForm = 'formUser';

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

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
        }
    },
    computed: { // Expone state al template
        ...mapState(['users','crud','record']),
        // ...mapGetters(['']),
        crud: function(){
            return this.$store.state.crud;
        }
    },
    methods: { 
        // ...mapActions(['']),
        // ...mapMutations(['']),
        sendForm: function(){
            console.log('sendForm');
            // Validacion de form
            let objForm =  document.getElementById(idForm);
           
            if ( evalForm( !idForm ) ) {
                console.log( 'Error.');
                return
            }else{
                if( objForm.password.value != objForm.repassword.value ){
                    swal2.fire({title: 'Verificacion de Formulario', text:'Claves no son iguales!'});
                    return;
                }
            }
            // Verificar el id (username) - msgError
            if ( existUser(objForm) ) {
                console.log('Existe user name?');
                return;
            }
            // Configurar obj. Form: metodo (post, put, delete)
            let formData = new FormData (objForm);
            conaole.dir(formData);
            let formMethod =''
            if( this.crud == 'C' ) formMethod = 'POST';
            if( this.crud == 'U' ) formMethod = 'PUT';
            if( this.crud == 'D' ) formMethod = 'DELETE';
            formData.append('method', formMethod);


            // Fetch - msgError
            // msg-Success

            // Leer todos los usuarios (users[])

            // Mostrar view Users
        },
        resetForm: function(){
            document.getElementById(idForm).reset();
        },
        confirmForm: function(){
            conole.log('confirmForm()');
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
        existUser: async function (user){
            console.log('Verificando existencia de user')
            let url = 'http://localhost:8000/user/';
            let options = {
                method: 'POST',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                body: objForm
            };
            let data = await fetch(url, options);
            let res = await data.json();
            return res;
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
    },
    mounted: function(){
        console.log('form.User.mounted()');
        // this.test();
    },       
    destroyed: function(){
        console.log('form.User.destroyed()');
    }
}
</script>

<style scoped src="@/assets/css/form.css"></style>