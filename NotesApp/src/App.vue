<script setup>
  import {ref} from 'vue';

  const showModal = ref(false);
  const newNote = ref("");
  const notes = ref([]);
  const errorMessage = ref("");

  
  const addNote = () => {
    if(newNote.value.length < 10){
      errorMessage.value = "Note must be min 10 character"; 
      return;
    } 

    notes.value.push({
      id: Math.floor(Math.random () * 100000000),
      text: newNote.value,
      date : new Date(),
      backgroundColor: 'hsl('+Math.random()*360+', 100%, 75%)'
    })

    closeModal();
    
  }
   
  const closeModal = () => {
    showModal.value = false;
    errorMessage.value = "";
    newNote.value = "";
  }
  const openModal = () => {
    showModal.value = true;
  }
</script>

<template>
  <main>
    <div v-show="showModal" class="overlay">
      <div class="modal">
        <div v-if="errorMessage" :style = "{color : 'red'}">{{ errorMessage }}</div>
        <textarea name="note" id="note" cols="30" rows="10" v-model.trim="newNote"></textarea>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="closeModal">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="openModal">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" :key= "note.id" :style="{'background-color': note.backgroundColor}" class="card">
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US")  }}</p>
        </div>
      </div>
        
    </div>
  </main>
</template>


<style scoped>
  main{
    height: 100vh;
    width: 100vw;
  }

  .container{
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  button{
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21,20,20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
  }

  .card{
    width: 225px;
    height: 225px;
    background-color: rgb(237,182,44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .date{
    font-size: 12.5px;
  }
  .cards-container{
    display: flex;
    flex-wrap: wrap;
  }
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal{
    width:750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding :10px 20px;
    font-size: 20px;
    width: 100%;
    background-color:blueviolet;
    color: white;
    cursor: pointer;
    margin-top: 15px;
    border: none;
    border-radius: 0;
  }
  .modal .close{
    background-color: rgb(193,15,15);
  }
</style>