//  detailUser.vue
<template>
    <div class='container'>
        <div class='titleProps'>User - Detail</div>  
        <div class="row">
            <!-- <div id='msgForm' class='col-12 msg_form'>Message</div> -->
            <form id='formUser' class='col formBase' onsubmit="return false;" novalidate autocomplete="nope" data-btnEnable='btnSave'>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="username" class="formControlLabel">User*</label>
                        <input type="text" name="username" class="form-control form-control-sm" id="user" placeholder="User"
                                @input="input($event.target)" pattern="^[a-zA-Z]{1}[a-z0-9-_]{1,9}$" required autofocus>
                        <small id="userError" class="form-text text-muted">User... </small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="role" class="formControlLabel">Role*</label>
                        <select name="role" class="form-control form-control-sm" id="role" placeholder="Role" required>
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
                        <label for="name" class="formControlLabel">Name*</label>
                        <input type="text" name='name' class="form-control form-control-sm" id="name" placeholder="Full Name"
                            @input="input($event.target)" pattern="^[A-Z]{1}[a-zA-Z -]{1,25}$" required>
                        <small id="nameError" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col form-group">
                        <label for="phone" class="formControlLabel">Mobile</label>
                        <input type="tel" name='phone' class="form-control form-control-sm" id="phone" placeholder="Mobile"
                            @input="input($event.target)" pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$">
                        <small id="mobileError" class="form-text text-muted">###-###-####</small>
                    </div>
                </div>
                <div class="form-row row">
                    <div class="col-6 form-group">
                        <label for="password" class="formControlLabel">Password*</label>
                        <input type="password" name='password' class="form-control form-control-sm" id="password" placeholder="Password"
                                @input="input($event.target)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>
                        <small id="passwordError" class="form-text text-muted">Minimo 5 caracteres, un digito minimo</small>
                    </div>
                    <div class="col-6 form-group">
                        <label for="repassword" class="formControlLabel">Confirm Password*</label>
                        <input type="password" name='repassword' class="form-control form-control-sm" id="repassword" placeholder="Confirm password"
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
        <div class='row btns_crud'>
            <button id='btnSave' class="btn btn-sm btn_1 col" disabled @click="sendForm()">Save</button>
            <button class="btn btn-sm btn_1 col" @click="resetForm()">Reset</button>
            <button class="btn btn-sm btn_1 col" @click="exitForm()">Exit</button>
        </div>     
    </div>
</template>

<script>
console.log('detailUser.vue');

var idForm = 'formUser';

import { evalInput, evalForm, seePassword } from '@/assets/js/form';

export default {
    name: 'detailUser',

    methods: { 
        sendForm: function(){
            console.log('sendForm');
            // Validacion de form
            let objForm =  document.getElementById(idForm);
           
            if (evalForm( !idForm ) ) {
                console.log( 'Error.');
                return
            }else{
                if( objForm.password.value == objForm.repassword.value){
                    objForm.submit();
                    // alert('Successful');
                }else{
                    alert('Claves no son iguales');
                }
            }
            // Verificar el id (username) - msgError
            if ( existUser(objForm) ) {

            }
            // Configurar obj. Form: metodo (post, put, delete)
            let formData = new FormData (objForm);

            // Fetch - msgError
            // msg-Success
            // Leer todos los usuarios (users[])
            // Mostrar view Users
        },
        resetForm: function(){
            document.getElementById(idForm).reset();
        },
        exitForm: function(){
            console.log('exitForm()');
            this.$router.push('/users');
        },
        input: function(self){
            console.log('evalInput method.')
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
            let rpta = await data.json();

        }
    }, 
    created: function(){
        console.log('form.User.created()');
        // this.$store.dispatch('getUsers');
    },
    mounted: function(){
        console.log('form.User.mounted()')

    },       
    destroyed: function(){
        console.log('form.User.destroyed()');
    }
}
</script>

<style scoped src="@/assets/css/form.css"></style>