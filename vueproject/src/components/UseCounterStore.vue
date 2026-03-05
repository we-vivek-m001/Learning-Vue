<template>
  <h4>   pinia:: store management</h4>
  <h3>{{vivek.count}}</h3>
  <h4>{{ vivek.doubleCount }}</h4>
  
<button  @click="vivek.increment()">increment</button>
<button @click="vivek.decrement()"> decrease</button>
</template>    

<script setup>
import { useCounterStore } from './stores/counter'

const vivek = useCounterStore();


</script>