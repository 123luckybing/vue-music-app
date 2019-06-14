<template>
  <div class='recommend'>
    <Slide>
      <!-- 图片为空，则不显示轮播图 -->
      <div v-if='slideArr.length'>
        <div v-for='(item, index) in slideArr' :key='index'>
          <a :href='item.linkUrl'>
            <img :src='item.picUrl' alt="" class='slide-img'>
          </a>
        </div>
      </div>
    </Slide>
  </div>
</template>

<script>
import Slide from '../base/Slide'
import axios from 'axios'
export default {
  components: {
    Slide
  },
  data () {
    return {
      slideArr: []
    }
  },
  beforeCreate () {
    axios.get('/recommed/slide').then((res) => {
      this.slideArr = res.data.data.slider
      console.log(this.slideArr.length)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>
.slide-img {
  display: block;
  width: 100%;
  height: 12rem;
}
</style>
