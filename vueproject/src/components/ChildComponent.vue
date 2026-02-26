<template>
  <div>
    <h3>Child Component</h3>
    <button @click="sendmessage">Send Data to Parent</button>
  </div>
</template>

    <script setup>
    const emit = defineEmits(['sendmessage']);


    const sendmessage = ()=>{
        emit('sendmessage','Hellow parent')
    }
</script>