<style lang="stylus" scoped>
.box {
  width: 200px
  height: @width
  margin: 50px auto
  background: #000
  animation key1 3s infinite linear
  border-radius 30%;
  position relative

  &::after {
    content ''
    display block
    width: 150px;
    height: @width
    border 50%
    position absolute
    top: 50%
    left: 50%
    background: red;
    transform translate(-50%, -50%)
    border-radius 30%
    animation key2 3s infinite cubic-bezier(0, 1, 1, 0)
  }
}
h1{
  text-align center
}
@keyframes key1 {
  0% {
    transform rotate(0)
    background: #11d956
  }
  50% {
    transform rotate(180deg)
    background: #a205fd;
  }
  100% {
    transform rotate(360deg)
    background: #11d956
  }
}

@keyframes key2 {
  0% {
    transform translate(-50%, -50%) rotate(0)
    background: #1175d9
  }
  50% {
    transform translate(-50%, -50%) rotate(180deg)
    background: #fda605;
  }
  100% {
    transform translate(-50%, -50%) rotate(360deg)
    background: #1175d9
  }
}
</style>
<template>
  <div>
    <div class="box"></div>
    <h1>转圈圈</h1>
  </div>
</template>

<script setup>
</script>

