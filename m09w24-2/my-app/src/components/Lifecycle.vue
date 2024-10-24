<script setup>
import {onMounted, onUpdated, ref, onUnmounted} from 'vue';
const count = ref(0);
const races = ref([]);

onMounted(() => {
  console.log('the component has been mounted/added to the dom');

  fetch('https://www.dnd5eapi.co/api/races')
    .then(res => res.json())
    .then(res => races.value = res.results);
})

onUpdated(() => {
  console.log('the component has been updated');
});

onUnmounted(() => {
  console.log('component has been unmounted/removed from the dom');
});

</script>

<template>
  <div>
    <h2>Lifecycle</h2>
    <button @click="count++">{{ count }}</button>
    <h2>Races length: {{ races.length }}</h2>
  </div>
</template>