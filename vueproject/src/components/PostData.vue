<template>
  <input v-model="title" placeholder="Title">
  <input v-model="body" placeholder="Body">

  <button @click="createPost">Submit</button>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"

const title = ref("")
const body = ref("")

async function createPost() {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: title.value,
      body: body.value,
      userId: 1
    }
  )

  console.log(response.data)
}
</script>