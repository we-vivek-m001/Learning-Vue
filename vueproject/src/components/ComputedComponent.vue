<template>
    <div>
       <h3> computed property  </h3>
       <div>  full name:{{ fullname}}</div>
       <input v-model="firstname" placeholder="first name">
       <input v-model="lastname" placeholder="first name">
    </div>
    </template>

    <script setup>
    import {computed, ref} from 'vue';
    
    const firstname = ref("vivek");
    const lastname = ref("mishra")

    const fullname = computed(()=>{
        return firstname.value + " " + lastname.value;
    })
</script>