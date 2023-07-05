<script setup>
    import { defineProps } from 'vue';
    const {correctAnswers, totalOptions} = defineProps(['correctAnswers', 'totalOptions']);
</script>

<template>

    <div>
        <p>Your Results...</p>
        <h1>{{ correctAnswers + '/' + totalOptions}}</h1>
    </div>

</template>

<style scoped>
 div{
    text-align: center;
    padding: 100px 0;
 }
 div p{
    font-size:25px;
 }
 div h1{
    font-size:80px
 }
</style>

