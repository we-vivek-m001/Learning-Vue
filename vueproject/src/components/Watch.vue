<script setup>
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

// watch(count, (newVal, oldVal) => {
//   console.log("Count changed:", newVal)
//   console.log(oldVal);
// },{immediate:true})

// function increment() {
//   count.value++
// }

 const todo = ref('0');
 const data = ref(null)

watchEffect( async ()=>{
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      data.value = await response.json();
     console.log(data.value);
})




</script>

<template>
  <!-- <h3>{{ count }}</h3>
  <button @click="increment">Increase</button> -->
 <input v-model="todo">
 <div v-for="item in data" :key="item.id" >
    {{ item.id }} - {{ item.title }}
</div>

</template>