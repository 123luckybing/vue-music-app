<template>
  <div class='slider'>
    <div class='slide-img' ref='slideGroup'>
      <slot></slot>
    </div>
    <div class="slider-dots">
      <span
        v-for="(item, index) in imgLength"
        :key="index"
        class='dot'
        :class="{ active: selected === index }"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否可以循环轮播, 默认可轮播
    loop: {
      type: Boolean,
      default: true
    },
    // 是否可以自动轮播，默认可以
    autoPlay: {
      type: Boolean,
      default: true
    },
    // 轮播时间间隔 默认4s
    speed: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      imgLength: [],
      selected: 0,
      timer: ''
    }
  },
  methods: {
    // 初始化
    init () {
      const imgArr = this.$refs.slideGroup.children
      imgArr[this.selected].classList.add('img-selected')
    },
    // 图片播放
    play () {
      this.init()
      const imgArr = this.$refs.slideGroup.children
      this.timer = setInterval(() => {
        if (this.selected === this.imgLength.length - 1) {
          if (this.loop) {
            this.selected = -1
          } else {
            this.selected = this.imgLength.length - 2
            clearInterval(this.timer)
          }
        }
        this.selected += 1
        for (var i = 0; i <= this.imgLength.length - 1; i++) {
          imgArr[i].classList.remove('img-selected')
        }
        imgArr[this.selected].classList.add('img-selected')
      }, this.speed)
    }
  },
  mounted () {
    // 初始化图片个数
    const imgLength = this.$refs.slideGroup.children.length
    this.imgLength = new Array(imgLength)
    // 图片、dot轮播
    if (this.autoPlay) {
      this.play()
    } else {
      this.init()
    }
  }
}
</script>

<style>
.slider {
  position: relative;
}

.slide-img {
  display: block;
  width: 100%;
  height: 12rem;
}

.slide-img div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.2s linear;
  opacity: 0;
  visibility: hidden;
}

.slide-img div img {
  width: 100%;
  height: 100%;
}

.slider-dots {
  position: absolute;
  width: 100%;
  bottom: 12px;
  text-align: center;
  font-size: 0;
}

.dot {
  display: inline-block;
  margin: 0 4px;
  width: 8px; /* no */
  height: 8px; /* no */
  border-radius: 50%;
  background: #fff;
  transition: width 0.2s linear;
}

.active {
  width: 20px; /* no */
  border-radius: 5px;
  background: #fff;
}

.slide-img div.img-selected {
  opacity: 1;
  visibility: visible;
}
</style>
