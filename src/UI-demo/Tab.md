Tab组件使用例子：
```
<template>
  <div>
   <Tab :switchList='switchList' :currentIndex='currentIndex' @switchItem='switchItem'></Tab>
  </div>
</template>

<script>
import Tab from '../base/Tab'
export default {
  components: {
    Tab
  },
  data () {
    return {
      switchList:[{
        name: '收藏'
      }, {
        name: '展览'
      }],
      currentIndex: 0
    }
  },
  methods: {
    switchItem(i) {
      this.currentIndex = i
    }
  }
}
</script>

<style scoped>

</style>

```