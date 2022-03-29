<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name:'my-head',
  data(){
    return {todo:{id:'sss'}}
  },
  methods:{
    add(e){
      //校验数据
      if(!e.target.value.trim) return alert("输入数据不能为空")
      this.$emit('received',{id:nanoid(),name:e.target.value,finish:false})
      e.target.value = ''
    }
  }
}
</script>
<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>