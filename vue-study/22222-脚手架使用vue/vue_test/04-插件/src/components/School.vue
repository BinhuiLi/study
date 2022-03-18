<template>
  <div>
      <h2 @click="showName"> 学校名称：{{name | mySlice}}</h2>
      <h2 @click="hello"> 学校地址：{{address}}</h2>
      <input type="text" v-fbind:value="name"/>
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