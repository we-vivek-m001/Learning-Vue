<template>

    <div> event handling</div>
    <button v-on:click="count++">Counter</button>
    <div> counter: {{ count }}</div>
    </template>

    <script setup>
    import {ref} from 'vue';
    const count =ref(0);
    </script>