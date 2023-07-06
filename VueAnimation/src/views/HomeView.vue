<script setup>
  import {ref} from 'vue';

  const showText = ref(false);
  const text = ref("");
  const list = ref([]);
  let idCounter = 0;
  const getId = () => {
    idCounter++;
    return idCounter;
  }

  const AddToList = () => {
    const obj  = { id: getId(), text: text.value}
    list.value = [obj].concat(list.value);
    text.value = "";
  }

  const DeleteFromList = (id) =>{
    list.value = list.value.filter(e => e.id != id);
  }
  </script>

<template>
  <main>
    <div class="t-container">
      <Transition name="color">
        <h1 v-if="showText">Hello World</h1>
        <h1 v-else="showText">Goodbye</h1>
      </Transition>
    </div>
    
    
    <button @click="showText = !showText">Toggle</button>

    <div class="container">
      <input type="text" v-model="text" placeholder="Add person to invite" @keyup.enter="AddToList">
      <ul>
        <TransitionGroup name="invitees" >
          <li @click="DeleteFromList(name.id)" v-for="name in list" :key="name.id">{{ name.text }}</li>
        </TransitionGroup>
        

      </ul>
    </div>
  </main>
</template>


<style scoped>
 .color-enter-from{
    opacity: 0;
 }
 .color-enter-to{
    opacity: 1;
 }
 .color-enter-active, .color-leave-active{
  transition: all 1s ease;
 }
 .color-leave-from{
    opacity: 1;
 }
 .color-leave-to{
    opacity: 0;
 }
 
.t-container{
  position: relative;
}
.t-container h1{
  position: absolute;
  width: 300px;
}
button{
  margin-top: 50px;
}

.container{
  max-width: 300px;
  margin: 0 auto;
}

.container input{
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(128,128,128,0.13);
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.12)
}

ul{
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
 
}

li{
  list-style: none;
  width: 300px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 10px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.invitees-enter-from{
  transform: translateX(-30%);
}

.invitees-enter-to{
  transform: translateX(0%);
}

.invitees-leave-active{
  position: absolute;
}

.invitees-leave-to{
  transform: translateX(-30%);
}
.invitees-move{
  
}
</style>