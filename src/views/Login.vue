//  Login.vue

<template>
<div class="container">
    <div class='titleProps'>Login</div> 

    <div class="row ">
        <form id='formLogin' action="/postsign" method='POST' class='col' onsubmit="return false" novalidate autocomplete="nope" data-btnEnable='login'>
            <div class="form-row row">
                <div class="col form-group">
                    <label for="user" class="formControlLabel">User*</label>
                    <input type="text" name="username" class="form-control form-control-sm" id="user" placeholder="User"
                            oninput="evalInput(this)" pattern="^[a-zA-Z]{4}[a-z0-9-_]{1,9}$" required autofocus>
                    <small id="userError" class="form-text text-muted">Inicia minimo 4 caracteres y finaliza con digito(s) numericos</small>
                </div>
            </div>
            <div class="form-row row">
                <div class="col form-group">
                    <label for="password" class="formControlLabel">Password*</label>
                    <input type="text" name='passw' class="form-control form-control-sm" id="password" placeholder="Password"
                            oninput="evalInput(this)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>
                    <small id="passwordError" class="form-text text-muted">Inicia minimo 4 caracteres y finaliza con uno o mas digitos</small>
                </div>
            </div>
        </form>
    </div>
    <div class='row groupBtns d-flex'>
        <button id='login' class="btn boton btn-sm btn-primary col" disabled @click="login()">Login</button>
        <button class="btn boton btn-sm btn-primary col" @click="exitLogin()">Exit</button>
    </div>


</div>
</template>

<script>
console.log('Login.vue');

import { mapMutations }  from 'vuex';

export default {
    name: 'login',
   computed: {
        ...mapMutations(['setUser'])
    },
    methods: {
        login: function(){
            console.log('newCustomer()');
            this.$router.push('/');


        },
         exitLogin: function(){
            console.log('exitLogin()');
            location.href="/home.html";
        }
    }  

}
</script>

<style scoped>
.login {
    width: 50%;
}
</style>