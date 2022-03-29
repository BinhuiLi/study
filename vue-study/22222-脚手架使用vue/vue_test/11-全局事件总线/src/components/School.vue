<template>
  <div>
      <h2> 学校名称：{{name}}</h2>
      <h2> 学校地址：{{address}}</h2>
      <button @click="sendName">点我向App发送学校名称</button>
  </div>
</template>

<script>
export default {
  name:'school-info',
  data(){
    return {
      name:'尚硅谷',
      address:'北京-昌平'
    }
  },
  props:['getSchoolName'],
  methods:{
    sendName(){
      this.getSchoolName(this.name)
    },
    reportStudentName(val){
      console.log('我是reportStudentName，我收到了学生名字为：'+val)
    }
  },
  mounted(){
    this.$bus.$on('studentToSchool',this.reportStudentName)
  }

}
</script>