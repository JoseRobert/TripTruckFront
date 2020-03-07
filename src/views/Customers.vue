// Customers.vue    

<template>
    <div class=''>
        <div class='titleProp'>Customers</div>
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
                    <td> <button class='btn btn-sm'>Edit</button> <button class='btn btn-sm'>Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
console.log('Customers');

import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'Customers',
    computed: {
        // console.log('computed{}');
        ...mapState(['customers']),
        ...mapActions(['getCustomers']),
        computo1: function(){

        }

    },
    methods: {},
    created: function(){
        console.log('customers.created()');
        this.$store.dispatch('getCustomers');

    },
    mounted: function(){
        console.log('customers.mounted()')
    }
}
//  Con commit llama a mutations y esta cambia el estado
// Las actions 
// Actions = logica de negocio
</script>

<style scope>

</style>
