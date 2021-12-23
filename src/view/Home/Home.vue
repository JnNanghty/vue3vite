<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
<template>
  <div>
    <transition-group name="list" appear tag="div">
      <h1 v-for="(item, index) in list" :key="index">HHHHHHHHHHHHHHH{{ item }}OOOOOOOOOOOOOOOOOO</h1>
    </transition-group>
  </div>
</template>

<script setup>
import {ref} from "vue";

const list = ref(new Array(5))
let i = 51;
setInterval(() => {
  list.value.push(i)
  i++;
  if (list.value.length > 50) {
    list.value.length = 5;
  }
}, 200)
</script>

