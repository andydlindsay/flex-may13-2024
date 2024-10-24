<script setup>
const username = 'carol';
const languages = ['javascript', 'html', 'css'];

const buttonClickHandler = () => {
  alert('the button was clicked');
};
</script>

<template>
  <!-- <h2>Hello World</h2>
  <h2>Username: {{ username }}</h2> -->
  <button @click="buttonClickHandler">Click me!</button>

  <h2 v-if="username === 'bob'">You are bob</h2>
  <h2 v-else>The else</h2>

  <div>
    <ul>
      <li v-for="language of languages">
        <div>
          <p>{{ language }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  color: magenta;
  text-decoration: underline;
}
</style>
