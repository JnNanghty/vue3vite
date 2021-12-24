<style lang="stylus" scoped>
.aside-container {
  width: 200px;
  float: left;
  height: 100vh;
  overflow: hidden;
  padding-top: 30px;
  border-right: 1px solid #000;
  box-sizing border-box
}

.right-container {
  float: left;
  width calc(100% - 200px)
  box-sizing border-box

  .nav-container {
    width: 100%
    height 120px;
    border-bottom 1px solid #000000
  }

  .main-container{
    overflow scroll
    height: calc(100vh - 122px);
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <aside class="aside-container">
    <LayoutAside></LayoutAside>
  </aside>
  <div class="right-container">
    <nav class="nav-container">
      <LayoutNav></LayoutNav>
    </nav>
    <main class="main-container">
      <router-view v-slot="{ Component }">
        <transition name="component-fade">
          <component :is="Component"/>
        </transition>
      </router-view>
    </main>
    <footer class="footer-container"></footer>
  </div>
</template>

<script setup>
import LayoutAside from "./aside/LayoutAside.vue";
import LayoutNav from "./navigation/LayoutNav.vue";
</script>

