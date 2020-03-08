//  detailUser.vue
<template>
    <div class='container detail'>
    <div class='titleProps'>User - detail</div>  
    <div class="row">
        <form id='formUser' class='col formBase' onsubmit="return false;" novalidate autocomplete="nope" data-btnEnable='btnSave'>
        <div class="form-row">
            <div class="col form-group">
                <label for="username" class="formControlLabel">User*</label>
                <input type="text" name="username" class="form-control form-control-sm" id="user" placeholder="User"
                        oninput="evalInput(this)" pattern="^[a-zA-Z]{1}[a-z0-9-_]{1,9}$" required autofocus>
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
                    oninput="evalInput(this)" pattern="^[A-Z]{1}[a-zA-Z -]{1,25}$" required>
                <small id="nameError" class="form-text text-muted"></small>
            </div>
        </div>
        <div class="form-row">
        <div class="col form-group">
            <label for="phone" class="formControlLabel">Mobile</label>
            <input type="tel" name='phone' class="form-control form-control-sm" id="phone" placeholder="Mobile"
                oninput="evalInput(this)" pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$">
            <small id="mobileError" class="form-text text-muted">###-###-####</small>
        </div>
        </div>
        <div class="form-row row">
            <div class="col-6 form-group">
                <label for="password" class="formControlLabel">Password*</label>
                <input type="password" name='password' class="form-control form-control-sm" id="password" placeholder="Password"
                        oninput="evalInput(this)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>
                        <span></span>   
                <small id="passwordError" class="form-text text-muted">Minimo 5 caracteres, un digito minimo</small>
            </div>
            <div class="col-6 form-group">
                <label for="repassword" class="formControlLabel">Confirm Password*</label>
                <input type="password" name='repassword' class="form-control form-control-sm" id="repassword" placeholder="Confirm password"
                oninput="evalInput(this)" pattern="^[A-Za-z]{4,}[0-9]{1,4}$" required>         
                <small id="repasswordError" class="form-text text-muted"></small>
            </div>
            <div class="col-12 form-group">
                <div class="form-control form-control-sm">
                    <label for="seePw" class="formControlLabel"></label>
                    <input type="checkbox" name='seePw' class='d-none' id='seePw' onclick="seePassword(this, ['repassword','password'])"
                    />
                    <label for='seePw'>Ver password<i class="far fa-eye"></i></label>
                </div>
            </div>
        </div>
        </form>
    </div>
    </div>
</template>

<script>

// import form 


export default {
    name: 'detailUser'
}
</script>

<style src="@/assets/css/form.css">
</style>