<script setup>
import {ref,onUnmounted,onMounted,onUpdated} from 'vue';

const vivekcounter = ref(0);

 onMounted(()=>{
    console.log('component mounted')
 })   // jab bhi hamara component dom ke andar ke andar aata hai
onUnmounted(()=>{
    console.log('component mounted')
 }) // jab bhi component tree se bahar to unmount to ho jata hai

 onUpdated(()=>{
    console.log('Updated mounted')
 })  // onupdated jab bhi value increase/decrease hori hai component ki,to value update

 const increaseCountvivek = () => {
    vivekcounter.value++
 }

</script>

<template>
<div >

    <button @click="increaseCountvivek">{{vivekcounter}}</button>

</div>
</template>