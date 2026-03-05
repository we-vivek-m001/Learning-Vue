<template>
  <h3>Parent comp</h3>

  <Child 
    :username="username"
    :age="age"
    @sendMessage="handleMessage"
  />

  <input v-model="username">
</template>

<script setup>
import { ref } from 'vue'
import Child from './child.vue'

const username = ref("vk")
const age = ref(23)

function handleMessage(msg) {
  console.log(msg)
}
</script>

