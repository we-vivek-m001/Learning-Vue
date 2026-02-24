<template>
    <h4>class component</h4>
    <div :class="{active: isActive}"> Apply Active class</div>
</template>

<script setup>
import {ref} from 'vue';

const isActive = ref(true);
</script>
