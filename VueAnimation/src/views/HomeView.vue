<script setup>
  import {ref} from 'vue';

  const showText = ref(false)
  </script>

<template>
  <main>
    <Transition name="color">
      <h1 v-if="showText">Hello World</h1>
    </Transition>
    
    <button @click="showText = !showText">Toggle</button>
  </main>
</template>


<style scoped>
 .color-enter-from{
  background-color: yellow;
 }
 .color-enter-to{
  background-color: aqua;
 }
 .color-enter-active{
  transition: all 1s ease;
 }
</style>