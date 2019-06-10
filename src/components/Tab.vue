<template>
  <div class='tab'>
    <router-link to='/recommend' class='tab-item'>
      <span>推荐</span>
    </router-link>
    <router-link to='/singer' class='tab-item'>
      <span>歌手</span>
    </router-link>
    <router-link to='/band' class='tab-item'>
      <span>排行</span>
    </router-link>
    <router-link to='/search' class='tab-item'>
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
}

.tab-item {
  flex: 1;
  text-align: center;
}

.tab-item span {
  padding-bottom: 5px
}

.router-link-active span {
  color: #ffcd32;
  border-bottom: 2px solid #ffcd32;
}
</style>


