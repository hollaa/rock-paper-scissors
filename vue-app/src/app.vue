<script setup>
import {ref} from 'vue'
function playSound(id){
  alert(id)
}
import {sounds} from './scripts/sounds.js'
</script>

<template>
  <audio v-for="sound in sounds" controls v-bind:src="sound.filename" id="sound.id"></audio>
  <div>
    <button v-for="sound in sounds" @click="playSound(sound.id)" >{{sound.name}}</button>
  </div>
</template>
<style>
button{
  appearance: none;
  background: none;
  padding: 1rem;
  margin: 1rem;
}

button.playing{
  background: aqua;
}
</style>