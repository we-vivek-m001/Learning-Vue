<template>
  <div>
    <h2>All Posts (Axios GET)</h2>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>

    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const loading = ref(false)
const error = ref(null)

async function getPosts() {
  loading.value = true
  error.value = null

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    posts.value = response.data
  } catch (err) {
    error.value = "Failed to fetch posts"
    console.log(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getPosts()
})
</script>