<template>

    <div>
        <h3> form input bindings</h3>
        <input type="text" v-model="text">
        <div>{{ text }}</div>
    </div>
    </template>

    <script setup>
    import {ref} from "vue";

    const text = ref("vk");
</script>