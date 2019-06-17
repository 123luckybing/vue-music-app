Slide组件使用例子：
```
<Slide>
  <div v-for='(item, index) in slideArr' :key='index'>
    <a :href='item.linkUrl'>
      <img :src='item.picUrl' alt="">
    </a>
  </div>
</Slide>

```