<script setup>
    import {useRoute, RouterView, useRouter} from 'vue-router';
    const route = useRoute();
    const router = useRouter();
    
    import cars from '../data/cars.json';
    import ContactView from './ContactView.vue';


    const car = cars.find(c => c.id === parseInt(route.params.id))
</script>

<template>
    <div v-if="car">
        <div>{{car.name}}</div>
        <div>{{car.price}}</div>
        <div>{{car.year}}</div>
        <button @click="router.push(`/cars/${car.id}/contact`)"> Click For Contact</button>
        <button @click="router.back()">Go Back</button>
        <RouterView />
    </div>
    <div v-else>
        Car Not Found
    </div>
    
</template>