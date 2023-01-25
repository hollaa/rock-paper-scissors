<template>
  <h1>
    List of Dog Breeds
  </h1>

  <div v-for="dog in breeds">
    {{ dog.attributes.name }}
    <NuxtLink :to="`/dogs/${dog.id}`">Show Dog Details</NuxtLink>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
const dogsAPI = `https://dogapi.dog/api/v2/breeds`;

const breeds = ref([]);

onMounted(async () => {
  const { data } = await fetch(dogsAPI).then((r) => r.json());
  breeds.value.push(...data);
});
</script>