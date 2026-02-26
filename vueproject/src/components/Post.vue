

<template>
     <h3> Posts details</h3>

     <SinglePost v-for="post in posts" :post="post" :key="post.id"> </SinglePost>
    </template>

    <script setup lang="ts">
    import {ref, watch, watchEffect} from "vue";
import SinglePost from './SinglePost.vue';
 



 const posts = ref([
    {id: 1, title: 'post 1'},
    {id: 2, title: 'post 2'},
     {id: 3, title: 'post 3'}
       
 ]);

const emit = defineEmits(['send']);


    const sendmessage = ()=>{
        emit('send',posts.value)
    }

       watchEffect(()=>{
    sendmessage()
   })


</script>