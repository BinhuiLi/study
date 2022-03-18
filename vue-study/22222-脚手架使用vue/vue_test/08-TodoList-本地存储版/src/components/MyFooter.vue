<template>
  <div class="todo-footer" v-show="this.todos.length > 0">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
<!--       <span>已完成{{todos.filter(todo => todo.finish).length}}</span> / 全部{{todos.length}} -->  <!-- filter实现 -->
      <span>已完成{{finishTotal}}</span> / 全部{{todos.length}}   <!-- reduce实现条件统计 -->
    </span>
    <button class="btn btn-danger" @click="clearAllFinish" >清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'my-footer',
  props:['todos','checkAllToDo','clearAllFinisToDo'],
  computed:{
    finishTotal(){
      //reduce实现条件统计finish为true的数量
      //pre从0开始  执行todos的长度的次数  每次pre的只为上一次返回值  每次current的值为这次循环的数组元素
      return this.todos.reduce((pre,current) => current.finish ? ++pre : pre,0) 
    },
    isAll:{
      get(){
        return this.finishTotal === this.todos.length && this.todos.length > 0
      },
      set(val){
        this.checkAllToDo(val)
      }
    }
  },
  methods:{
    /* checkAll(e){
      this.checkAllToDo(e.target.checked)
    }, */
    clearAllFinish(){
      this.clearAllFinisToDo()
    }
  }
}
</script>
<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>