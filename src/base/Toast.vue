<template>
  <div class='toast-container' v-show='toastShow'>
    <div v-if='type === "success"' class="tip-title">
      <i class="icon">
        <img src="../assets/image/success.png" alt="">
      </i>
      <div class="text">{{text}}</div>
    </div>
    <div v-else-if='type === "error"' class="tip-title">
      <i class="icon">
        <img src="../assets/image/error.png" alt="">
      </i>
      <div class="text">{{text}}</div>
    </div>
    <div v-else-if='type === "info"' class="tip-title">
      <i class="icon">
        <img src="../assets/image/info.png" alt="">
      </i>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    text: {
      type: String,
      default: ''
    },
    delaytion: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    show () {
      this.toastShow = true
      setTimeout(() => {
        this.toastShow = false
      }, this.delaytion)
    }
  },
  data () {
    return {
      toastShow: false
    }
  }
}
</script>

<style>
.toast-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  padding: 15px 18px;
  border-radius: 5px;
  background: #666;
  text-align: center;
}

.tip-title {
  text-align: center;
  font-size: 0;
}

img {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
}

.text {
  font-size: 14px;
  color: #fff;
}
</style>
