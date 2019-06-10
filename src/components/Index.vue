<template>
  <div>
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
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
