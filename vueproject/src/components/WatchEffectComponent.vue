<template>
<h4>WatchEffect Component</h4>
<div>TodoId <input type="text" v-model="todoId"></div>
    </template>


<script setup>
import {ref, watch} from "vue";

const todoId = ref(1);
const data = ref(null);

// watch(todoId, async(newId)=>{
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${newId}`)
//     data.value = await response.json();
//    }); 
    
    watchEffect(async ()=>{
         let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json();
    })

</script>