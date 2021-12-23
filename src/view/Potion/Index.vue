<style scoped>
div {
  font-size: 24px;
}
</style>
<template>
  <div>
    <p>诶嘿嘿嘿<code>hello world</code>哒哒哒</p>
    <p>诶嘿嘿嘿hello world哒哒哒</p>
    <p>诶嘿嘿嘿<strong>hello world</strong>哒哒哒</p>
    <p>诶嘿嘿嘿<b>hello world</b>哒哒哒</p>
    <p>诶嘿嘿嘿<u>hello world</u>哒哒哒</p>
    <p>诶嘿嘿嘿<s>hello world</s>哒哒哒</p>
    <p>诶嘿嘿嘿<em>hello world</em>哒哒哒</p>
    <blockquote>hello world</blockquote>
    <cite>hello world</cite>
    <details>
      <summary>Copyright 0000.</summary>
      <span>hello world</span>
    </details>
    <button @click="handleClick">123</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import router from "../../router";
const handleClick = () => {
  router.push({
    name: 'potionName'
  })
}
</script>

