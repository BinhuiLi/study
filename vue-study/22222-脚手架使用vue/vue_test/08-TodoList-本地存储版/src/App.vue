<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <my-head :received="receive"></my-head>
        <my-list :todos="todos" :checkToDo="checkToDo" :deleteToDo="deleteToDo"></my-list>
        <my-footer :todos='todos' :checkAllToDo="checkAllToDo" :clearAllFinisToDo="clearAllFinisToDo"></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyHead from './components/MyHead.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name:'App',
   data(){
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    receive(val){
      this.todos.unshift(val)
    },
    checkToDo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.finish = !todo.finish
        }
      })
    },
    deleteToDo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    checkAllToDo(isChecked){
      this.todos.forEach(todo => todo.finish = isChecked)
    },
    clearAllFinisToDo(){
      this.todos = this.todos.filter(todo => !todo.finish)
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  components:{
    MyHead,
    MyList,
    MyFooter
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>