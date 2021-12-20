<style scoped>
.aside-container{
  width: 200px;
  background: #ff0;
  float: left;
  height: 100vh;
  overflow: hidden;
  padding-top: 30px;
}
.right-container{
  float: left;
}
</style>
<template>
  <aside class="aside-container">
    <LayoutAside></LayoutAside>
  </aside>
  <div class="right-container">
    <nav class="nav-container"></nav>
    <main class="main-container">
      <router-view></router-view>
    </main>
    <footer class="footer-container"></footer>
  </div>
</template>

<script setup>
import LayoutAside from "./aside/LayoutAside.vue";
</script>
<script>
export default {
  name: 'Layout',
  data() {
    return {};
  },
  created() {
  },
  methods: {}
};
</script>

