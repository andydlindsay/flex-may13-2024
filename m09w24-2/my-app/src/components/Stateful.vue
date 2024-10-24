<script setup>
import Display from './Display.vue';

import {ref} from 'vue';

const nonReactive = 'hello'

const count = ref(0);
const newFood = ref('');
const foods = ref(['cheese', 'tacos']);
</script>

<template>
  <div>
    <h2>Stateful Component</h2>
    <h2>Count: {{ count }}</h2>
    <button v-on:click="count++">Increment!</button>
    <button v-on:click="count--">Decrement!</button>
  </div>

  <Display count="count" :my-arr="[1,2,3]" />

  <div>
    <label>New food:</label>
    <input v-model="newFood" />
    <button v-on:click="foods.push(newFood)">Add</button>
  </div>

  <div>
    <ul>
      <li v-for="food in foods">{{ food }}</li>
    </ul>
  </div>
</template>