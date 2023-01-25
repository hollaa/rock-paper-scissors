<script setup>
defineProps(['sound'])

const audio = ref(null)
const isPlaying = ref(false)

function playSound() {
  audio.value.play()
  isPlaying.value = true
}

</script>

<template>
  <audio
      :src="sound.filename"
      ref="audio"
      @ended="() => { isPlaying = false }"
  >
  </audio>
  <button
      ref="button"
      :class="{ playing: isPlaying }"
      @click="playSound"
  >

    {{ sound.name }}

  </button>
</template>
