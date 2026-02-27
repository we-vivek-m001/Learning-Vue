<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const loading = ref(false)
const error = ref(null)

const fetchPosts = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    if (!response.ok) {
      throw new Error("Something went wrong")
    }

    const data = await response.json()
    posts.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {

  fetchPosts()

  
})
</script>

<template>
  <div>
    <h2>Posts</h2>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>