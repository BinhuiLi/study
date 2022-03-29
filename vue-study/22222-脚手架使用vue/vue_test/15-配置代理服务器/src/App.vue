<template>
  <div id="root">
    <button @click="getStudentInfo">获取学生信息</button>
    <button @click="getCarInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'App',
  methods:{
    getStudentInfo(){
      axios.get('http://localhost:8080/server1/students').then(
        res =>{
          console.log('获取成功',res.data);
        },
        error =>{
          console.log('请求失败',error.message);
        }
      )
    },
    getCarInfo(){
      axios.get('http://localhost:8080/server2/cars').then(
        res =>{
          console.log('获取成功',res.data);
        },
        error =>{
          console.log('请求失败',error.message);
        }
      )
    }
  }
}
</script>