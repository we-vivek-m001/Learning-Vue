<template>
  <h3>Create new post </h3>

  <form @submit.prevent = "submitForm"> 
    <div>
        <label> Title:</label>
        <input v-model = "title" type = "text"/>
    </div>

    <div>
        <label> Body:</label>
        <textarea v-model = "body" type = "text"> </textarea>
    </div>

    <button type = "submit"> Submit</button>
  </form>

  

 
   
  <div v-if="responseData">
    <h4>Response from Server:</h4>
    <p>ID: {{ responseData.id }}</p>
    <p>Title: {{ responseData.title }}</p>
    <p>Body: {{ responseData.body }}</p>
  </div>
<div>check</div>

</template>    

<script setup>
  import {ref} from 'vue';
  const title = ref('');
  const body = ref('');
  const responseData = ref(null);
  
 async function submitForm(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                body: body.value,
                userId: 1
            })
        }
    )
    const data = await response.json()
    responseData.value = data

    title.value = ''
    body.value = ''
    } catch(error){
        console.log('error', error);
    }
  }

</script>