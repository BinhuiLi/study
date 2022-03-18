<template>
  <div class="demo">
      <h2> 学校名称：{{name}}</h2>
      <h2> 学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name:'school-info',
  data(){
    return {
      name:'尚硅谷ssssss',
      address:'北京-昌平'
    }
  }
}
</script>
<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>