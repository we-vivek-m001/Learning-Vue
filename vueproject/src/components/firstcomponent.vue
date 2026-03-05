<!-- <template>
   <h4> first template {{ data }}</h4>
   <h4> {{ state.count }}</h4>

   <h4>{{ firstname }}</h4>
   <input label="price" v-model="price">
   <h4>{{ total }}</h4>
    </template>

    <script setup>
    import {ref, reactive, computed} from 'vue';
   const data = ref(1);

   const state = reactive({
    count:0,
    name:"vivek"
   })
    

   const firstname = ref("vivek");
   const lastname = ref("mishra");
   
   const price = ref(100)
const quantity = ref(2)

const total = computed(() => price.value * quantity.value)




    </script> -->