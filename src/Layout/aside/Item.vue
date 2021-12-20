<style scoped>
a {
  text-decoration: none;
}

.item {
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  background: #1cff3c;
  cursor: pointer;
}

.child-item {
  transform: v-bind(transform);
  opacity: v-bind(opacity);
  height: v-bind(height);
  transition: .12s all ease-out;
}
</style>
<template>
  <div class="item" @click="showChildren">
    <a href="#" @click.stop="handleClick">{{ item.meta.name }}</a>
    <div class="child-item">
      <Item v-for="(child, index) in item.children" :key="index" :item="child"></Item>
    </div>
  </div>
</template>
<script setup>
import {defineProps, ref} from "vue";
import Item from "./Item.vue";
import router from "../../router";

const props = defineProps(['item']);
const handleClick = () => {
  router.push(props.item.path);
  console.log('push');
}

const show = ref(false)
const transform = ref('scaleY(0)')
const opacity = ref('0')
const height = ref('0')
const showChildren = () => {
  show.value = !show.value;
  if (show.value) {
    transform.value = 'scaleY(1)';
    opacity.value = '1'
    height.value = 'auto'
  } else {
    transform.value = 'scaleY(0)';
    opacity.value = '0'
    height.value = '0'
  }
  console.log('show');
}
</script>

