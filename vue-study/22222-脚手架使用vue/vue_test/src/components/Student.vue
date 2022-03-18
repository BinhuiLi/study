<template>
  <div>
      <h2> 学生姓名：{{name}}</h2>
      <h2> 学生性别：{{sex}}</h2>
      <button @click="sendName">点我向App发送学生名字</button>
  </div>
</template>

<script>
export default {
  name:'student-info',
  data(){
    return {
      name:'张三',
      sex:'男'
    }
  },
  methods:{
    sendName(){
      this.$emit('sendMyName',this.name)
    }
  }
}
</script>