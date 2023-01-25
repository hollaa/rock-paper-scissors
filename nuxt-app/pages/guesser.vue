<script setup>
import { onBeforeMount, onErrorCaptured } from 'vue'

const store = useGameStore();

onBeforeMount( () => {
  store.init()
})

</script>

<template>
  <h3>Current Score: {{ store.score }}</h3>
  <h3>Current Guess: {{ store.currentGuess }}</h3>

  <Loader v-if="store.loading"/>

  <div v-if="store.deckID">
    <button @click="() => { store.setGuess('red') }">Guess Red</button>
    <button @click="() => { store.setGuess('black') }">Guess Black</button>

    <!-- <FaultyComponent/> -->

    <button v-if="store.currentGuess" @click="store.drawCard">Draw a card</button>

    <img v-if="store.lastCard" :src="store.lastCard.image">
  </div>

</template>