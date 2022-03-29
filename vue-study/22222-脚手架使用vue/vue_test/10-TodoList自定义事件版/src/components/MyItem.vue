<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.finish" @change="handleCheck(todo.id)" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name:'my-item',
  props:['todo','checkToDo','deleteToDo'],
  methods:{
    handleCheck(id){
      this.checkToDo(id)
    },
    handleDelete(id){
      if(confirm("你确定删除吗？")){
        this.deleteToDo(id)
      }
    }
  }
}
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }
</style>