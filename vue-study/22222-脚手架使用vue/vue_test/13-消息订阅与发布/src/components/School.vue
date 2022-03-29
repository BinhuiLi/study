<template>
  <div>
      <h2> 学校名称：{{name}}</h2>
      <h2> 学校地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name:'school-info',
  data(){
    return {
      name:'尚硅谷',
      address:'北京-昌平'
    }
  },
  methods:{
    reportStudentName(msgName,data){
      console.log('我是reportStudentName，我收到了学生名字为：'+data)
    }
  },
  mounted(){
    this.pubsubid = pubsub.subscribe('studentName',this.reportStudentName) //订阅studentName信息
  },
  beforeDestroy(){  
    pubsub.unsubscribe(this.pubsubid) //取消订阅pubsubid的信息
  }

}
</script>