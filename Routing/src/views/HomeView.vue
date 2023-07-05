<script setup>
    import c from '../data/cars.json'
    import {RouterLink} from "vue-router"
</script>


<template>
    <div>
        <h1>Home View</h1>
        <div class="cars">
            <RouterLink v-for="car in c" :key="car.id" :to="`/cars/${car.id}`">
                {{ car.name }}
            </RouterLink>
        </div>
        
        
    </div>
</template>

<style scoped>
    .cars{
        display: flex;
    }

    .cars a{
        text-decoration: none;
        color: black;
        width: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.388);
        margin:10px
    }


</style>