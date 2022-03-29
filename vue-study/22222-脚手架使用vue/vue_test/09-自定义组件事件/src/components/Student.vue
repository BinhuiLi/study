<template>
  <div>
      <h2> 学生姓名：{{name}}</h2>
      <h2> 学生性别：{{sex}}</h2>
      <button @click="sendName">点我向App发送学生名字</button>
      <button @click="unbind">点我解绑事件</button>
      <button @click="death">点我销毁当前实例对象</button>
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
      this.$emit('test')
    },
    death(){
      this.$destroy()   //通过销毁当前实例对象解绑事件
    },
    unbind(){
      /* this.$off('sendMyName')   //解绑单个事件 */
      /* this.$off(['sendMyName','test'])   //解绑多个事件 */
      this.$off()   //解绑所有事件
    }
  }
}
</script>