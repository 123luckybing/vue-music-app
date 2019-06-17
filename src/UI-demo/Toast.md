Toast组件的使用例子：
```
<template>
  <div>
    <button @click='toastShow'>toast弹出</button>
    <Toast text='注册成功' type='info' ref='toast'></Toast>
  </div>
</template>

<script>
import Toast from '../base/Toast'
export default {
  components: {
    Toast
  },
  methods: {
    toastShow () {
      this.$refs.toast.show()
    }
  }
}
</script>

<style scoped>

</style>

```