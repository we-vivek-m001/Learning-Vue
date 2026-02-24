<template>

    <h3> list rendering</h3>
    
        
      <ul>
        <li v-for="book in books">{{ parentMessage }}{{ book.title }}</li>
        </ul>  
    
    </template>

    <script setup>
import {reactive, ref} from 'vue';
const parentMessage = ref('Parent');
const books = reactive([
     {title: 'book 1'},
     {title: 'book 2'},
     {title: 'book 3'},
     {title: 'book 4'}
]);

</script>
