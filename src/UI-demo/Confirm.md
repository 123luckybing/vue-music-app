Confirm组件只用举例:
```
<template>
  <div>
    <button @click='confirmAlert'>确认弹框弹出</button>
    <Confirm ref='confirm'
      text='确定删除该数据吗？'
      @confirm='deleteItem'
    ></Confirm>
  </div>
</template>
 
<script>
import Confirm from '../base/Confirm'
export default {
  components: {
    Confirm
  },
  methods: {
    confirmAlert () {
      this.$refs.confirm.show() // 调用confirm组件的show方法
    },
    deleteItem () {
      console.log('delete success')
    }
  }
}
</script>
 
<style scoped>
 
</style>

```