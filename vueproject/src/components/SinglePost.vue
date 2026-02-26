<template>

<h4>single post{{ postTitle }}
{{ id }}
{{ postDetail.title }}</h4>    
    </template>


<script setup>
defineProps({
  postTitle: String,
  id: Number,
  postDetail: Object
})
</script>