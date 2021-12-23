<style scoped>

</style>
<template>
  <h1>404</h1>
  <button @click="goHome">返回首页</button>
</template>

<script setup>
import router from "../router";
const goHome = () => {
  router.push({
    name: 'homeIndex'
  })
}
</script>

