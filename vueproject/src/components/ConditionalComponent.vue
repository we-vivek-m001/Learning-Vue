<template>
    <h3> conditional rendering</h3>
    <button @click="isAwesome = !isAwesome">toggle</button>
    <div v-if="isAwesome"> Vue is Awesome</div>
    <div v-else> Oh no! it it not awesome </div>

    <button @click="show = !show">Toggle</button>
  <h2 v-show="show">Welcome Vivek 🚀</h2>
    
    </template>

    <script setup>
    import {ref} from 'vue';
     const isAwesome = ref(false);
     const show = ref(true)
     </script>