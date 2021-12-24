<style lang="stylus" scoped>
.box {
  width: 400px
  height: @width
  background: #00ff8b
  overflow: hidden;

  .item {
    width: 250px
    height: @width
    background: #ffc806
    margin: 30px auto
    overflow: hidden;

    .inner {
      width: 100px
      height: @width
      background: #d100ff
      margin: 30px auto
    }
  }
}

.multiple {
  width: 300px
  height: @width
  background: #000
  color #ffffff
}
</style>
<template>
  <div>
    <div class="box" ref="box">
      <div class="item" ref="item">
        true 捕获 从当前元素开始往内捕获
        <div class="inner" ref="inner">
          false 冒泡
        </div>
      </div>
    </div>
    <div class="multiple" ref="multiple">
      addEventListener可以重复绑定事件, 按顺序执行 <br>
      on-* 可以和addEventListener重复绑定事件， 但是本身绑定的事件会被覆盖
    </div>
    <form>
      <input type="text">
      <button type="submit">123</button>
    </form>
  </div>
</template>

<script setup>
</script>
<script>
export default {
  name: 'Been',
  mounted() {
    // false 冒泡  true 捕获 从当前元素开始往内捕获
    this.$refs.box.addEventListener('click', () => {
      console.log('click box');
    }, false);
    this.$refs.item.addEventListener('click', () => {
      console.log('click item');
    }, true);
    this.$refs.inner.addEventListener('click', () => {
      console.log('click inner');
    }, false);


    this.$refs.multiple.addEventListener('click', () => {
      console.log('click multiple 1');
    }, false);
    this.$refs.multiple.onclick = () => {
      console.log('click multiple 2');
    }
    this.$refs.multiple.addEventListener('click', () => {
      console.log('click multiple 3');
    }, false);
    this.$refs.multiple.onclick = () => {
      console.log('click multiple 4');
    }
    this.$refs.multiple.addEventListener('click', () => {
      console.log('click multiple 5');
    }, false);
  }
}
</script>

