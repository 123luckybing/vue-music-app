<template>
  <div>
    <Header></Header>
    <Tab></Tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './Header'
import Tab from './Tab'
export default {
  components: {
    Header,
    Tab
  }
}
</script>

<style scoped>

</style>
