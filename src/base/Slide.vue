<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  beforeCreate() {
    axios.get('/recommed/slide').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
