<template>
  <div> 
    <button @click.prevent="decrease()">-</button>
    <span>{{ counterData.count }}</span>
    <button @click.prevent="increase()">+</button>
  </div>
<div>{{ counterTitle }}</div>
<input type="text" v-model="counterTitle"/>


<TemplateSyntax/> 

<ParentComponent/>
<ComputedComponent/>
<ClassComponent/>
<StyleComponent/>
<ConditionalComponent/>
<ListRendering/>
<EventHandling/>
<FormInput/>
<WatchComponent/>
<WatchEffectComponent/>
<SinglePost 
  :postTitle="title" 
  :id="postId" 
  :postDetail="postDetails"
/>
</template>



<script setup>
import { ref, reactive} from 'vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import ComputedComponent from './components/ComputedComponent.vue';
import ClassComponent from './components/ClassComponent.vue';
import StyleComponent from './components/StyleComponent.vue';
import ConditionalComponent from './components/ConditionalComponent.vue'
import ListRendering from './components/ListRendering.vue';
import EventHandling from './components/EventHandling.vue';
import FormInput from './components/formInput.vue';
import WatchComponent from './components/WatchComponent.vue';
//import WatchEffectComponent from './components/WatchEffectComponent.vue';
import SinglePost from './components/SinglePost.vue';
import ChildComponent from './components/ChildComponent.vue';
import ParentComponent from './components/ParentComponent.vue';
const counter = ref(10);
const counterData = reactive({
  count: 0,
  title: 'counter 1title'
});

const postId = ref(42);
const title = ref("learning vue")
const counterTitle = ref('Counter title');
const postDetails = {
  title: "again leraning Vue",
  id:34

}


function increase(){
counter.value++;
}

function decrease(){
  counter.value--;
}


</script>





<style scope>
</style>