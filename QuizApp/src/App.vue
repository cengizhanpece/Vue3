<script setup>
  //Components
  import Card from './components/Card.vue'
  
  //Data
  import q from './data/quizes.json';
  
  //Vue
  import {ref , watch} from 'vue';

  const quizes = ref(q);
  const search = ref("");

  watch(search, ()=>{
      quizes.value = q.filter(e => e.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))
  })
</script>


<template>
  <div class ="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" v-model.trim="search" placeholder="Search..">
    </header>
    <div class="options-container">
      <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{quiz.questions.length}}</p>
        </div>
      </div> -->
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>
.container{
  max-width: 1000px;
  margin: 0 auto;
}

header{
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1{
  font-weight: bold;
  margin-right: 30px;
}

header input{
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container{
  display:flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

</style>