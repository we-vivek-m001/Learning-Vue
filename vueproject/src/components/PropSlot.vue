 <template>
    <div>
        <slot :text="message"></slot>
    </div>
 </template>

 <script setup>
  const message = "hi I am Vivek";
</script>