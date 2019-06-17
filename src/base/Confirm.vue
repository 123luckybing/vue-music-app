<template>
  <div class="confirm-container" v-show='confirmShow'>
    <div class="confirm-content">
      <p class="text">{{text}}</p>
      <div class="confirm-btn">
        <div @click="cancel" class="operate-btn left">{{cancelBtnText}}</div>
        <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    // 弹窗显示
    show () {
      this.confirmShow = true
    },
    // 弹窗消失
    hide () {
      this.confirmShow = false
    },
    // 取消按钮
    cancel () {
      this.hide()
      this.$emit('cancel')
    },
    // 确定按钮
    confirm () {
      this.hide()
      this.$emit('confirm')
    }
  },
  data () {
    return {
      confirmShow: false
    }
  }
}
</script>

<style scoped>
.confirm-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.3)
}

.confirm-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 270px;
  border-radius: 13px;
  background: #333;
}

.text {
  padding: 19px 15px;
  line-height: 22px;
  text-align: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
}

.confirm-btn {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 18px;
}

.operate-btn {
  flex: 1;
  line-height: 22px;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  color: rgba(255, 255, 255, 0.3);
}

.left {
  border-right: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
