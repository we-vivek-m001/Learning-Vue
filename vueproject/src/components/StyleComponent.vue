<template>
     <h3> style binding</h3>
    <div :style="{color:activeColor, 'font-size': fontSize +'px'}">applying style</div>
    <div :style="styleObject">Apply style through reactive </div>

    
</template>
  



 <script setup>
 import {ref, reactive} from 'vue';
 const activeColor = ref('red');
 const fontSize = ref(30);

 const styleObject = reactive({
    color: 'red',
    fontSize: '13px'
 });
</script>
