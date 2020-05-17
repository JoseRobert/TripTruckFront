// searchTable.vuje
<template>
    <div class="d-flex ">
        <input v-model='stringSearch' class="form-control filterTable filterInput" type="text" size="30" @keyup="searchTable($event, ['username', 'name', 'role'])" placeholder="Type something to search list items">
        <span class="filterTable filterReset">X</span>
    <!-- <i class="fas fa-search filterTableIcon"></i> -->
    </div>
</template>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
<script>
// import {mapState, mapMutations} from "vuex";

export default {
    name: 'miComponente', // Nombre de mi componente
    propos: {   // Propiedades enviadas desde un componente Padre
        img: '',
        title: ''
    },
    methods: {},        // Metodos locales
    data(){             // Datos locales
        return {
            var1: '',
            var2: 0
        }
    },
    computed: {
        ...mapState(['Desde Vuex.state: {} --> datos globales'])
    },
    methods: {
        ...mapMutations(['Desde Vuex.mutations{} --> funciones'])
    }
    
}
</script>
<style scoped>

</style>