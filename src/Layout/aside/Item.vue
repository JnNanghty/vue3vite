<style lang="stylus" scoped>
.item {
  font-size: 16px;
  cursor: pointer;
}

.children {
  transform: v-bind('childrenStyle.transform');
  opacity: v-bind('childrenStyle.opacity');
  height: v-bind('childrenStyle.height');
  transition: .12s all ease-out;
  transform-origin: top center;
  padding-left: 10px
}
.item-label{
  .show-icon {
    margin-right: 20px
    float right
  }
  padding: 10px 0 10px 20px;

  &:hover{
    background: #e70303
  }
}
</style>
<template>
  <div class="item" v-if="!item.meta.hidden">
    <div class="item-label" @click.stop="handleClick">
      <span>{{ item.meta.name }}</span>
      <span class="show-icon" v-if="item.children">展开</span>
    </div>
    <div class="children">
      <Item v-for="(child, index) in item.children" :key="index" :item="child"></Item>
    </div>
  </div>
</template>
<script setup>
import {defineProps, ref} from "vue";
import Item from "./Item.vue";
import router from "../../router";

const props = defineProps(['item']);
const show = ref(false)
const childrenStyle = ref({
  transform: 'scaleY(0)',
  opacity: '0',
  height: '0'
})
const showChildren = () => {
  show.value = !show.value;
  if (show.value) {
    childrenStyle.value = {
      transform: 'scaleY(1)',
      opacity: '1',
      height: 'auto'
    }
  } else {
    childrenStyle.value = {
      transform: 'scaleY(0)',
      opacity: '0',
      height: '0'
    }
  }
}
const handleClick = () => {
  if (props.item.children) {
    showChildren()
  } else {
    router.push(props.item.path);
  }
}


</script>

