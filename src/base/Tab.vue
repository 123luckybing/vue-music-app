<template>
  <ul class='switch'>
    <li
      v-for='(item, index) in switchList'
      :key='index'
      class='switch-item'
      :class="{'active': currentIndex === index}"
      @click='switchItem(index)'
    >
      {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    // 标题
    switchList: {
      type: Array,
      default: []
    },
    // 默认选中index
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    switchItem (index) {
      // 点击item绑定事件
     this.$emit('switchItem', index)
    }
  }
}
</script>

<style scoped>
.switch {
  display: flex;
  align-items: center;
  width: 240px;
  margin: 0 auto;
  border: 1px solid #333;
  border-radius: 5px;
}

.switch-item {
  flex: 1;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.3);
}

.active {
  background: #333;
  color: #fff;
}
</style>
