<template>
  <div class='recommend'>
    <!-- 图片为空，则不显示轮播图 -->
    <div v-if='slideArr.length'>
      <Slide>
        <div v-for='(item, index) in slideArr' :key='index'>
          <a :href='item.linkUrl'>
            <img :src='item.picUrl' alt="">
          </a>
        </div>
      </Slide>
    </div>
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
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
