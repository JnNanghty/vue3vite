<style scoped>

</style>
<template>
  <Item v-for="(item, index) in $router.options.routes" :key="index" :item="item"></Item>
</template>

<script setup>
import Item from "./Item.vue";
</script>

