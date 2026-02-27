<template>
  <div> 
    <button @click.prevent="decrease()">-</button>
    <span>{{ counterData.count }}</span>
    <button @click.prevent="increase()">+</button>
  </div>
<div>{{ counterTitle }}</div>
<input type="text" v-model="counterTitle"/>


<!-- <TemplateSyntax/> 
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
/> -->

<SlotComponent>slot 
  <span style="color: red">click</span>
</SlotComponent>

<NameSlot >
  <template v-slot:header>
<h1>  header content</h1>
  </template>

    <div> main content</div>
  
  
  <template #footer>  <!-- #header = short form of v-slot:header -->
    <div> footer content</div>
  </template>
</NameSlot>

<PropSlot v-slot = "slotProps">
  <div> hello world</div>
  <div>{{ slotProps.text }}</div>

</PropSlot>




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
import SlotComponent from './components/SlotComponent.vue';
import NameSlot from './components/NameSlot.vue';
import PropSlot from './components/PropSlot.vue';
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