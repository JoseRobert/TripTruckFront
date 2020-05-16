// Customers.vue    
<template>
    <div class='container'>
        <div class='titleProps'>Customers</div>
            <div class='col-12 d-flex align-items-center justify-content-between'>
                <button class='btn btn-sm btn_1' @click="newUser">New</button>
                <input class="form-control filterTable" type="text" size="30" @keyup="searchTable($event, ['username', 'name', 'role'])" placeholder="Type something to search list items" aria-label="Search">
               <!-- <i class="fas fa-search filterTableIcon"></i> -->
            </div>
        <!-- <button class='btn btn-sm btn_1' @click="newCustomer">New</button> -->
        <table class='table table-sm table-bordered table-hover'>
            <thead class='rounded-top'>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key='index'>
                    <td> {{ index+1 }} </td>
                    <td> {{ customer.name }} </td>
                    <td> {{ customer.address.street+' '+customer.address.city+', '+customer.address.state }} </td>
                    <td> {{ customer.phone }} </td>
                    <td> <button class='btn btn-sm btn_1'>Edit</button> <button class='btn btn-sm btn_1'>Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
console.log('Customers.vue');

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Customers',
    computed: {
        ...mapState(['customers']),
        ...mapActions(['allCustomers']),
    },
    methods: {
        newCustomer: function(){
            console.log('newCustomer()');
            this.$router.push('/detailCustomer');
        }
    },
    created: function(){
        console.log('customers.created()');
        this.$store.dispatch('allCustomers');

    },
    mounted: function(){
        console.log('customers.mounted()')
    }
}

</script>

<style scoped>
</style>
