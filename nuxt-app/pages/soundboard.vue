<script setup>
const soundNames = ['clap', 'hihat', 'kick', 'perc', 'snare', 'tom']

const sounds = soundNames.reduce((acc, sound) => {
  acc.push({
    filename: `./sounds/${sound}.wav`,
    name: sound
  })
  return acc
}, [])
</script>

<template>
  <br/>
  <AudioButton v-for="sound in sounds" :sound="sound"/>
</template>

<style>
button {
  appearance: none;
  background: none;
  padding: 1rem;
  margin: 1rem;
}

button.playing {
  background: yellow;
}
</style>