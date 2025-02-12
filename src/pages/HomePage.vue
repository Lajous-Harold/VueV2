<template>
  <main>
    <h1>HomePage</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="multiply">X5</button>
    <button @click="reset">Reset</button>
    <p>{{ button }}</p>
  </main>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

const button = ref(0);

function increment() {
  button.value++;
}
function decrement() {
  button.value--;
}
function multiply() {
  button.value = button.value * 5;
}
function reset() {
  button.value = 0;
}
</script>
<style></style>
