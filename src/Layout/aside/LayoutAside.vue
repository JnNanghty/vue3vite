<style scoped>
h1{
  text-align: center;
  margin-bottom: 20px;
}
</style>
<template>
  <h1>侧边栏嘿嘿嘿</h1>
  <Item v-for="(item, index) in $router.options.routes"
        :key="index" :item="item"></Item>
</template>

<script setup>
import Item from "./Item.vue";
</script>

