<template>
  <div>
      <h2> 学生姓名：{{name}}</h2>
      <h2> 学生性别：{{sex}}</h2>
      <button @click="sendNameToSchool">点我向school发送我的名字</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name:'student-info',
  data(){
    return {
      name:'张三',
      sex:'男'
    }
  },
  methods:{
    sendNameToSchool(){
      pubsub.publish('studentName',this.name)
    }
  }
}
</script>