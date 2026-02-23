<template>
     <div> {{ message }}</div> 
     <div v-html="message1"></div>

     <div v-bind:id="dynamicId"> template code</div>
    </template>

    <script setup>
    const message = "df";
 const message1 = '<h4>directive</h4>';
 const dynamicId = 'my-id';

</script>