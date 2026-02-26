<template>
<ChildComponent @sendmessage="handlemessage"></ChildComponent>
     <p>{{ data }}</p>

   
     <Post  @send ="handlesend"   />
    </template>

    <script setup>
import { ref, watch } from 'vue';
import ChildComponent from './ChildComponent.vue';
import Post from './Post.vue';

const data = ref("");
   const handlemessage = (message)=>{
        data.value = message;
        
        console.log(data,"kjkjdsjksdkj");
   }


  const data1 = ref("");
   const handlesend = (payload)=>{
        data1.value = payload;
        
        console.log(payload,"kjkdkj");
   }




</script>