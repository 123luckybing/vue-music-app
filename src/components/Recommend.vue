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
    <div class="sings-list">
      <div class="list-title">热门歌单推荐</div>
    </div>
    <div class="sings-list">
      <li v-for='(item, index) in sangList' :key='index' class='item'>
        <img
          :src="`https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.album.mid}.jpg?max_age=2592000`"
          alt=""
        >
        <div class="text">
          <div class="sang-title">{{ item.name }}</div>
          <div class="singer">
            <span v-for="(elem, index) in (item.singer)" :key="index">
              {{ elem.name }}
            </span>
          </div>
        </div>
      </li>
    </div>
    <div class="loading-container" v-show='!sangList.length'>
      <Loading></Loading>
    </div>
  </div>
</template>

<script>
import Slide from '../base/Slide'
import Loading from '../base/Loading'
import axios from 'axios'
export default {
  components: {
    Slide,
    Loading
  },
  data () {
    return {
      slideArr: [],
      sangList: []
    }
  },
  methods: {
    // 获取轮播图数据
    getSlideData () {
      axios.get('/recommed/slide').then((res) => {
        this.slideArr = res.data.data.slider
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取歌单数据
    getSangList () {
      axios.get('/recommed/singList').then((res) => {
        this.sangList = res.data.detail.data.songInfoList
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getSlideData()
    this.getSangList()
  }
}
</script>

<style scoped>
.list-title {
  height: 65px;
  line-height: 65px;
  text-align: center;
  font-size: 14px;
  color: #ffcd32;
}

.item {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px 20px 20px;
}

.item img {
  width: 60px;
  padding-right: 20px;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
}

.singer {
  color: rgba(255, 255, 255, 0.3);
}

.sang-title {
  color: #fff;
  margin-bottom: 10px;
}
</style>
