<script setup>
import { defineProps } from 'vue';

const {maxStep, currentStep} = defineProps(['maxStep', 'currentStep']);


</script>

<template>
    <h4>Question {{(currentStep +1) + '/' +maxStep }}</h4>
    <div class="bar"  @click="console.log(`${maxStep}  : ${currentStep}`)">
        <div class="completion" :style="{width: ((100/(maxStep - 1)) * currentStep) + '%'}"></div>
    </div>

</template>


<style scoped>

.bar {
        width: 300px;
        height: 50px;
        border: 3px solid bisque;
    }
    .completion{
        height: 100%;
        width: 0%;
        background-color: bisque;
    }
</style>