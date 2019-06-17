<template>
  <div class='result-container'>
    <img src="../assets/image/no-result.png" alt="">
    <p class='text'>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '搜索结果为空'
    }
  }
}
</script>

<style scoped>
.result-container {
  margin-top: 100px;
  text-align: center
}

img {
  width: 86px;
  height: 90px;
  margin: 0 auto;
}

.text {
  margin-top: 30px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
}
</style>
