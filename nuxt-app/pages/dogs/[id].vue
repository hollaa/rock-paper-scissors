<template>
  <h1>Dog ID</h1>
  <div v-if="dog">
    <DogDetails :details="da" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const route = useRoute()

const dogAPI = `https://dogapi.dog/api/v2/breeds/${route.params.id}`;
const dog = ref();
const da = computed(() => {
  if (dog.value) return dog.value.attributes;
});

onMounted(async () => {
  const { data } = await fetch(dogAPI).then((r) => r.json());
  dog.value = data;
});

</script>