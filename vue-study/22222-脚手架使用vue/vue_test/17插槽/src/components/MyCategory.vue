<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot>
      <ul>
        <li v-for="(data,index) in listData" :key="index">{{data}}</li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name:'My-Category',
  props:['title','listData']
}
</script>

<style>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  video{
    width: 100%;
  }
  img{
    width: 100%;
  }
</style>