<template>
  <div class='loading-wrapper'>
    <img src="../assets/image/loading.gif" alt="">
    <p class='desc'>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入……'
    }
  }
}
</script>

<style scoped>
.loading-wrapper {
  width: 100%;
  text-align: center;
}

img {
  width: 24px;
  height: 24px;
}

.desc {
  line-height: 20px;
  font-size: 12px;
  color: rgba(255,255,255,0.5);
}
</style>
