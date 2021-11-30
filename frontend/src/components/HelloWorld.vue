<template>
  <div v-if="visibility">
    <p>visibility:true</p>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <p>visibility:false</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data:() => ({
    message: 'Hello World',
    visibility: true,
  })
};
</script>
