<style lang="stylus" scoped>
p {
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.text {
  direction: rtl;
}

.box {
  &::after {
    content ''
    display block
    clear both
  }
}

.item {
  width: 100px;
  height: @width;
  margin-right: 20px;
  float left
}
</style>
<template>
  <div>
    <p>
      文字方向
      <code>
        writing-mode: vertical-rl
      </code>
      <br>
      vertical => 垂直 <br>
      rl => right to left <br>
      lr => left to right <br>
    </p>
    <div class="text">
      书写方向: direction: rtl
      书写方向: direction: rtl
      书写方向: direction: rtl
      书写方向: direction: rtl
    </div>
    <div class="box">
      <div class="item item1" style="background: #43bd47;">
        将box::after伪元素设为block元素然后 <code> clear：both </code>
        用来解决flot高度塌陷问题
      </div>
      <div class="item item2" style="background:#e30101;"></div>
      <div class="item item3" style="background: #0e57f3;"></div>
    </div>
  </div>
</template>

<script setup>
</script>

