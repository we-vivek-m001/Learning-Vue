<template>
  <div> 
    <button @click.prevent="decrease()">-</button>
    <span>{{ counterData.count }}</span>
    <button @click.prevent="increase()">+</button>
  </div>
<div>{{ counterTitle }}</div>
<input type="text" v-model="counterTitle"/>


<TemplateSyntax/> 
<ComputedComponent/>

</template>



<script setup>
import { ref, reactive} from 'vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
const counter = ref(10);
const counterData = reactive({
  count: 0,
  title: 'counter 1title'
});

const counterTitle = ref('Counter title');



function increase(){
counter.value++;
}

function decrease(){
  counter.value--;
}


</script>





<style scope>
</style>