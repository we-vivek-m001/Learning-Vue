<template>
  <h3>Update Post</h3>

  <form @submit.prevent="updatePost">
    <div>
      <label>Post ID:</label>
      <input v-model="postId" type="number" required />
    </div>

    <div>
      <label>Title:</label>
      <input v-model="title" type="text" required />
    </div>

    <div>
      <label>Body:</label>
      <textarea v-model="body" required></textarea>
    </div>

    <button type="submit">Update</button>
  </form>

  <hr />

  <div v-if="responseData">
    <h4>Updated Response:</h4>
    <p>ID: {{ responseData.id }}</p>
    <p>Title: {{ responseData.title }}</p>
    <p>Body: {{ responseData.body }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const postId = ref('')
const title = ref('')
const body = ref('')
const responseData = ref(null)

async function updatePost() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId.value}`,
      {
        method: 'PATCH',  
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title.value,
          body: body.value
        })
      }
    )

    const data = await response.json()
    responseData.value = data

  } catch (error) {
    console.log("Error:", error)
  }
}
</script>