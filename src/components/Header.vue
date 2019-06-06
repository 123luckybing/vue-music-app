<template>
  <div class="hello">
    <div class='icon'>
      <img src="../assets/image/default.png" alt="">
    </div>
    <div class='text'>BingBing Music</div>
    <router-link to='/user' class='mine'>
      我的
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
  height: 44px;
  text-align: center;
  color: #ffcd32;
  font-size: 0;
}

.icon {
  display: inline-block;
}

img {
  vertical-align: top;
  margin-top: 6px;
  width: 30px;
  height: 32px;
  margin-right: 9px;
  border-radius: 50%;
}

.text {
  display: inline-block;
  vertical-align: top;
  line-height: 44px;
  font-size: 18px;
}

.mine {
  display: inline-block;
  vertical-align: top;
  line-height: 44px;
  font-size: 14px; /* no */
  position: absolute;
  color: #ffcd32;
  top: 0;
  right: 10px;
}
</style>
