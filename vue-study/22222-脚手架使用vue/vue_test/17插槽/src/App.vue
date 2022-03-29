<template>
  <div class="container">
    <MyCategory title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg" alt="">
    </MyCategory>
    <MyCategory title="游戏" :listData="games"></MyCategory>
    <MyCategory title="电影" :listData="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue'
export default {
  name:'App',
  data(){
    return {
      foods:['火锅','火锅','火锅','火锅'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['教父','拆弹专家','你好，李焕英','嘿嘿嘿']
    }
  },
  components:{MyCategory}
}
</script>
<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>