<template>
    data fetching
 <!-- <div v-for="item in data" :key="item.id">
    <h4>{{ item.title }}</h4>
    <p>{{ item.body }}</p>
  </div> -->
 <input type="number" v-model="uId">
{{ data }}
</template>    

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const data = ref(null);
const uId = ref(1);

watch(
    uId,
async ()=>{

const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${uId.value}`);
    data.value = response.data;
console.log(data.value);
},
{immediate:true}
)




</script>