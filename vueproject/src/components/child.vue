<script setup>

defineProps({
  username: String,
  age: Number
})

const emit = defineEmits(['sendMessage'])

function sendData() {
  emit('sendMessage', 'hello parent')
}

</script>

<template>
  <h3>Child comp {{ username }} {{ age }}</h3>

  <button @click="sendData">Send aMessage</button>
</template>