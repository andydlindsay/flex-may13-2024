<script setup>
import {ref} from 'vue';
const showLifecycle = ref(false);

// import FirstComponent from './components/FirstComponent.vue';
// import PassingProps from './components/PassingProps.vue';
// import Stateful from './components/Stateful.vue';
import Lifecycle from './components/Lifecycle.vue';
</script>

<template>
  <!-- <FirstComponent /> -->
  <!-- <PassingProps age="99" message="good day">
    <p>Child one</p>
    <p>Child two</p>
  </PassingProps> -->
  <!-- <Stateful /> -->
  <button @click="showLifecycle = !showLifecycle">Toggle Lifecycle</button>
  <Lifecycle v-if="showLifecycle"/>
</template>

<style scoped>

</style>
