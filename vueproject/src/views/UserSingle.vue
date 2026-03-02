<template>
  <h4>User Single: {{ id }}</h4>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>