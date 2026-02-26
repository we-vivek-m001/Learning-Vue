<template>
<h4>Watcher property</h4>
<p> Ask a ys/no Question </p>
<input type="text" v-model="question"/>

<div> Answer :{{ answer }} </div>
<img :src="responseData.image"/>

<div> x: <input type="text" v-model="x"></div>


<div>count: <input type="text" v-model="obj.count"/></div>
</template>

<script setup>
import {ref, watch, reactive} from "vue";
const question = ref("");
const answer = ref("question generally contains?");
const responseData = ref("");

watch(question, async(newQuestion, oldQuestion)=>{
    if(newQuestion.indexOf('m')>-1){
        answer.value = 'thinking...';
    
        try{
            const res = await fetch('https://yesno.wtf/api');
            const resJson = await res.json();
            responseData.value = resJson;
            answer.value = resJson.answer;
          } catch(error){
            answer.value = "Error!. could not reach the api"
          }
        }
})


const x = ref(0);
const y = ref(0);

watch(x, (newX)=>{
    console.log(`value of x is ${newX}`);
},{immediate:true});

const obj = reactive(
    {count:0,
      name: "vivek"
    });

   watch(()=> obj.count, (newCount, oldCount)=>{
    console.log(`new count value is ${newCount} and ${oldCount}`);
   });
 


const obj1 = reactive({
  count: 0,
  name: "vivek"
});

watch(
  obj,
  (newVal, oldVal) => {
    console.log("Object changed:", newVal);
  },
  { deep: true }
);






</script>