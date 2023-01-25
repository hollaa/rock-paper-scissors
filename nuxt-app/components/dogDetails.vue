<template>
  <h3>{{ details.name }}</h3>
  <p>{{ details.description }}</p>
</template>

<script setup>
  defineProps(['details']);
</script>
