<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.finish" @change="handleCheck(todo.id)" />
      <span v-if="!todo.isEdit" >{{todo.name}}</span>
      <input type="text" v-model="name" v-if="todo.isEdit" @blur="blurTodo($event,todo.id)" @keyup.enter="editOk(todo.id)" ref="inputName" /> 
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo.id)">编辑</button>
  </li>
</template>

<script>
export default {
  name:'my-item',
  data(){
    return {
      name : this.todo.name
    }
  },
  props:['todo'],
  methods:{
    handleCheck(id){
      this.$bus.$emit('checkToDo',id)
    },
    handleDelete(id){
      if(confirm("你确定删除吗？")){
        this.$bus.$emit('deleteToDo',id)
      }
    },
    handleEdit(id){
      this.$bus.$emit('editToDo',id)
      this.$nextTick(()=>{
        this.$refs.inputName.focus()
      })
    },
    blurTodo(e,id){
      this.name = this.todo.name
      this.$bus.$emit('blurTodo',id)
    },
    editOk(id){
      if(this.name.trim() !== ''){
          this.$bus.$emit('editOk',id,this.name)
      }else{
        alert('值不能为空！！！')
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