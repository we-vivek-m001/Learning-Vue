<template>
 <h4> http request</h4>
<hr>
<div v-for="p in post" :key="p.id">
 <p> {{ p.id}} {{ p.title }}  {{ p.body }}</p>
 </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const post = ref(null);

function getPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=> response.json())
    .then(data => post.value = data)

}

onMounted(() => {
  getPosts()
})


</script>