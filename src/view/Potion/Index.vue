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
    <p>诶嘿嘿嘿<sub>hello world</sub>哒哒哒</p>
    <p>log<sub>2</sub>4 = 2</p>
    <p>诶嘿嘿嘿<sup>hello world</sup>哒哒哒</p>
    <p>2<sup>2</sup> = 4</p>
    <p>36<sup>o</sup>C</p>
    <p>诶嘿嘿嘿<em>hello world</em>哒哒哒</p>
    <blockquote>hello world</blockquote>
    <cite>hello world</cite><br>
    <time>{{ now }}</time>
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
import timeUtil from '../../util/timeUtil.js'
import {ref} from "vue";

const now = ref(timeUtil.formatDate(Date.now(), 'yyyy-mm-dd'))
const handleClick = () => {
  router.push({
    name: 'potionName'
  })
}
</script>

