<script setup>
// defineProps(['message', 'age']);

// defineProps({
//   message: String,
//   age: String,
// });

defineProps({
  message: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: false,
    default: "100",
  }
})
</script>

<template>
  <div>
    <h2>PassingProps component</h2>
    <h2>Message is: {{message}}</h2>
    <h2>Age is: {{age}}</h2>

    <slot />
    <slot />
    <slot />
    <slot />
  </div>
</template>